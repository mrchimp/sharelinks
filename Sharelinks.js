import Emitter from 'tiny-emitter'
import listen from 'good-listener'

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */
function getAttributeValue (suffix, element) {
  const attribute = `data-${suffix}`

  if (!element.hasAttribute(attribute)) {
    return
  }

  return element.getAttribute(attribute)
}

const platforms = {
  facebook: {
    href: 'https://www.facebook.com/sharer/sharer.php?u=%URL%',
    width: 400,
    height: 500
  },
  twitter: {
    href: 'https://twitter.com/intent/tweet?text=%TITLE%&url=%URL%',
    width: 540,
    height: 260
  },
  tumblr: {
    href: 'http://www.tumblr.com/share/link?url=%URL%',
    width: 500,
    height: 500
  },
  linkedin: {
    href:
      'http://www.linkedin.com/shareArticle?mini=true&amp;url=%URL%&amp;title=%TITLE%',
    width: 520,
    height: 570
  }
}

class Sharelinks extends Emitter {
  constructor (selector, options) {
    super()

    const elements = document.querySelectorAll(selector)

    this.listenClick(selector)
  }

  makeLink (platform, url, title) {
    return platform.href
      .replace('%URL%', encodeURIComponent(url).replace(/%20/g, '+'))
      .replace('%TITLE%', encodeURIComponent(title).replace(/%20/g, '+'))
  }

  listenClick (selector) {
    this.listener = listen(selector, 'click', e => this.onClick(e))
  }

  onClick (e) {
    // Left click only! Don't hijack middle click!
    if (e.which == 1) {
      e.preventDefault()

      const elem = e.target,
        platform = platforms[elem.dataset.platform],
        url = elem.getAttribute('href'),
        width = getAttributeValue('width', elem) || platform.width,
        height = getAttributeValue('height', elem) || platform.height

      let href

      if (typeof platform === 'undefined') {
        // throw "Sharelinks Error: Invalid data-platform: " + $(this).data('platform');
        throw 'Sharelinks Error: Invalid data-platform: ' +
          getAttributeValue('platform', elem)
      }

      if (url) {
        href = this.makeLink(
          platform,
          getAttributeValue('url', elem) || window.location.href,
          getAttributeValue('title', elem) || document.title
        )
      } else {
        href = elem.getAttribute('href')
      }

      this.emit('success', {
        platform: elem.dataset.platform,
        url: getAttributeValue('url', elem) || window.location.href
      })

      window.open(href, '', 'status=yes, width=' + width + ', height=' + height)
    }
  }
}

export default Sharelinks

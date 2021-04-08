/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */
function getAttributeValue(suffix, element) {
  const attribute = `data-${suffix}`;

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}

let platforms = [
  {
    name: 'whatsapp',
    href: 'whatsapp://send?text=%URL%',
    width: null,
    height: null,
    sameWindow: true
  },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/sharer/sharer.php?u=%URL%',
    width: 400,
    height: 500
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/intent/tweet?text=%TITLE%+-+%URL%',
    width: 540,
    height: 260
  },
  {
    name: 'pinterest',
    href:
      'http://pinterest.com/pin/create/button/?url=%URL%&description=%TITLE%&media=%IMAGE%',
    width: 520,
    height: 570
  },
  {
    name: 'tumblr',
    href: 'http://www.tumblr.com/share/link?url=%URL%',
    width: 500,
    height: 500
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/sharing/share-offsite/?url=%URL%',
    width: 520,
    height: 570
  }
];

class Sharelinks {
  constructor(selector, options) {
    if (options && 'platforms' in options) {
      platforms.push(...options.platforms);
    }

    this.listenClick(selector);
  }

  makeLink(platform, url, title, image) {
    return platform.href
      .replace('%URL%', encodeURIComponent(url).replace(/%20/g, '+'))
      .replace('%TITLE%', encodeURIComponent(title).replace(/%20/g, '+'))
      .replace('%IMAGE%', encodeURIComponent(image).replace(/%20/g, '+'));
  }

  listenClick(selector) {
    document.querySelectorAll(selector).forEach((link) => {
      link.addEventListener('click', this.onClick);
    });
  }

  findImage(elem) {
    if (getAttributeValue('image', elem)) {
      return getAttributeValue('image', elem);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogImage) {
      return ogImage.getAttribute('content');
    }
  }

  onClick(e) {
    // Left click only! Don't hijack middle click!
    if (e.which == 1) {
      e.preventDefault();

      const elem = e.target;
      const platform = platforms.find((platform) => {
        return platform.name === elem.dataset.platform;
      });
      const url = elem.getAttribute('href') || window.location.href;

      if (typeof platform === 'undefined') {
        throw (
          'Sharelinks Error: Invalid data-platform: ' +
          getAttributeValue('platform', elem)
        );
      }

      const width = getAttributeValue('width', elem) || platform.width;
      const height = getAttributeValue('height', elem) || platform.height;
      const href = this.makeLink(
        platform,
        url,
        getAttributeValue('title', elem) || document.title,
        this.findImage(elem)
      );
      const event = new CustomEvent('share-link-clicked', {
        detail: {
          platform: elem.dataset.platform,
          url: getAttributeValue('url', elem) || window.location.href
        }
      });

      elem.dispatchEvent(event);

      if ('sameWindow' in platform && platform.sameWindow) {
        window.location.href = href; // Same window
      } else {
        window.open(
          // New window
          href,
          '',
          'status=yes, width=' + width + ', height=' + height
        );
      }
    }
  }
}

export default Sharelinks;

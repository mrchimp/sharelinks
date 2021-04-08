/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 * @param {String} default_val
 */
function dataAttr(suffix, element, default_val) {
  if (typeof element.dataset[suffix] === 'undefined') {
    return default_val;
  }

  return element.dataset[suffix];
}

function urlify(value) {
  return encodeURIComponent(value).replaceAll(/%20/g, '+');
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
  constructor(selector, options = {}) {
    platforms.push(...(options.platforms ?? []));

    this.options = options;

    // Listen for clicks
    document.querySelectorAll(selector).forEach((link) => {
      link.addEventListener('click', this.onClick.bind(this));
    });
  }

  makeLink(platform, url, title, image) {
    return platform.href
      .replaceAll('%URL%', urlify(url))
      .replaceAll('%TITLE%', urlify(title))
      .replaceAll('%IMAGE%', urlify(image));
  }

  findImage(elem) {
    if (dataAttr('image', elem)) {
      return dataAttr('image', elem);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogImage) {
      return ogImage.getAttribute('content');
    }
  }

  onClick(e) {
    // Left click only! Don't hijack middle click!
    if (e.which !== 1) {
      return;
    }

    e.preventDefault();

    const elem = e.target;
    const platform = platforms.find((platform) => {
      return platform.name === dataAttr('platform', elem);
    });

    if (typeof platform === 'undefined') {
      throw (
        'Sharelinks Error: Invalid data-platform: ' + dataAttr('platform', elem)
      );
    }

    const url = dataAttr('url', elem, window.location.href);
    const width = dataAttr('width', elem, platform.width);
    const height = dataAttr('height', elem, platform.height);
    const href = this.makeLink(
      platform,
      url,
      dataAttr('title', elem, document.title),
      this.findImage(elem)
    );

    if (typeof this.options.callback === 'function') {
      this.options.callback({
        platform: elem.dataset.platform,
        url: url
      });
    }

    if (platform.sameWindow) {
      window.location.href = href;
    } else {
      const new_window = window.open(
        href,
        '',
        'status=yes, width=' + width + ', height=' + height
      );
      // Prevent referer bug.
      // See https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
      new_window.opener = null;
    }
  }
}

export default Sharelinks;

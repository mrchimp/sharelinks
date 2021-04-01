# Sharelinks.js

Turn simple `<a>` tags into share links for social media sites. Links will open a share dialog in a popup window.

Roughly 2kb footprint when minimised.

Supported platforms:

- Facebook
- Twitter
- LinkedIn

# Requirements

- None

# Installation

    npm install --save sharelinks

# Setup

Some HTML:

    <a href="#" class="share" data-platform="twitter">Share this page on Twitter</a>

Some JS:

    import Sharelinks from 'sharelinks';
    new Sharelinks('.share');

With an event:

    import Sharelinks from './Sharelinks.js'

    const sharelinks = new Sharelinks('.share')

    sharelinks.on('success', e => {
      console.log('Link Shared')
      console.info('Platform', e.platform)
      console.info('Url', e.url)
    })

See `index.html` for examples.

You may wish to (i.e. you probably should) replace the `href` attribute with an actual URL. See below.

# import/require

Sharelinks is an ES6 Class so you should be able to use `require` or `import` in a ES6/browserify/webpack/whatever type situation.

# Options

Are options are set per-link by using data attributes. Available options are as follows:

### data-platform (required)

The social media platform to share on. Available options are: `facebook`, `twitter`, `linkedin`.

### data-height and data-width

The width and height of the popup window.

### data-url

By default the current page URL is used. You can use `data-url` to specify a different link to share. Useful on index/archive/category pages.

### data-title

The title of the page being shared. By default the title of the current window is used. Only used by LinkedIn.

# A note about usability

To increase usability, Sharelinks will replace the `href` attribute of the selected links so that opening links in a new window will work. However If you want the links to work without javascript then you should manually populate the `href` attribute. You can find the URLs easily at the top of Sharelinks.js - just replace `%URL%` and `%TITLE%` with url-encoded versions of the url and title of the page you wish to share.

# Development

Run `npm install` to get the things you need. Then run `npm run start` to run the tasks automatically as you work. For more info...I dunno. Read a book or something. I can't teach you everything.

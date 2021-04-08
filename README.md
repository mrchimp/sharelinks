# Sharelinks.js

Turn simple `<a>` tags into share links for social media sites. Links will open a share dialog in a popup window.

Roughly 5kb footprint when minimised.

Supported platforms:

- Facebook
- Twitter
- LinkedIn
- Pinterest
- Whatsapp
- Tumblr

# Requirements

- None

# Installation

```bash
npm install --save sharelinks
```

# Setup

Some HTML:

```html
<a href="#" class="share" data-platform="twitter">Share this page on Twitter</a>
```

Some JS:

```javascript
import Sharelinks from 'sharelinks';
new Sharelinks('.share');
```

With an event:

```javascript
import Sharelinks from './Sharelinks.js';

const sharelinks = new Sharelinks('.share');

sharelinks.on('share-link-clicked', e => {
    console.log('Link Shared');
    console.info('Platform', e.platform);
    console.info('Url', e.url);
});
```

See `index.html` for examples.

You may wish to (i.e. you probably should) replace the `href` attribute with an actual URL. See below.

# import/require

Sharelinks is an ES6 Class so you should be able to use `require` or `import` in a ES6/browserify/webpack/whatever type situation.

# Options

Are options are set per-link by using data attributes. Available options are as follows:

### data-platform (required)

The social media platform to share on. Available options are: `facebook`, `twitter`, `linkedin`, `whatsapp`, `tumblr`.

### data-height and data-width

The width and height of the popup window.

### data-url

By default the URL in the href of the link is used.

### data-title

The title of the page being shared. By default the title of the current window is used. Only used by LinkedIn.

### data-image

Overrides the URL of the image to share. By default the image defined in `<meta property="og:image" content="THIS BIT HERE">` is used. Only used by Pinterest.

# A note about usability

To increase usability, Sharelinks will replace the `href` attribute of the selected links so that opening links in a new window will work. However If you want the links to work without javascript then you should manually populate the `href` attribute. You can find the URLs easily at the top of Sharelinks.js - just replace `%URL%` and `%TITLE%` with url-encoded versions of the url and title of the page you wish to share.

# Development

Install dependencies

```bash
npm install
```

Compile automatically as you work

```bash
npm run start
```

Build for production

```bash
npm run build
```


# Sharelinks.js #

Turn simple `<a>` tags into share links for social media sites. Links will open a share dialog in a popup window.

Roughly 2kb footprint when minimised.

Supported platforms:

 * Facebook
 * Twitter
 * Tumblr
 * Google+
 * LinkedIn
 * Pinterest

# Requirements #

 * None (jQuery was required before v1.0.0)

# Installation #

You can install using [Bower](http://bower.io/).

    bower install --save sharelinks

Or npm

    npm install --save sharelinks

Or just grab the js file and put it somewhere useful.

# Setup #

Some HTML:

    <a href="#" class="share" data-platform="twitter">Share this page on Twitter</a>


Some JS:

    import 'sharelinks';
    sharelinks('.share');


See `tests/` for examples.

You may wish to (i.e. you probably should) replace the `href` attribute with an actual URL. See below.

# import/require

Sharelinks has a UMD wrapper so you should be able to use `require` or `import` in a ES6/browserify/webpack/whatever type situation. I've removed the jQuery (in v1.0.0+) dependency so it should actually work now!

# Options #

Are options are set per-link by using data attributes. Available options are as follows:

### data-platform (required) ###

The social media platform to share on. Available options are: `facebook`, `twitter`, `tumblr`, `google`, `linkedin`.

### data-height and data-width ###

The width and height of the popup window.

### data-url ###

By default the current page URL is used. You can use `data-url` to specify a different link to share. Useful on index/archive/category pages.

### data-title ###

The title of the page being shared. By default the title of the current window is used. Only used by LinkedIn.

### data-image ###

Overrides the URL of the image to share. By default the image defined in `<meta property="og:image" content="THIS BIT HERE">` is used. If this is not defined then the URL of the first image in the page is used. Only used by Pinterest.

# A note about usability #

To increase usability, Sharelinks will replace the `href` attribute of the selected links so that opening links in a new window will work. However If you want the links to work without javascript then you should manually populate the `href` attribute. You can find the URLs easily at the top of sharelinks.js - just replace `%URL%` and `%TITLE%` with url-encoded versions of the url and title of the page you wish to share.


# Development #

Grunt is used to lint, compile and generally prepare sharelinks. Run `npm install` to get the things you need. Then run `grunt` to run all tasks or `grunt watch` to run the tasks automatically as you work. For more info...I dunno. Read a book or something. I can't teach you everything.

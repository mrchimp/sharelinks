
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

 * jQuery

# Installation #

You can install using [Bower](http://bower.io/).

    bower install --save sharelinks

Or npm

    npm install --save sharelinks

Or just grab the js file and put it somewhere useful.

# Setup #

    <a href="#" class="share" data-platform="twitter">Share this page on Twitter</a>

    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="sharelinks.js"></script>
    <script type="text/javascript">
		$('.share').sharelinks();
    </script>

See `index.html` for examples.

You may wish to (i.e. you probably should) replace the `href` attribute with an actual URL. See below.

# import/require

Sharelinks has a UMD wrapper so you should be able to use `require` or `import` in a ES6/browserify/webpack/whatever type situation. However, jQuery doesn't play well with that sort of thing so good luck with that. When I figure it all out I'll leave some instructions here. Or I'll just re-write it without jQuery and then everyone will be happy.

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

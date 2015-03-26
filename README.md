
# Sharelinks.js #

Turn simple `<a>` tags into share links for social media sites. Links will open a share dialog in a popup window.

Roughly 2kb footprint when minimised.

Supported platforms:

 * Facebook
 * Twitter
 * Tumblr
 * Google+
 * LinkedIn

# Requirements #

 * jQuery

# Installation #

You can install using [Bower](http://bower.io/).

    bower install --save sharelinks

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

# Options #

Are options are set per-link by using data attributes. Available options are as follows:

### data-platform (required) ###

The social media platform to share on. Available options are: `facebook`, `twitter`, `tumblr`, `google`, `linkedin`.

### data-height and data-width ###

The width and height of the popup window.

### data-url ###

By default the current page URL is used. You can use `data-url` to specify a different link to share. Useful on index/archive/category pages.

### data-title ###

The title of the page being shared. By default the title of the current window is used. This is only used by LinkedIn.


# A note about usability #

To increase usability, Sharelinks will replace the `href` attribute of the selected links so that opening links in a new window will work. However If you want the links to work without javascript then you should manually populate the `href` attribute. You can find the URLs easily at the top of sharelinks.js - just replace `%URL%` and `%TITLE%` with url-encoded versions of the url and title of the page you wish to share.


# Development #

Grunt is used to lint, compile and generally prepare sharelinks. Run `npm install` to get the things you need. Then run `grunt` to run all tasks or `grunt watch` to run the tasks automatically as you work. For more info...I dunno. Read a book or something. I can't teach you everything.


(function ($) {

	var platforms = {
		facebook: {
			href: 'https://www.facebook.com/sharer/sharer.php?u=%URL%',
			width: 400,
			height: 500
		},
		twitter: {
			href: 'https://twitter.com/intent/tweet?status=%TITLE%+-+%URL%',
			width: 540,
			height: 260
		},
		tumblr: {
			href: 'http://www.tumblr.com/share/link?url=%URL%',
			width: 500,
			height: 500
		},
		tumblrPhotos: {
			href: 'http://www.tumblr.com/share/photos?url=%URL%',
			width: 500,
			height: 500
		},
		google: {
			href: 'https://plus.google.com/share?url=%URL%',
			width: 600,
			height: 600
		},
		linkedin: {
			href: 'http://www.linkedin.com/shareArticle?mini=true&amp;url=%URL%&amp;title=%TITLE%',
			width: 520,
			height: 570
		},
		pinterest: {
			href: 'http://pinterest.com/pin/create/button/?url=%URL%&description=%TITLE%&media=%IMAGE%',
			width: 520,
			height: 570
		}
	};

	$.fn.sharelinks = function () {
		function makeLink(platform, url, title, image) {
			return platform.href
				.replace('%URL%',   encodeURIComponent(url).replace(/%20/g, '+'))
				.replace('%TITLE%', encodeURIComponent(title).replace(/%20/g, '+'))
				.replace('%IMAGE%', encodeURIComponent(image).replace(/%20/g, '+'));
		}

		function log(msg) {
			if (typeof console.error == 'function') {
				console.error(msg);
			} else if (typeof console.log == 'function') {
				console.log(msg);
			}
		}

		function findImage() {
			var image = $('meta[property="og:image"]').attr('content');

			if (!image) {
				image = $('img').first().attr('src');
			}

			return image || '';
		}

		this.each(function () {
			var share_url, dest, title, image,
				platform = platforms[$(this).data('platform')] || false;

			if (!platform) {
				// Logging rather than throwing - we want other links to work even if this one doesn't
				log("Sharelinks Error: Invalid data-platform: " + $(this).data('platform'));
			} else {
				dest =  $(this).data('url')   || window.location.href;
				title = $(this).data('title') || document.title;
				image = $(this).data('image') || findImage();

				share_url = makeLink(platform, dest, title, image);

				$(this)
				.attr('href', share_url)
				.on('click', function(e) {
					// Left click only! Don't hijack middle click!
					if (event.which == 1) {
						e.preventDefault();
	
						var width, height, href,
							platform = platforms[$(this).data('platform')] || false;

						if (typeof platform === 'undefined') {
							throw "Sharelinks Error: Invalid data-platform: " + $(this).data('platform');
						}

						width  = $(this).data('width')  || platform.width;
						height = $(this).data('height') || platform.height;
						image  = $(this).data('image')  || findImage();

						if ($(this).data('url')) {
							href = makeLink(platform, $(this).data('url'), $(this).data('title'), image);
						} else {
							href = $(this).attr('href');
						}

						window.open(href, '', 'status=yes, width='+width+', height='+height);
					}
				});
			}
		});
	};
})(jQuery);

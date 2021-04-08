import Sharelinks from './Sharelinks.js';

new Sharelinks('.share', {
  // Add an extra platform
  platforms: [
    {
      name: 'my-custom-platform',
      href: 'https://example.com/share?u=%URL%&title=%TITLE%&image=%IMAGE%',
      width: 400,
      height: 500
    }
  ],

  // Define a callback for when a link is clicked
  callback: (e) => {
    console.log('Link Shared!');
    console.info('Platform', e.platform);
    console.info('Url', e.url);
  }
});

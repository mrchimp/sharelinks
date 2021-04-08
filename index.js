import Sharelinks from './Sharelinks.js';

// const sharelinks = new Sharelinks('.share', {
//   // Add extra plaform.
//   platforms: [
//     {
//       name: 'whatsapp',
//       href: 'whatsapp://send?text=%URL%',
//       width: null,
//       height: null,
//       sameWindow: true
//     }
//   ]
// })

new Sharelinks('.share');

const links = document.querySelectorAll('.share');

links.forEach((item) => {
  item.addEventListener('share-link-clicked', (e) => {
    console.log('Link Shared!');
    console.info('Platform', e.detail.platform);
    console.info('Url', e.detail.url);
  });
});

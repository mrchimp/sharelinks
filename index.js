import Sharelinks from './Sharelinks.js'

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

const sharelinks = new Sharelinks('.share')

sharelinks.on('share-link-clicked', e => {
  console.log('Link Shared!')
  console.info('Platform', e.platform)
  console.info('Url', e.url)
})

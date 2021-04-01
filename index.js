import Sharelinks from './Sharelinks.js'

const sharelinks = new Sharelinks('.share')

sharelinks.on('success', e => {
  console.log('Link Shared')
  console.info('Platform', e.platform)
  console.info('Url', e.url)
})

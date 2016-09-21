var sharelinks = require('../../js/sharelinks.js');

sharelinks('.share', {
  onShare: function() {
    console.log('Link shared!');
  }
});

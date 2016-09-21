var sharelinks = require('../../js/sharelinks.js');

sharelinks('.share', {
  onShare: function(data) {
    console.log(data);
    console.log('Link shared!');
  }
});

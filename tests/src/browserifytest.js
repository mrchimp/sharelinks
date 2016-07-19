import $ from 'jquery';
import jQuery from 'jquery';

// export for others scripts to use
window.jQuery = jQuery;
window.$ = jQuery;

import '../../js/sharelinks';

$(function() {
  $('.share').sharelinks(); // Then this works?
});

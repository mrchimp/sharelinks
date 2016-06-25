import $ from 'jquery';
import jQuery from 'jquery';
// // export for others scripts to use
//window.$ = $;

//window.jQuery = jQuery;
import sharelinks from '../../js/sharelinks';

$(function() {
  console.log(sharelinks()); // WTF, this returns jQuery

  $('.share').sharelinks(); // Then this works?
});

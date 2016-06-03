/*
 * John Pettigrew
 * This allows us to use both sweetalert 1 and 2.
 * Note: This must be loaded before sweetalert 1 and after sweetalert 2.
 */
(
  function(){
    'use strict';
    window.sweetAlert2 = window.sweetAlert;
  }
)();

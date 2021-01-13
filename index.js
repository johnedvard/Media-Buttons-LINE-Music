// ==UserScript==
// @name         Media button support for LINE Music
// @namespace    https://reitn.no/
// @version      1.0
// @description  Manually click the previoustrack and nexttrack buttons on LINE Msic's web page. Remember to press the Play button in the web UI before using any of the media buttons.
// @author       johnedvard
// @match        https://music.line.me/*
// @copyright    2021+, reitn.no
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
navigator.mediaSession.setActionHandler('previoustrack', function() {
  document.getElementsByClassName('btn_play_prev')[0].click();
});
navigator.mediaSession.setActionHandler('nexttrack', function() {
  document.getElementsByClassName('btn_play_next')[0].click();
});
console.log('media buttons added');
})();

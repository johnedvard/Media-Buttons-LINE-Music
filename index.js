// ==UserScript==
// @name         Media button support for LINE Music
// @namespace    https://reitn.no/
// @version      2.1
// @description  Script to manually click the previoustrack and nexttrack buttons on LINE Msic's web page. Remember to press the Play button in the web UI before using any of the media buttons.
// @author       johnedvard
// @match        https://music.line.me/*
// @copyright    2021+, reitn.no
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
function addMediaKeySupport() {
  navigator.mediaSession.setActionHandler('previoustrack', function() {
    document.getElementsByClassName('btn_play_prev')[0].click();
  });
  navigator.mediaSession.setActionHandler('nexttrack', function() {
    document.getElementsByClassName('btn_play_next')[0].click();
  });
  console.log('media key support added');
}


function injectMonetizationTag() {
  const metaEl = document.createElement('meta');
  const moneAttr = document.createAttribute('name');
  moneAttr.value = 'monetization';
  const contentAttr = document.createAttribute('content');
  contentAttr.value = '$ilp.uphold.com/Wb3kd4Jf3642'; // payment pointer ID
  metaEl.setAttributeNode(moneAttr);
  metaEl.setAttributeNode(contentAttr);
  const headEl = document.getElementsByTagName('head')[0];
  headEl.appendChild(metaEl);
  console.log('monetization added');
}

addMediaKeySupport();
injectMonetizationTag();

})();

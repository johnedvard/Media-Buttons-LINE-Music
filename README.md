# Media-Buttons-LINE-Music
Media button support for LINE Music, https://music.line.me.

Adds support for the media keys on your keyboard
- :fast_forward:
- :rewind:

This repo contains a [script](https://github.com/johnedvard/Media-Buttons-LINE-Music/blob/master/index.js) to manually click the previous track and next track buttons on LINE Msic's web page. Remember to press the "Play" button in the web UI before using any of the media keys. The script will automatically run when you open https://music.line.me.

# How to use

1. Add the [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) extension to Chrome
2. Create a new User script and save it
3. Open the new user script and click the "Settings" tab
4. Write the following url under the Update section in TamperMonkey
https://raw.githubusercontent.com/johnedvard/Media-Buttons-LINE-Music/master/index.js
5. Click the extenstion icon in the top bar of the browser, and click "Check for userscript updates" in the extension
6. The user script will detect changes and ask you to confirm the update
7. Click update, and refresh the browser window
8. Go to music.line.me, login, press the play button, and now the media keys, forward and back work


___Video of step 1-4___

![how to use step 1](https://github.com/johnedvard/Media-Buttons-LINE-Music/blob/master/how%20to%20use%20step%201.gif?raw=true)


___Video of step 5-7___

![how to use step 2](https://github.com/johnedvard/Media-Buttons-LINE-Music/blob/master/how%20to%20use%20step%202.gif?raw=true)


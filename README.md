# Jamboard Export
This experimental Google Chrome plugin allows you to copy the text of your Jamboard postit notes onto your clipboard.

## How to install
1. Extract the zip file (or, clone this repository into a folder)
2. type <code>chrome://extensions</code> into your browser url bar
3. At the top right corner of the window, switch on **developer mode**
4. Click "load unpacked", and choose the extracted/cloned folder on your computer.
5. All set! Now you should have a small "J" -icon at the top right corner of your chrome browser. Clicking it with the jamboard tab open should copy the text onto the clipboard.

## Notes
- The postits are copied in the order they are placed in the DOM, i.e. most likely in the order they are created.
- Each postit is separated by a line break, in a loose "csv" format.

## Version history
### 1.0
Initial release, minimal functionality

## Author and license
© 2020- Viljo Malmberg. Released under the MIT License: https://opensource.org/licenses/MIT

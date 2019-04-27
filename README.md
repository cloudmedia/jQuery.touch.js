# jQuery.touch.js
Detects touch or click events on mobile/desktop browsers.

This is a tiny plugin that allows you to bind $.touch to an element. The plugin detects whether the event is a touch or a click.
The plugin also detects whether the touch event is a tap or a touch and drag event (such as when scrolling) and cancels the
callback. The plugin requires a hidden input field on your page with an id of "touchMove" to store the flag.

## Example
```javascript
$("button").touch(function(){
  Do some stuff...
});
```
### HTML:
```html
<input type="hidden" id="touchMove" value="" />
```

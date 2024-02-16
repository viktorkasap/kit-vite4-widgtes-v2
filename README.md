### Example of using functions
An example of a script that will add the necessary scripts to a page.
They don't have to be widgets, they can be any purpose, for example a whole page
```js
// index.js
function addScriptsForWidgets(widgets) {
  // Go through each widget
  for (let widget of widgets) {
    // If the page has an element with the data-widget attribute, the value of which matches the widget name
    if (document.querySelector(`[data-widget="${widget.name}"]`)) {
      // Create a new script element
      let script = document.createElement('script');
      // Set the src attribute
      script.src = widget.scriptUrl;
      // Add the script to the footer
      document.body.appendChild(script);
    }
  }
}

// Using the function
addScriptsForWidgets([
  {name: 'tabs', scriptUrl: 'https://example.com/source/url_to_tabs_script.js'},
  {name: 'slider', scriptUrl: 'https://example.com/source/url_to_slider_script.js'}
]);
```

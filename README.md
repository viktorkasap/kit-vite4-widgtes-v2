### Пример использования функций
Пример скрипта который будет добавлять необходимые скрипты на страницу.
Это не обязательно виджеты (widgets), может быть любое назначение, например целая страница
```js
// index.js
function addScriptsForWidgets(widgets) {
  // Проходим по каждому виджету
  for (let widget of widgets) {
    // Если на странице есть элемент с атрибутом data-widget, значение которого совпадает с именем виджета
    if (document.querySelector(`[data-widget="${widget.name}"]`)) {
      // Создаем новый элемент script
      let script = document.createElement('script');
      // Устанавливаем атрибут src
      script.src = widget.scriptUrl;
      // Добавляем скрипт в футер
      document.body.appendChild(script);
    }
  }
}

// Использование функции
addScriptsForWidgets([
  {name: 'tabs', scriptUrl: 'https://example.com/source/url_to_tabs_script.js'},
  {name: 'slider', scriptUrl: 'https://example.com/source/url_to_slider_script.js'}
]);
```

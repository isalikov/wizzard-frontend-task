# # Frontend test, UI Team

# Задача

Реализуем форму в модальном окне с динамически формируемым набором полей.
[Макет в Figma](https://www.figma.com/design/553UlUvgNFJIeemm7J7hCK/Frontend-test-task?node-id=0-1&t=MCaHzPziXcE6no0v-1)

# Бизнес-логика

- Разместим на странице кнопку, которая открывает модальное окно с формой опросника.
- Контент для формы получим HTTP-запросом из файла questions.json.
- После открытия модального окна автоматически установим фокус на поле с ответом на первый вопрос.
- Отобразим вопросы на форме, используя различные элементы ввода. Тип элемента определен через поле type в данных, полученных из questions.json
- Некоторые вопросы не обязательны для заполнения, признак обязательности находится в поле required
- Модальное окно ограничено по высоте, и список вопросов может не поместиться целиком. В таком случае разобьём заполнение формы на несколько шагов, чтобы все поля аккуратно разместились. Горизонтальная прокрутка внутри формы не допустима.
- При нажатии на кнопку Continue провалидируем форму на заполнение обязательных полей и подсветим ошибки согласно дизайну. Перейдём на следующий шаг только если валидация пройдена успешно.
  - На последнем шаге текст на кнопке Continue меняется на Finish
  - После завершения опроса показываем сообщение с благодарностью
- Модальное окно с формой можно закрыть с помощью крестика в правом верхнем углу или при нажатии на кнопку Escape на клавиатуре.
  - Если пользователь взаимодействовал с формой, то при попытке закрытия запросим подтверждение через нативное браузерное окно подверждения (confirm)
- При реализации формы опросника учтём, что содержимое может меняться (количество вопросов, текст вопроса, количество вариантов ответа и т.п.).

⠀Верстка

- Сверстайте страницу [по макету в Figma](https://www.figma.com/design/553UlUvgNFJIeemm7J7hCK/Frontend-test-task?node-id=0-1&t=MCaHzPziXcE6no0v-1). Следуйте подходу Pixel Perfect.
- Адаптируйте верстку под мобильные устройства.
- Убедитесь, что страница корректно отображается в актуальных версиях Chrome, Firefox и Safari.
- Разбейте верстку на React-компоненты, не помещайте всё в один файл.

⠀Технические требования

- Весь код должен быть написан на React + TypeScript.
- Не используйте готовые стейт-менеджеры (Redux, MobX и другие)
- Не используйте никакие готовые UI-киты и библиотеки.
- Самостоятельно настройте сборку проекта, используя Webpack 5, Babel, TS и dev server.
- В dev-сборке отдайте HTML страницу приложения используя Webpack Dev Server и hot module replacement.
- Весь код должен быть в одном репозитории.
- Приложите файл README с описанием процесса сборки и запуска приложения.

`questions.json`
```json
[
  {
    "text": "Select your country of residence",
    "type": "select",
    "options": ["United States", "Canada", "United Kingdom", "Other"],
    "required": true
  },
  {
    "text": "Which devices do you use to access the internet?",
    "type": "multiple-checkbox",
    "options": ["Computer / Laptop", "Smartphone", "Tablet"],
    "required": true
  },
  {
    "text": "What is your preferred mode of transportation for traveling?",
    "type": "radio",
    "options": ["Airplane", "Train", "Car"],
    "required": false
  },
  {
    "text": "What do you want to achieve in the next year?",
    "type": "textarea",
    "required": true
  },
  {
    "text": "Please enter your age",
    "type": "text",
    "required": false
  },
  {
    "text": "I consent to the processing of my personal data",
    "type": "single-checkbox",
    "required": true
  }
]
```

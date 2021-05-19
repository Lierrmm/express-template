# Express Template

#### This is my go to express template for nodeJS projects. You may not find this useful, however, I do!

## Installation

1. Install packages:
```sh
npm i --save
```

2. Configure template html/ejs (optional)
```js
app.engine('html', require('ejs').renderFile); //remove if using ejs templating
app.set('view engine', 'html'); //set to ejs if using ejs templating
```
3. Run
```sh
npm start
```

## What's included

- Basic Routing
- API Routing
- Helmet ( Security Headers )
- Cloud port handling with fallback
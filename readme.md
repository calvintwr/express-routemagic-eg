# Route Magic Example/Template
[![npm version](https://img.shields.io/npm/v/express-routemagic.svg?style=flat-square)](https://www.npmjs.com/package/express-routemagic)
[![license](https://img.shields.io/npm/l/express-routemagic.svg?style=flat-square)](https://www.npmjs.com/package/express-routemagic)
[![install size](https://packagephobia.now.sh/badge?p=express-routemagic)](https://packagephobia.now.sh/result?p=express-routemagic)

Route Magic is a simple and fast Nodejs module to abstract away the unnecessary route invocations in the widely popular [Expressjs framework](https://github.com/expressjs/express), because **is almost always true that your routing code folder structure is your intended api URI structure, and Route Magic will invoke your routings based on your folder structure**. It keeps express clean and simple, exactly like how it should be. This module has no dependencies.

Route Magic是一个简单而又快速的Nodejs模块。它可自动化广泛使用的[Expressjs框架](https://github.com/expressjs/express）的路由图，因为**您的路由文件夹结构几乎都是您想要的API URI结构。Route Magic将根据您的文件夹结构自动调用路由。** 它保持 Express 简洁几明了的结构。该模块不依赖其它模块。

## Say Goodbye To This

```js
app.use('/', require('./routes/index'))
app.use('/somePath', require('./routes/somePath'))
app.use('/i/keep/repeating/myself', require('./routes/i/keep/repeating/myself'))
```

This does not make sense at all.

## Say Hello To This

This is the most basic way to use Magic:

```js
const magic = require('express-routemagic')
magic.use(app, __dirname) // this assumes that your routing files are in `routes`, relative to where you invoke this.
```

If your files are not in a default `routes` folder, then do this:
```js
const magic = require('express-routemagic')
magic.use(app, __dirname, '[your route directory]') // 'folder' is same as './folder'
```

## Installation

Go to [Route Magic Github](https://github.com/calvintwr/express-routemagic) to read more.

Or install with:
```
npm install express-routemagic
```

### License

Magic is MIT licensed.

# react-simple-starter-kit
Basic Starter kit for react es6 less

##Features
* Hot module replacement
* Less compile
* React Router

## Usage

```
npm install
npm start
open http://localhost:3000
```

## How to Start
####There are Two folder inside starter kit. src and dist.
![File Tree](https://raw.githubusercontent.com/polodev/react-simple-starter-kit/master/folder_structure.jpg  "File Tree")

1. Make a view file inside src/views/
2. export the view file through src/views/index.js
3. in router/index.js import that created view
4. give a route path for this view
5. thats all for development

### File and Production Mode
In order to get production code
```
npm run compile

```
this npm command will prepare the production dist. Just deploy the dist folder thats it. This command also copied all static file



### Dependencies
* react
* react-dom
* react-router

### devDependencies
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* copy-webpack-plugin
* css-loader
* express
* less
* less-loader
* postcss-loader
* react-hot-loader
* style-loader
* webpack
* webpack-dev-middleware
* webpack-hot-middleware
*

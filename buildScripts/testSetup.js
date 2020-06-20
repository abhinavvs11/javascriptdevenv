//this file isn't transpiled so we must use commonJs and ES5

//register babel to transpile before our code runs
require('babel-register')();
//disable webpack features that Mocha doesn't undersatand
require.extensions['.css']=function(){};

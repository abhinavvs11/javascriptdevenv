import express from 'express';
import path from 'path';
import open from 'open';
// these 2 are bundling packages
import webpack from 'webpack';
import config from '../webpack.config.dev';
const port=3000;
/*eslint-disable no-console*/
//creaing an instance of express
const app=express();
//for bundling
const compiler =webpack(config);
//for bundling
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,
  publicPath:config.output.publicPath
}));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});
app.listen(port,function(err){
  if(err){console.log(err);}
  else{
    open('http://localhost:'+port);
  }
});



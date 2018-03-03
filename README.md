# demo

> compatible-vue-socket.io使用demo

## Build Setup

``` bash

# install dependencies
cd src
npm install
cd ../socketio
npm install

# run server
cd socketio
npm start
打开浏览器访问localhost:3000 


目录介绍
socketio是后台的文件。
src是前端vue打包前的文件。

cd src
npm run build会自动把文件打包到socketio的public目录

vue热加载启动
npm run dev
首先浏览器要开跨域，然后打开浏览器访问localhost:8080



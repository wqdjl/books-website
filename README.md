# Angular2+ts+webpack
## CLI
   分开发环境和生产环境

### 相关配置
    1、安装nodejs

    2、npm install 安装依赖包

    3、npm i -g webpack 安装全局webpack

    4、引用稳定的第三方库在 ./src/polyfills.ts， 可根据自己的需求去进行增删改

### 开发环境
   开发环境使用webpack dev server来进行本地调试

   对应webpack的配置文件在config/webpack.config.dev.js + config/webpack.config.common.js

   使用说明：
     1、 npm run server:dev
     
     2、当你有文件修改的时候，webpack dev server 会自动去编译文件并主动刷新页面

### 生产环境
   生产环境使用webpack的dll功能来分开打包第三方库和业务代码

   对应的webpack的dll配置文件 config/webpack.config.dll.js 

   对应webpack的配置文件在config/webpack.config.pro.js + config/webpack.config.common.js
   
   打包之后的发布文件全部在根目录下的 build 文件夹
   使用说明：
      首次编译或者第三方库有增删改：
      
         npm run webpack:rePro；或者 npm run webpack:dll然后 npm run webpack:pro
      
      只修改了业务代码：
          
         npm run webpack:pro

# books-website-admin


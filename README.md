# 前言
学习vue也有一段时间了，在网上也搜过vue的实战项目源码，看得也是一知半解。无意中发现某人写了一个记事本，于是就捣鼓着自己也实现一个，算是给入门vue的实战。
此项目足够简单，只有几个页面（其实完全可以不用引用vue-router，只是这也是学习的一部分，就加了进来），涉及的功能有换肤，添加事件，显示事件的三个页面，可下载、可导入、可清除数据等。

# 查看DEMO
[查看](https://linchwei.github.io/project/vue-notepad/#/)

# 技术栈 
vue2 + localStorage + vue-router + webpack + ES6 + sass + flex


# 项目运行

``` bash

git clone https://github.com/linchwei/vue-notepad.git

cd vue-notepad

npm install


npm run dev

npm run build

```

# 目录结构
<pre>
|—— README.md
|—— config        // server config
|—— build         // webpack config
|—— dist          // 生成静态文件目录
|—— package.json  // 包含项目信息依赖
|—— static        // 
|—— src
    |—— assets    //
    |—— commons   // css、js
    |—— components
        |—— main
            |—— addEvent.vue
            |—— cannEvent.vue
            |—— paddEvent.vue
            |—— succEvent.vue
        |—— tools
            |—— layer.vue
            |—— nav.vue
            |—— theme.vue
        |—— footer.vue
        |—— header.vue
        |—— main.vue
        |—— tool.vue
    |—— router
        |—— index.js
    |—— App.vue
    |—— main.js
</pre>

# 结语
本人还是一个vue菜鸟，现在所在公司也并非使用这些较新的技术开发项目（没错，万年jq，~_~）。但还是希望追赶大前端的脚步。

### 微信：linchwei (希望能交到同行很多很多的朋友) ******

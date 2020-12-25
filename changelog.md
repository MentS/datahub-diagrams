## TODO 


### 添加 less 
``` shell 
yarn yarn eject
yarn add less less-loader  # less 4.0 版本 antd 引用有问题 使用3.x
```

[参考 GitHub 博客](https://github.com/GreenHandLittleWhite/blog/issues/1)

```javascript
// 开启 javascriptEnabled 不然引用 antd.less 报错

// 若不想使用 css module 的方式引用 less 需要开启 esModule: true,
// 为了不影响 antd 全局 引用加入 一个 lessRegex  exclude: /node_modules/ 
{
    loader: require.resolve('less-loader'), 
    options: {
        lessOptions:{
            javascriptEnabled: true,  //允许通过js调用antd组件
        }
    }
}



// 添加 less 的配置
// {
//   test: lessRegex,
//   exclude: lessModuleRegex,
//   use: getStyleLoaders(
//     {
//       importLoaders: 2,
//       sourceMap: isEnvProduction && shouldUseSourceMap,
//     },
//     'less-loader',
//   ),
//   sideEffects: true,
// },
{
    test: lessRegex,
        include: /node_modules/,
        use: getStyleLoaders({
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
         },
    'less-loader',
),
    sideEffects: true,
},
{
    test: lessRegex,
        exclude: /node_modules/,
        use: getStyleLoaders(
        {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
            modules: {
                getLocalIdent: getCSSModuleLocalIdent,
            },
            esModule: true,
        },
    'less-loader',
),
    sideEffects: true,
},
{
    test: lessModuleRegex,
        use: getStyleLoaders(
        {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
            modules: {
                getLocalIdent: getCSSModuleLocalIdent,
            },
        },
    'less-loader',
),
},

```


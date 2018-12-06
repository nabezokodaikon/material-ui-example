# Material-UI Example

## MEMO
* `page`ディレクトリにスタイルシートを配置するとエラーになる。
* `next-compose-plugins`でオプションの指定の方法
```
module.exports = withPlugins([withTypescript, withCSS], {
  cssModules: true
})
```

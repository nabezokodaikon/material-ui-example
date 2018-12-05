# Material-UI Example

## MEMO
* `page`ディレクトリにスタイルシートを配置するとエラーになる。
* `next-compose-plugins`でオプションの指定の方法
```
module.exports = withPlugins([withTypescript, withCSS], {
  cssModules: true
})
```
* `*.css.d.ts`ファイル生成方法 [Quramy/typed-css-modules](https://github.com/Quramy/typed-css-modules)
```
$ tcm <cssが格納されているディレクトリ>
```

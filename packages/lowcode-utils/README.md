## 公共函数

### 文件结构
`utils`
源代码位置
`global.d.ts`
全局ts声明
`lib`
使用tsc将.ts编译成.js和.d.ts, 此时的代码并未进行压缩, 可读性较高, 这部分代码也不上传npm
`dist`
压缩后的代码及ts类型声明, js不具有可读性, ts具有可读性
> 打包后, 手动处理一下`/// <reference path="../../global.d.ts" />`
`example`
代码使用示例, 需要在此目录下执行`npm i`来引用依赖

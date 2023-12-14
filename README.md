## monorepo目录结构

```sh
- Admin // 低代码后台管理 [独立仓库]
- Designer // 设计器
- Nest // 后端 [独立仓库]
- ...
- packages
  - antd5 // antd@5.x 的 npm包
  - lowcode-component-antd5 // antd5物料
  - lowcode-component-use // 自定义物料
  - ...
  - lowcode-utils // 一些公共方法
```
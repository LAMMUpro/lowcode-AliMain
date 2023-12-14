## monorepo目录结构

```sh
- Admin // 低代码后台管理 [独立仓库]
- Designer // 设计器
- Nest // 后端 [独立仓库]
- ...
- packages
  - antd5 // antd@5.x 的 npm包
  - lowcode-component-antd5 // antd5物料 [独立仓库]
  - lowcode-component-use // 自定义物料 [独立仓库]
  - ...
  - lowcode-utils // 一些公共方法
```

## 项目环境
- node版本：`16.18.0`


## 相关仓库

### [lowcode-component-template](https://github.com/LAMMUpro/lowcode-component-template.git)物料模板
> lowcode-component-use物料和lowcode-component-antd5都从此继承

### [lowcode-component-use](https://github.com/LAMMUpro/lowcode-component-use.git)自定义物料
> 需要下载到packages/*

### [lowcode-component-antd5](https://github.com/LAMMUpro/lowcode-component-antd5.git)antd@5物料
> 需要下载到packages/*

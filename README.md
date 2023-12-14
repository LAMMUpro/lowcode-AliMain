# 低代码平台
> 该项目使用monorepo管理，包含了前端(前台+后台)、后端代码、插件代码
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
- node16.18.0
- yarn(必须)
- wsl (windows环境下)
- vscode-wsl插件 (使用wsl)
- s
- ncc

## 相关仓库

### [lowcode-component-template](https://github.com/LAMMUpro/lowcode-component-template.git)物料模板
> lowcode-component-use物料和lowcode-component-antd5都从此继承

### [lowcode-component-use](https://github.com/LAMMUpro/lowcode-component-use.git)自定义物料
> 需要下载到packages/*
> original: https://github.com/LAMMUpro/lowcode-component-template.git的master分支

### [lowcode-component-antd5](https://github.com/LAMMUpro/lowcode-component-antd5.git)antd@5物料
> 需要下载到packages/*
> original: https://github.com/LAMMUpro/lowcode-component-template.git的antd分支

### [lowcode-engine-ext](https://github.com/LAMMUpro/lowcode-engine-ext.git)
> 需要下载到packages/*
> original: https://github.com/alibaba/lowcode-engine-ext.git的main分支

### [lowcode-plugin-code-editor](https://github.com/LAMMUpro/lowcode-plugin-code-editor.git)
> 需要下载到packages/*
> 源: https://github.com/alibaba/lowcode-plugins
> 目录：packages/plugin-code-editor
> 版本号：@alilc/lowcode-plugin-code-editor@1.0.8
> 复制点：30aaf6631dbbee45a3dad908b6b7fd10d8e9651e


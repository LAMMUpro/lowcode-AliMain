
## 软链接
### ts类型依赖后端生成的类型
.prisma
> mac执行 `ln -s /Users/lammu/Desktop/WorkSpace/workplace-lowcode/lowcode-nest/node_modules/.prisma /Users/lammu/Desktop/WorkSpace/workplace-lowcode/lowcode-lammu/src/types/node_modules/.prisma`、`ln -s /Users/lammu/Desktop/WorkSpace/workplace-lowcode/lowcode-nest/node_modules/@prisma /Users/lammu/Desktop/WorkSpace/workplace-lowcode/lowcode-lammu/src/types/node_modules/@prisma`
@prisma
> win执行 `mklink /d f:/Desktop/WorkSpace/workplace-lowcode/lowcode-nest/node_modules/.prisma f:/Desktop/WorkSpace/workplace-lowcode/lowcode-lammu/src/types/node_modules/.prisma`、`mklink /d f:/Desktop/WorkSpace/workplace-lowcode/lowcode-nest/node_modules/@prisma f:/Desktop/WorkSpace/workplace-lowcode/lowcode-lammu/src/types/node_modules/@prisma`
dto
```sh
/后端/dist/src/types/dto -> /设计器项目/src/types/dto
```

### 插件
```sh
ln -s /Users/lammu/Desktop/WorkSpace/workplace-lowcode/lowcode-plugin-remote-handle/src/* /Users/lammu/Desktop/WorkSpace/workplace-lowcode/lowcode-lammu/src/plugins/plugin-remote-handle
```
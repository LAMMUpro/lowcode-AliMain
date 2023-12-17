### s deploy部署前重新打包脚本
### 推荐node版本：16.18.0以上
### 依赖第三方：yarn\s

# 删除编译后产物
rm -rf ../build
# 代码打包
yarn build
# 将nginx移动到build下
cp ../nginx.conf ../build/nginx.conf
# 将.env移动到build
cp ../.env ../build/.env
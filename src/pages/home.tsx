
function page404() {

  return (
    <div>
      首页
      <micro-app 
        iframe
        name='my-app' 
        url='https://microapp.lammu.cn/microappA/'
        default="/microappA/a"
      ></micro-app>
    </div>
  )
}

export default page404

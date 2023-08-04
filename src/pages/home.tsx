
function page404() {

  return (
    <h2>
      首页
      <micro-app 
        iframe
        name='my-app' 
        url='https://microapp.lammu.cn/microappA/'
        default="/microappA/a"
      ></micro-app>
    </h2>
  )
}

export default page404

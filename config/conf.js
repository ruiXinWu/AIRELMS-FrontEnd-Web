if (process.env.NODE_ENV == 'development') { //开发环境
// baseUrl: 'http://localhost:5840' 本地运行
//baseUrl: 'http://100.24.46.38:5840' 
  module.exports =  {
    title: '领课教育系统(开源版)-打造全行业都适用的在线教育系统',
    baseUrl: 'http://localhost:5840'   //java项目接口地址
  }
}else if (process.env.NODE_ENV == 'testing') {  //测试环境
  module.exports = {
    title: '领课教育系统(开源版)-打造全行业都适用的在线教育系统',
    baseUrl: 'http://localhost:5840'  //java项目接口地址
  }
}else { //默认生产环境
  module.exports = {
    title: '领课教育系统(开源版)-打造全行业都适用的在线教育系统',
    baseUrl: 'http://localhost:5840'   //java项目接口地址
  }
}

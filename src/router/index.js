import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import main from '@/pages/main'   //学生年度报告主页
// import main1 from '@/pages/main1'
// import main2 from '@/pages/main2'
// import main3 from '@/pages/main3'
// import index from '@/pages/index'
// import reportindex from '@/pages/reportindex'
import reportmain from '@/pages/reportmain2'
import test1 from '@/test/test1'
import test2 from '@/test/test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/reportmain',  //主入口
    },
    // {path:'/main',name:'main',component:main},
    // {path:'/main1',name:'main1',component:main1},
    // {path:'/main2',name:'main2',component:main2},
    // {path:'/main3',name:'main3',component:main3},
    // {path:'/index',name:'index',component:index},
    // {path:'/reportindex',name:'reportindex',component:reportindex},
    {path:'/reportmain',name:'reportmain',component:reportmain},
    {path:'/test1',name:'test1',component:test1},
    {path:'/test2',name:'test2',component:test2}
  ]
})

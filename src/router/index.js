import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
import SystemManage from '@/components/SystemManage'
import UserManage from '@/components/UserManage'
import VideoManage from '@/components/VideoManage'
import download from '@/components/download'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: '/SystemManage',
          name: 'SystemManage',
          component: SystemManage
        },
        {
          path: '/UserManage',
          name: 'UserManage',
          component: UserManage
        },
        {
          path: '/VideoManage',
          name: 'VideoManage',
          component: VideoManage
        },
        {
          path: '/download',
          name: 'download',
          component: download
        },
      ]
    },

  ]
})

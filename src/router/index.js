import Vue from 'vue'
import Router from 'vue-router'
import Father from '@/components/FatherToChild/Father'
import Father01 from '@/components/ChildToFatherCallBack/Father01'
import Father02 from '@/components/ChildToFatherDefine/Father02'
import Father03 from '@/components/Bother/Father03'
import Father04 from '@/components/ChildToFatherRef/Father04'
import Father05 from '@/components/ChildToFatherSync/Father05'
import Father06 from '@/components/ChildToFatherSync02/Father06'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Father',
    //   component: Father
    // },
    // {
    //   path: '/',
    //   name: 'Father01',
    //   component: Father01
    // },
    // {
    //   path: '/',
    //   name: 'Father02',
    //   component: Father02
    // },
    // {
    //   path: '/',
    //   name: 'Father03',
    //   component: Father03
    // },
    // {
    //   path: '/',
    //   name: 'Father04',
    //   component: Father04
    // },
    // {
    //   path: '/',
    //   name: 'Father05',
    //   component: Father05
    // },
    {
      path: '/',
      name: 'Father06',
      component: Father06
    }
  ]
})

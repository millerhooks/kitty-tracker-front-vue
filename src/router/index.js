import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import Logout from '@/components/Logout';
import Cat from '@/components/Cat';
import Catlist from '@/components/Catlist';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
    },
    // {
    //   path: '/feedings',
    //   name: 'Feedings',
    //   component: Feedings,
    // },
    {
      path: '/cat',
      name: 'Cat',
      component: Cat,
    },
    {
      path: '/catlist',
      name: 'Catlist',
      component: Catlist,
    },
  ],
  mode:'history'
});

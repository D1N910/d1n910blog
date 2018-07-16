import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import PageManager from '@/components/PageManager/PageManager';
import PagePublish from '@/components/PagePublish/PagePublish';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    }, {
      path: '/page_manager',
      name: 'PageManager',
      component: PageManager,
    }, {
      path: '/page_publish',
      name: 'PagePublish',
      component: PagePublish,
    },
  ],
});

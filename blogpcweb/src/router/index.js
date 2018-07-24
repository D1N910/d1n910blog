import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Page from '@/components/Page/Page';
import PageShow from '@/components/Page/PageShow';
import Littleprogram from '@/components/Littleprogram/Littleprogram';
import AboutMe from '@/components/AboutMe/AboutMe';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/page',
      name: 'Page',
      component: Page,
    },
    {
      path: '/pageId',
      name: 'PageShow',
      component: PageShow,
    },
    {
      path: '/littlegongju',
      name: 'Littleprogram',
      component: Littleprogram,
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

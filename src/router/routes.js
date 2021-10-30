import Error404 from 'pages/Error404.vue';
import Index from 'pages/Index.vue';
import Test1 from '../tests/test1/Test1.vue';
import Test2 from '../tests/test2/Test2.vue';
import Test3 from '../tests/test3/Test3.vue';
// import TestsLayout from '../tests/TestsLayout.vue';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: Index },
      {
        path: 'tests/',
        component: () => import('../tests/TestsLayout.vue'),
        children: [
          { path: 'test1', component: Test1 },
          { path: 'test2', component: Test2 },
          { path: 'test3', component: Test3 },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: Error404,
  },
];

export default routes;

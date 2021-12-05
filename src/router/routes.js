import Error404 from 'pages/Error404.vue';
import Index from 'pages/Index.vue';
import Test1 from '../tests/test1/Test1.vue';
import Test2 from '../tests/test2/Test2.vue';
import Test3 from '../tests/test3/Test3.vue';
import Test4 from '../tests/test4/Test4.vue';
import Test5 from '../tests/test5/Test5.vue';
import Test6 from '../tests/test6/Test6.vue';
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
          { path: 'test4', component: Test4 },
          { path: 'test5', component: Test5 },
          { path: 'test6', component: Test6 },
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

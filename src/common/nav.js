import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, [], () => import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    children: [
      {
        name: '首页', 
        path: 'home',
        component: dynamicWrapper(app, ['index'], () => import('../routes/IndexPage')),
      },
      {
        name: '登录', 
        path: 'login',
        component: dynamicWrapper(app, ['login'], () => import('../routes/Login')),
      } , {
        name: '详情页',
        path: 'article',
        children: [{
          name: '详情页',
          path: '/:id',
          component: dynamicWrapper(app, ['article'], () => import('../routes/Article/article.js')),
        }]
      }
    ],
  }  
];

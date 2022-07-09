import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';
import store from './store';

// eslint 1.检查语法规范，2.检查代码规范
// const name = 'kkxu';
//
// function sayhi(who) {
//   console.log(`hello${who}`);
// }
//
// sayhi(name);

import './assets/scss/index.scss';

createApp(App).use(store).use(router)
  .mount('#app');

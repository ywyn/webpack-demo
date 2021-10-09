import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import './styles/common.scss';

import App from './App';

new Vue({
  components: { App },
  template: '<App/>',
}).$mount('#app');

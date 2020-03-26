// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { Input, Checkbox, Button, Icon } from 'ant-design-vue';
import App from './App';
import router from './router';
// eslint-disable-next-line import/first
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

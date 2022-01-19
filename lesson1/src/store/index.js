import Vue from 'vue';
import Vuex from 'vuex';
import paymentsdisplay from './modules/paymentsdisplay';
import category from './modules/category';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    paymentsdisplay,
    category,
  },
});

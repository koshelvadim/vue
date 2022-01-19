export default {
  state: {
    categoryList: [],
  },
  mutations: {
    SET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList;
    },
    ADD_CATEGORY_DATA(state, category) {
      state.categoryList.push(category);
    },
  },
  getters: {
    categoryList: ({ categoryList }) => categoryList,
    categoryListTotalAmount: ({ categoryList }) => categoryList.length,
  },
  actions: {
    fetchCategoryList({ commit }) {
      setTimeout(() => {
        const categoryList = [
          'Food',
          'Transport',
          'Education',
          'Bisnes',
          'Sale',
          'Music',
          'Restaurant',
          'Drive',
        ];
        commit('SET_CATEGORY_LIST', categoryList);
      }, 1000);
    },
  },
};

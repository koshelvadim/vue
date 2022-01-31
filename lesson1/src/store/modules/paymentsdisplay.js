export default {
  state: {
    paymentsList: [],
    size: 5,
  },
  mutations: {
    SET_PAYMENTS_LIST(state, paymentsList) {
      state.paymentsList = paymentsList;
    },
    ADD_PAYMETN_DATA(state, payment) {
      state.paymentsList.push(payment);
    },
    CHANGE_INPUT_VALUE(state, value) {
      state.size = value;
    },
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    paymentsListTotalAmount: ({ paymentsList }) => paymentsList
      .reduce((total, { value }) => total + value, 0),
    paymentsListTotalQuantity: ({ paymentsList }) => paymentsList.length,
    size: (state) => state.size,
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const paymentsList = [
          {
            id: '1',
            date: '08.01.2022',
            category: 'Sale',
            value: 169,
          },
          {
            id: '2',
            date: '10.01.2022',
            category: 'Transport',
            value: 360,
          },
          {
            id: '3',
            date: '14.01.2022',
            category: 'Food',
            value: 532,
          },
          {
            id: '4',
            date: '16.01.2022',
            category: 'Music',
            value: 189,
          },
          {
            id: '5',
            date: '18.01.2022',
            category: 'Airbuss',
            value: 760,
          },
          {
            id: '6',
            date: '20.01.2022',
            category: 'Restaurant',
            value: 332,
          },
          {
            id: '7',
            date: '08.01.2022',
            category: 'Sale',
            value: 169,
          },
          {
            id: '8',
            date: '10.01.2022',
            category: 'Transport',
            value: 360,
          },
          {
            id: '9',
            date: '14.01.2022',
            category: 'Drive',
            value: 532,
          },
          {
            id: '10',
            date: '16.01.2022',
            category: 'Music',
            value: 189,
          },
          {
            id: '11',
            date: '18.01.2022',
            category: 'Airbuss',
            value: 760,
          },
          {
            id: '12',
            date: '20.01.2022',
            category: 'Restaurant',
            value: 332,
          },
        ];

        commit('SET_PAYMENTS_LIST', paymentsList);
      }, 1000);
    },
  },
};

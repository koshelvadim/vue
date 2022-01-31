<template>
  <div>
    <input placeholder="Date" v-model="date">
      <select v-model="category">
        <option value="" selected disabled>Select category</option>
        <option
          v-for="category of categoryList"
          :key="category"
          :value="category">
          {{ category }}
        </option>
      </select>
    <input
      placeholder="Value"
      v-model.number="value">
    <button
      class="button"
      @click="addPayment">
      Save Cost
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'AddPaymentFormComp',
  data: () => ({
    id: '',
    date: '',
    category: '',
    value: '',
  }),
  methods: {
    ...mapMutations(['ADD_PAYMETN_DATA']),

    addPayment() {
      const {
        date, category, value, paymentDay, getId,
      } = this;
      const data = {
        id: getId,
        date: date || paymentDay,
        category,
        value: +value,
      };
      if (data.value && data.category) {
        this.ADD_PAYMETN_DATA(data);
        this.value = '';
        this.category = '';
        this.data = '';
        this.$modal.hide();
      }
    },
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'categoryList',
    ]),
    paymentDay() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      return `${day}.${month}.${year}`;
    },
    getId() {
      return this.paymentsList.length + 1;
    },
  },
};
</script>

<style lang="scss">
// .wrapper {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.85);
//   z-index: 1;
//   // transform: translate(-50%, -50%);
// }
// .modal-window {
//   position: relative;
//   padding: 30px;
//   border-radius: 15px;
//   background-color: #fff;
//   color: #000;
//   width: 200px;

//   display: flex;
//   flex-direction: column;
//   & input {
//     margin: 10px 0;
//     height: 26px;
//   }
//   & select {
//     height: 32px;
//   }
// }
// .close {
//   display: flex;
//   justify-content: center;
//   padding: 2px;
//   width: 20px;
//   position: absolute;
//   right: 10px;
//   top: 10px;
//   background-color: lightblue;
//   transition: all .3s ease-in-out;

//   &:hover {
//     cursor: pointer;
//     background-color: darken(lightblue, 40%);
//     color: white;
//   }
// }
</style>

<template>
  <div>
    <header>
      <div class="header">
        <h1>Мои личные расходы:</h1>
        <h3>Итого: {{ paymentsListTotalAmount }} $</h3>
        <h3>Всего статей расхода: {{ paymentsListTotalQuantity }} шт.</h3>
        <h3>Всего категорий: {{ categoryListTotalAmount }} шт.</h3>
      </div>
    </header>
    <main class="main">
      <my-button-comp
        @click-add-cost="showCost"
        @click-add-category="showCategory"
        @change-size="changeSize"/>
      <payments-display-comp
        :paymentsList="paymentsList"/>
      <add-payment-form-comp
        v-show="visibleAddCost"
        @add-payment="addPayment"
        @close-modal-payment="closeModalPayment"
        :categoryList="categoryList"
        :paymentList="paymentsList"/>
      <add-category-comp
        v-show="visibleAddCategory"
        :categoryList="categoryList"
        @add-category="addCategory"
        @close-modal-category="closeModalCategory"/>
    </main>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';

import PaymentsDisplayComp from '@/components/PaymentsDisplayComp.vue';
import AddPaymentFormComp from '@/components/AddPaymentFormComp.vue';
import MyButtonComp from '@/components/MyButtonComp.vue';
import AddCategoryComp from '@/components/AddCategoryComp.vue';

export default {
  name: 'DashboardPage',
  components: {
    PaymentsDisplayComp,
    AddPaymentFormComp,
    MyButtonComp,
    AddCategoryComp,
  },
  data: () => ({
    visibleAddCost: false,
    visibleAddCategory: false,
  }),
  methods: {
    ...mapMutations([
      'ADD_PAYMETN_DATA',
      'ADD_CATEGORY_DATA',
      'CHANGE_INPUT_VALUE',
    ]),
    ...mapActions([
      'fetchData',
      'fetchCategoryList',
    ]),

    addPayment(data) {
      this.ADD_PAYMETN_DATA(data);
      this.visibleAddCost = false;
    },
    addCategory(data) {
      this.ADD_CATEGORY_DATA(data);
      this.visibleAddCategory = false;
    },
    closeModalPayment() {
      this.visibleAddCost = false;
    },
    closeModalCategory() {
      this.visibleAddCategory = false;
    },
    changeSize(value) {
      this.CHANGE_INPUT_VALUE(value);
    },
    showCost() {
      this.visibleAddCategory = false;
      this.visibleAddCost = !this.visibleAddCost;
    },
    showCategory() {
      this.visibleAddCost = false;
      this.visibleAddCategory = !this.visibleAddCategory;
    },
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'paymentsListTotalAmount',
      'paymentsListTotalQuantity',
      'categoryList',
      'categoryListTotalAmount',
    ]),
  },
  created() {
    console.log(this.$store);
    this.fetchData();
    this.fetchCategoryList();
  },
};
</script>

<style lang="scss">
.header {
  text-align: start;
  & h1 {
    color: black;
    margin: 0;
  }
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
}
</style>

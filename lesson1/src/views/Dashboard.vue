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
        @click-add-payment="addPayment"
        @click-add-category="addCategory"
        @change-size="changeSize"/>
      <payments-display-comp
        :paymentsList="paymentsList"/>
    </main>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';

import PaymentsDisplayComp from '@/components/PaymentsDisplayComp.vue';
import MyButtonComp from '@/components/MyButtonComp.vue';

export default {
  name: 'DashboardPage',
  components: {
    PaymentsDisplayComp,
    MyButtonComp,
  },
  data: () => ({}),
  methods: {
    ...mapMutations([
      'ADD_PAYMETN_DATA',
      'ADD_CATEGORY_DATA',
      'CHANGE_INPUT_VALUE',
      'CLEAR_CLASS_ACTIVE',
    ]),
    ...mapActions([
      'fetchData',
      'fetchCategoryList',
    ]),

    addPayment() {
      this.CLEAR_CLASS_ACTIVE();
      this.$contextmenu.hide();
      this.$modal.show({
        title: 'Add new payment',
        content: 'addPaymentFormComp',
      });
    },
    addCategory() {
      this.CLEAR_CLASS_ACTIVE();
      this.$contextmenu.hide();
      this.$modal.show({
        title: 'Add new category',
        content: 'addCategoryComp',
      });
    },
    changeSize(value) {
      this.CHANGE_INPUT_VALUE(value);
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
  mounted() {
    // console.log(this.$store);
    this.fetchData();
    this.fetchCategoryList();
    // this.$modal.show({});
    // this.$modal.hide();
    // this.$contextmenu.trigger({});
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

<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Vue.js"/>
    <CalcComp /> -->
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
        @click-add-category="showCategory"/>
      <payments-display-comp :items="paymentsList"/>
      <add-payment-form-comp
        v-show="visibleAddCost"
        @add-payment="addPayment"
        :categoryList="categoryList"
        :items="paymentsList"/>
      <add-category-comp
        v-show="visibleAddCategory"
        :categoryList="categoryList"
        @add-category="addCategory" />
    </main>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
// import HelloWorld from '@/components/HelloWorld.vue';
// import CalcComp from '@/components/CalcComp.vue';
import PaymentsDisplayComp from '@/components/PaymentsDisplayComp.vue';
import AddPaymentFormComp from '@/components/AddPaymentFormComp.vue';
import MyButtonComp from '@/components/MyButtonComp.vue';
import AddCategoryComp from '@/components/AddCategoryComp.vue';

export default {
  name: 'App',
  props: {
  },
  components: {
    // HelloWorld,
    // CalcComp,
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
    ]),
    ...mapActions([
      'fetchData',
      'fetchCategoryList',
    ]),

    addPayment(data) {
      console.log(data);
      this.ADD_PAYMETN_DATA(data);
      this.visibleAddCost = false;
      document.body.classList.remove('active_modal');
    },
    addCategory(data) {
      console.log(data);
      this.ADD_CATEGORY_DATA(data);
      this.visibleAddCategory = false;
      document.body.classList.remove('active_modal');
    },
    showCost() {
      this.visibleAddCategory = false;
      this.visibleAddCost = !this.visibleAddCost;
      if (this.visibleAddCost) {
        document.body.classList.add('active_modal');
      } else {
        document.body.classList.remove('active_modal');
      }
    },
    showCategory() {
      this.visibleAddCost = false;
      this.visibleAddCategory = !this.visibleAddCategory;
      if (this.visibleAddCategory) {
        document.body.classList.add('active_modal');
      } else {
        document.body.classList.remove('active_modal');
      }
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.header {
  text-align: start;
  & h1 {
    color: blue;
    margin: 0;
  }
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
}
.active_modal {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1000;

  height: 90vh;

  background-color: rgba(#000000, 0.6);
}
</style>

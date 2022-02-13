<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="6" py-5>
            <p class="text-h5 text-sm-h3 font-weight-bold">
              Мои платежи:
            </p>
            <p class="text-h6 text-sm-h4 font-weight-medium">
              Итого: {{ paymentsListTotalAmount }} $
            </p>
            <p class="text-h6 text-sm-h4 font-weight-medium">
              Всего статей расхода: {{ paymentsListTotalQuantity }} шт.
            </p>
            <p class="text-h6 text-sm-h4 font-weight-medium">
              Всего категорий: {{ categoryListTotalAmount }} шт.
            </p>
        </v-col>
      </v-row>
      <main class="main">
        <v-row>
          <v-col md="6" class="d-flex">
            <add-payment-form-comp/>
            <add-category-comp/>
          </v-col>
        </v-row>
      <payments-display-comp/>
    </main>
    </v-container>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';

import PaymentsDisplayComp from '@/components/PaymentsDisplayComp.vue';
import AddPaymentFormComp from '@/components/AddPaymentFormComp.vue';
import AddCategoryComp from '@/components/AddCategoryComp.vue';

export default {
  name: 'DashboardPage',
  components: {
    PaymentsDisplayComp,
    AddPaymentFormComp,
    AddCategoryComp,
  },
  data: () => ({}),
  methods: {
    ...mapMutations([
      'ADD_PAYMETN_DATA',
      'ADD_CATEGORY_DATA',
    ]),
    ...mapActions([
      'fetchData',
      'fetchCategoryList',
    ]),
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
  justify-content: center;
  // align-items: center;
}
</style>

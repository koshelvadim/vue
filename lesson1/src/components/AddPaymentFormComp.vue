<template>
  <v-dialog
    max-width="300px"
    v-model="showModalPayment"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        class="mx-1"
        color="cyan accent-1"
        v-on="on"
        @click="showModalPayment = false"
      >
        Новый платеж
        <v-icon>mdi-plus-box</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="d-flex justify-center">
        <span>Форма нового платежа</span>
      </v-card-title>
      <v-card class="text-center pa-8">
        <v-text-field v-model="date" label="Data"/>
        <v-select
          v-model="category"
          label="Category"
          :items="categoryList"
        />
        <v-text-field v-model="value" label="Value"/>
        <v-btn color="cyan accent-1" @click="addPayment">Добавить платеж</v-btn>
      </v-card>
    </v-card>
  </v-dialog>
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
    showModalPayment: false,
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
        this.showModalPayment = false;
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

<style lang="scss" scope>
</style>

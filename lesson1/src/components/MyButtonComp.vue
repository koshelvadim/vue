<template>
  <div>
    <div class="menu__button">
      <v-dialog
        v-model="showModalPayment"
        max-width="300px">
        <template v-slot:activator="{ on }">
          <v-btn class="mx-1"
            v-on="on"
            @click="showModalPayment = !showModalPayment">
            Add new payment
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h6 text-center">Add payment Form</span>
          </v-card-title>
          <add-payment-form-comp/>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="showModalCategory"
        max-width="300px">
        <template v-slot:activator="{ on }">
          <v-btn class="mx-1"
            v-on="on"
            @click="showModalCategory = !showModalCategory">
            Add new category
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <add-category-comp/>
        </v-card>
      </v-dialog>
    </div>
    <div class="menu__button-value">
      <h5>Сколько отобразить статей на странице: </h5>
      <input
        type="number"
        min="2"
        max="8"
        value="5"
        v-model.number="value"
        @change="$emit('change-size', value)">
    </div>
  </div>
</template>

<script>
import AddCategoryComp from './AddCategoryComp.vue';
import AddPaymentFormComp from './AddPaymentFormComp.vue';

export default {
  components: { AddPaymentFormComp, AddCategoryComp },
  name: 'MyButtonComp',
  data: () => ({
    value: 5,
    showModalPayment: false,
    showModalCategory: false,
  }),
  methods: {
  },
};
</script>

<style lang="scss" scope>
.menu__button {
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  &-value {
    display: flex;
    align-items: center;

    input {
      width: 40px;
      margin: 5px;
      padding: 0 5px;
      outline: auto;
    }
  }
}
</style>

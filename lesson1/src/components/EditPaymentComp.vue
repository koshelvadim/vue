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
      @click="saveEdit">
      Save Edit
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'EditPaymentComp',
  props: {
    settings: {
      type: Object,
      default: () => ({
        date: 'settings.data.date',
      }),
    },
  },
  data: () => ({
    id: '',
    date: '',
    category: '',
    value: '',
  }),
  methods: {
    ...mapMutations(['EDIT_PAYMENT_DATA']),

    saveEdit() {
      const {
        date, category, value, id,
      } = this;
      const data = {
        id,
        date,
        category,
        value: +value,
      };
      if (data.value && data.category && data.date) {
        this.EDIT_PAYMENT_DATA(data);
        this.value = '';
        this.category = '';
        this.data = '';
        this.$modal.hide();
      }
    },
  },
  computed: {
    ...mapGetters(['categoryList']),
  },
  mounted() {
    this.value = this.settings.data.value;
    this.id = this.settings.data.id;
    this.date = this.settings.data.date;
    this.category = this.settings.data.category;
  },
};
</script>

<style>

</style>

<template>
  <div>
    <v-container px-2>
      <v-col md="6">
        <v-row>
          <v-col cols=1>№</v-col>
          <v-col cols=4>Date</v-col>
          <v-col cols=4>Category</v-col>
          <v-col cols=2>Value</v-col>
          <v-col cols=1></v-col>
        </v-row>
      </v-col>
      <v-col md="6">
        <v-row
          v-for="(item, index) in paginatedPage"
          :key="index"
        >
          <v-col cols=1>{{ index + 1 }}</v-col>
          <v-col cols=4>{{ item.date }}</v-col>
          <v-col cols=4>{{ item.category }}</v-col>
          <v-col cols=2>{{ item.value }} $ </v-col>
          <v-col cols=1>
            <context-menu-comp :object="item"/>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <div class="text-center">
            <v-pagination
              class="text-h6"
              color="cyan accent-1"
              v-model="page"
              circle
              :length="pages"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right">
            </v-pagination>
          </div>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

import ContextMenuComp from '@/components/ContextMenuComp.vue';

export default {
  name: 'PaymentsDisplayComp',
  components: {
    ContextMenuComp,
  },
  props: {
  },
  data: () => ({
    page: 1,
    payments: 5,
  }),
  methods: {
  },
  computed: {
    ...mapGetters([
      'paymentsList',
    ]),
    pages() {
      return Math.ceil(this.paymentsList.length / this.payments);
    },
    paginatedPage() {
      const from = (this.page - 1) * this.payments;
      const to = from + this.payments;
      return this.paymentsList.slice(from, to);
    },
  },
  mounted() {
  },
};

</script>

<style lang="scss" scope>

</style>

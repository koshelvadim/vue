<template>
  <div>
    <v-dialog v-model="showModalContext" max-width="320px">
        <template v-slot:activator="{ on }">
          <v-btn
            class="mx-1 px-2"
            min-width="10"
            color="cyan accent-1"
            v-on="on"
            @click="showModalContext = !showModalContext">
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="d-flex justify-center">
            <span>Форма изменений</span>
          </v-card-title>
          <v-card class="d-flex flex-column pa-5">

            <v-dialog max-width="300px" v-model="showModalContextEdit">
              <template v-slot:activator="{ on }">
                <v-btn
                  class="mx-10 my-1"
                  color="cyan accent-1"
                  v-on="on" @click="paymentEditModal">
                  Изменить платеж
                  <v-icon class="pa-1">mdi-square-edit-outline</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="d-flex justify-center">
                  <span class="text-center">Форма</span>
                  <span class="text-center">редактирования платежа</span>
                </v-card-title>
                <v-card class="text-center pa-8">
                  <v-text-field v-model="object.date" label="Data"/>
                    <v-select v-model="object.category" label="Category" :items="categoryList"/>
                  <v-text-field v-model.number="object.value" label="Value"/>
                  <v-btn color="cyan accent-1" @click="paymentEdit">Save Payment</v-btn>
                </v-card>
              </v-card>
            </v-dialog>

            <v-btn
              class="mx-10 my-1"
              color="cyan accent-1"
              @click="paymentDelete">
              Удалить платеж
              <v-icon class="pa-1">mdi-delete-alert</v-icon>
            </v-btn>
          </v-card>
        </v-card>

      </v-dialog>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'ContextMenuComp',
  data: () => ({
    showModalContext: false,
    showModalContextEdit: false,
  }),
  props: {
    object: Object,
  },
  methods: {
    ...mapMutations([
      'DELETE_PAYMENT_DATA',
      'EDIT_PAYMENT_DATA',
      'CLEAR_CLASS_ACTIVE',
    ]),
    paymentDelete() {
      const data = this.object;
      this.DELETE_PAYMENT_DATA(data);
      this.showModalContext = false;
    },
    paymentEditModal() {
      this.showModalContext = false;
      this.showModalContextEdit = true;
    },
    paymentEdit() {
      const data = this.object;
      this.EDIT_PAYMENT_DATA(data);
      this.showModalContextEdit = false;
    },
  },
  computed: {
    ...mapGetters(['categoryList']),
  },
};
</script>

<style lang="scss">
</style>

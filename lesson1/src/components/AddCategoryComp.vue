<template>
    <v-dialog
      v-model="showModalCategory"
      max-width="300px"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          class="mx-1"
          color="cyan accent-1"
          v-on="on"
          @click="showModalCategory = !showModalCategory">
          Новая категория
          <v-icon>mdi-plus-box</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="d-flex justify-center">
          <span>Форма новой категории</span>
        </v-card-title>
        <v-card class="text-center pa-8">
          <v-text-field v-model="newCategory" label="New Category"/>
          <v-btn color="cyan accent-1" @click="addCategory">Добавить категорию</v-btn>
        </v-card>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'AddCategoryComp',
  data: () => ({
    newCategory: '',
    showModalCategory: false,
  }),
  methods: {
    ...mapMutations(['ADD_CATEGORY_DATA']),

    addCategory() {
      const data = this.newCategory;
      if (data && data !== ' ') {
        this.ADD_CATEGORY_DATA(data);
        this.newCategory = '';
        this.showModalCategory = false;
      }
    },
  },
  computed: {
    ...mapGetters(['categoryList']),
  },
};
</script>

<style lang="scss">
</style>

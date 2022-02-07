<template>
  <div class="menu__button">
      <v-btn
        @click="$emit('click-add-payment')">
        Add new cost +
      </v-btn>
      <v-btn
        @click="$emit('click-add-category')">
        Add new category +
      </v-btn>
    <div class="my_button">
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
export default {
  name: 'MyButtonComp',
  data: () => ({
    value: 5,
  }),
  methods: {
  },
};
</script>

<style lang="scss">
.menu__button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

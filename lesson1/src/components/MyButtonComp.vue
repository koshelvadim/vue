<template>
  <div>
    <div class="my_button">
      <button
        class="button button__add"
        @click="$emit('click-add-payment')">
        Add new cost +
      </button>
      <button
        class="button button__add"
        @click="$emit('click-add-category')">
        Add new category +
      </button>
    </div>
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
.my_button{
  width: 372px;
  height: 30px;
  padding: 5px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  & input {
    height: 20px;
    width: 40px;
  }
}
.button{
  padding: 5px 20px;
  margin: 10px 0px;
  font-size: 12px;
  background-color: lightblue;

  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &__add{
      color: black;
  }
  &:hover{
      background-color: darken(lightblue, 40%);
      color: white;
  }
 }
</style>

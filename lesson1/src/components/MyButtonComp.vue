<template>
<div class="my_button">
  <button
    class="button button__add"
    @click="$emit('click-add-cost')">
    Add new cost +
  </button>
  <button
    class="button button__add"
    @click="$emit('click-add-category')">
    Add new category +
  </button>
</div>
</template>

<script>
export default {
  name: 'MyButtonComp',
};
</script>

<style lang="scss">
.my_button{
  width: 372px;
  display: flex;
  justify-content: space-between;
}
.button{
  padding: 5px 20px;
  margin: 10px 0px;
  font-size: 12px;
  background-color: lightblue;

  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &__add{
      color: black;
  }
  &:hover{
      background-color: darken(lightblue, 40%);
      color: white;
  }
 }
</style>

<template>
  <button
    class="button button__add"
    @click="$emit('click-add')">
    Add new cost +
  </button>
</template>

<script>
export default {
  name: 'MyButtonComp',
  data: () => ({
  }),
  methods: {
  },
};
</script>

<style lang="scss">
.button{
     padding: 5px 20px;
     margin: 10px 0px;
     font-size: 16px;
     background-color: lightblue;

     text-transform: uppercase;
     cursor: pointer;
     transition: background-color 0.3s ease-in-out;
     &__add{
         color: white;
     }
     &:hover{
         background-color: darken(lightblue, 20%);
     }
 }
</style>

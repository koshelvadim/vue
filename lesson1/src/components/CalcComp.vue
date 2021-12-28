<template>
  <div>
    <h1>{{ name }}</h1>
    <div class="num">
      <input type="number" id="op1" v-model.number="op1">
      <input type="number" id="op2" v-model.number="op2">
      <span>= {{ result }}</span>
    </div>
    <div class="operation">
      <button @click="sum">+</button>
      <button @click="sub">-</button>
      <button @click="div">/</button>
      <button @click="mult">*</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcComp',

  data: () => ({
    name: 'Calculator',
    result: 0,
    op1: 0,
    op2: 0,
  }),
  methods: {
    sum() {
      this.result = this.op1 + this.op2;
    },
    sub() {
      this.result = this.op1 - this.op2;
    },
    div() {
      this.result = this.op1 / this.op2;
    },
    mult() {
      this.result = this.op1 * this.op2;
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  color: orangered;
}
.num{
  display: flex;
  justify-content: center;
    & input{
    width: 100px;
    margin-right: 10px;

    font-size: 34px;
  }
    & span{
      font-size: 40px;
    }
}
.operation{
  padding: 10px;
  & button{
    font-size: 34px;
    margin-right: 10px;
  }
}
</style>

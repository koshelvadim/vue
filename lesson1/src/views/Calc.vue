<template>
  <v-container>
    <h2>{{ name }}</h2>
    <div :class="[$style.num]">
      <input
        :class="{ 'border' : check === 'one' }"
        type="number"
        id="op1"
        v-model.number="op1"
        max="999">
      <input
        :class="{ 'border' : check === 'two' }"
        type="number"
        id="op2"
        v-model.number="op2"
        max="999">
      <span>= {{ result }}</span>
    </div>
    <div :class="[$style.error]" v-show="error">
      Ошибка: {{ error }}
    </div>
    <div :class="[$style.operation]">
      <v-btn
        v-for="operator in operators"
        @click="calculate(operator)"
        :title="operator"
        :disabled="op1 === '' || op2 === ''"
        :key="operator">{{operator}}
      </v-btn>
    </div>
    <div :class="[$style.checkbox]">
      <input type="checkbox" id="show" v-model="show">
      <label for="show">Показать клавиатуру</label>
    </div>
    <div :class="[$style.keyboard]" v-show="show">
      <v-btn
        v-for="button in buttons"
        @click="getValue(button, check)"
        :key="button"
        >{{ button }}
      </v-btn>
      <v-btn @click="delNum(check, op1, op2)">DEL</v-btn>
    </div>
    <div :class="[$style.radio]">
      <input type="radio" id="one" value="one" name="toggle" checked v-model="check">
      <label for="one">Первое поле</label>
      <input type="radio" id="two" value="two" name="toggle" v-model="check">
      <label for="two">Второе поле</label>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'CalcComp',

  data: () => ({
    name: 'Калькулятор',
    result: 0,
    op1: 0,
    op2: 0,
    error: '',
    operators: ['+', '-', '/', '*', '**', '%'],
    buttons: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    show: false,
    check: 'one',
  }),
  methods: {
    sum() {
      const { op1, op2 } = this;
      this.result = op1 + op2;
    },
    sub() {
      const { op1, op2 } = this;
      this.result = op1 - op2;
    },
    div() {
      const { op1, op2 } = this;
      if (op2 === 0) {
        this.error = 'Делить на 0 нельзя!';
      } else {
        this.result = op1 / op2;
      }
    },
    mult() {
      const { op1, op2 } = this;
      this.result = op1 * op2;
    },
    exp() {
      const { op1, op2 } = this;
      this.result = op1 ** op2;
    },
    intDiv() {
      const { op1, op2 } = this;
      this.result = op1 % op2;
    },
    calculate(operation) {
      this.error = '';
      switch (operation) {
        case '+': this.sum(); break;
        case '-': this.sub(); break;
        case '/': this.div(); break;
        case '*': this.mult(); break;
        case '**': this.exp(); break;
        case '%': this.intDiv(); break;
        default: console.log('нет таких значений');
      }
    },
    getValue(button, check) {
      if (check === 'one') {
        if (this.op1 === 0) {
          if (button === '0') {
            this.op1 = 0;
          } else {
            this.op1 = Number(button);
          }
        } else {
          this.op1 += button;
          this.op1 = Number(this.op1);
        }
      } else if (check === 'two') {
        if (this.op2 === 0) {
          if (button === '0') {
            this.op2 = 0;
          } else {
            this.op2 = Number(button);
          }
        } else {
          this.op2 += button;
          this.op2 = Number(this.op2);
        }
      }
    },
    delNum(check, op1, op2) {
      if (check === 'one') {
        this.op1 = Math.trunc(op1 / 10);
      } else {
        this.op2 = Math.trunc(op2 / 10);
      }
    },
  },
  computed: {
  },
};
</script>

<style module lang="scss">
.num {
  display: flex;
  justify-content: flex-start;
    & input {
    width: 60px;
    margin-right: 10px;

    font-size: 24px;
    &.border {
      outline: none;
      border: 2px solid red;
    }
  }
    & span{
      font-size: 24px;
    }
}
.operation {
  max-width: 300px;
  padding: 10px;
  & button{
    font-size: 24px;
    margin-right: 10px;
  }
}
.keyboard {
  max-width: 350px;
  padding: 10px;
  margin: 10px 0;
  & button{
    font-size: 20px;
    margin-right: 5px;
  }
}
</style>

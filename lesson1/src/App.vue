<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Vue.js"/>
    <CalcComp /> -->
    <header>
      <div class="header">
        <h1>Мои линые расходы:</h1>
      </div>
    </header>
    <main class="main">
      <my-button-comp
        @click-add="shower"/>
      <payments-display-comp :items="paymentsList"/>
      <add-payment-form-comp
        v-show="visible"
        @add-payment="addPayment"/>
    </main>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';
// import CalcComp from '@/components/CalcComp.vue';
import PaymentsDisplayComp from '@/components/PaymentsDisplayComp.vue';
import AddPaymentFormComp from '@/components/AddPaymentFormComp.vue';
import MyButtonComp from '@/components/MyButtonComp.vue';

export default {
  name: 'App',
  props: {
  },
  components: {
    // HelloWorld,
    // CalcComp,
    PaymentsDisplayComp,
    AddPaymentFormComp,
    MyButtonComp,
  },
  data: () => ({
    paymentsList: [],
    // paginatedData: [],
    visible: false,
  }),
  methods: {
    fetchData() {
      return [
        {
          date: '08.01.2022',
          category: 'Sale',
          value: 169,
        },
        {
          date: '10.01.2022',
          category: 'Transport',
          value: 360,
        },
        {
          date: '14.01.2022',
          category: 'Food',
          value: 532,
        },
        {
          date: '16.01.2022',
          category: 'Music',
          value: 189,
        },
        {
          date: '18.01.2022',
          category: 'Airbuss',
          value: 760,
        },
        {
          date: '20.01.2022',
          category: 'Restaurant',
          value: 332,
        },
        {
          date: '08.01.2022',
          category: 'Sale',
          value: 169,
        },
        {
          date: '10.01.2022',
          category: 'Transport',
          value: 360,
        },
        {
          date: '14.01.2022',
          category: 'Drive',
          value: 532,
        },
        {
          date: '16.01.2022',
          category: 'Music',
          value: 189,
        },
        {
          date: '18.01.2022',
          category: 'Airbuss',
          value: 760,
        },
        {
          date: '20.01.2022',
          category: 'Restaurant',
          value: 332,
        },
      ];
    },
    addPayment(data) {
      console.log(data);
      this.paymentsList.push(data);
      this.visible = false;
      const getBody = document.body;
      getBody.classList.remove('active_modal');
    },
    shower() {
      this.visible = !this.visible;
      const getBody = document.body;
      if (this.visible) {
        getBody.classList.add('active_modal');
      } else {
        getBody.classList.remove('active_modal');
      }
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  text-align: start;
  & h1 {
    color: blue;
    margin: 0;
  }
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
}
.active_modal {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1000;

  height: 90vh;

  background-color: rgba(#000000, 0.6);
}
</style>

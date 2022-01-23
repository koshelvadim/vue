<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Vue.js"/>
    <CalcComp /> -->
    <nav>
      <router-link to="dashboard">Dashboard</router-link>
      <router-link to="about">About</router-link>
      <router-link to="notfound">Not Found</router-link>
    </nav>

    <router-view />
    <!-- <header>
      <div class="header">
        <h1>Мои личные расходы:</h1>
        <h3>Итого: {{ paymentsListTotalAmount }} $</h3>
        <h3>Всего статей расхода: {{ paymentsListTotalQuantity }} шт.</h3>
        <h3>Всего категорий: {{ categoryListTotalAmount }} шт.</h3>
      </div>
    </header> -->
    <!-- <main class="main">
      <my-button-comp
        @click-add-cost="showCost"
        @click-add-category="showCategory"
        @change-size="changeSize"/>
      <payments-display-comp
        :items="paymentsList"
        :size="$store.getters.changeInputValue"/>
      <add-payment-form-comp
        v-show="visibleAddCost"
        @add-payment="addPayment"
        :categoryList="categoryList"
        :items="paymentsList"/>
      <add-category-comp
        v-show="visibleAddCategory"
        :categoryList="categoryList"
        @add-category="addCategory"/>
    </main> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  // components: { DashboardPage, AboutPage, NotfoundPage },
  data: () => ({}),
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
nav {
  padding: 20px;
  a {
    padding: 10px;
    font-size: 26px;
    margin: 0 10px;
    text-decoration: none;
    transition: all .3s ease-in-out;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>

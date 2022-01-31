<template>
  <div id="app">
    <nav>
      <router-link to="dashboard">Dashboard</router-link>
      <router-link to="about">About</router-link>
      <router-link to="notfound">Not Found</router-link>
      <router-link to="calc">Calculator</router-link>
    </nav>
    <router-view />
    <transition name="fade">
      <modal-window-comp
      v-if="showModal"
      :settings="modalSettings"/>
    </transition>
  </div>
</template>

<script>
import ModalWindowComp from '@/components/ModalWindowComp.vue';

export default {
  components: { ModalWindowComp },
  name: 'App',
  data: () => ({
    showModal: false,
    modalSettings: {},
  }),
  methods: {
    modalOpen(settings) {
      this.modalSettings = settings;
      this.showModal = true;
    },
    modalClose() {
      this.showModal = false;
      this.modalSettings = {};
    },
  },
  mounted() {
    this.$modal.EventBus.$on('show', this.modalOpen);
    this.$modal.EventBus.$on('hide', this.modalClose);
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
  margin-top: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
nav {
  padding: 20px;
  a {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: blue;
    transition: all .3s ease-in-out;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>

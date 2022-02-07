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
    <transition name="fade">
      <context-menu-comp
        v-if="showContextMenu"
        :settings="contextMenuSettings"/>
    </transition>
  </div>
</template>

<script>
import ModalWindowComp from '@/components/ModalWindowComp.vue';
import ContextMenuComp from '@/components/ContextMenuComp.vue';

export default {
  components: { ModalWindowComp, ContextMenuComp },
  name: 'App',
  data: () => ({
    showModal: false,
    showContextMenu: false,
    modalSettings: {},
    contextMenuSettings: {},
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
    contextmenuOpen(settings) {
      this.contextMenuSettings = settings;
      this.showContextMenu = true;
    },
    contextmenuClose() {
      this.showContextMenu = false;
      this.contextMenuSettings = {};
    },

  },
  mounted() {
    this.$modal.EventBus.$on('show', this.modalOpen);
    this.$modal.EventBus.$on('hide', this.modalClose);
    this.$contextmenu.EventBus.$on('show', this.contextmenuOpen);
    this.$contextmenu.EventBus.$on('hide', this.contextmenuClose);
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
  justify-content: space-between;
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

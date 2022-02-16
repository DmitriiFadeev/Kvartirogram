<template>
  <div id="app">
    <Header :item="getStatus"/>
    <Table :item="getItem"/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    Header, Table
  },

  computed: {
    getItem() {
      return this.$store.getters['getItem'];
    },
    getStatus() {
      return this.$store.getters['getStatus'];
    },
  }
}
</script>

<style>
#app {
}
</style>

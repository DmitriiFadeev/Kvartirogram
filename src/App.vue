<template>
  <div id="app">
    <Header />
    <Table />
    <Preloader v-if="getLoading" />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Table from './components/Table.vue'
  import Preloader from "@/components/Preloader";
  import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Header, Table, Preloader
  },

  computed: {
    ...mapGetters(['getLoading'])
  },
}
</script>

<style>
#app {
  background-color: #E5E5E5;
  width: 100%;
  height: 100vh;
  overflow: scroll;
}
body{
  margin: 0;
  padding: 0;
}
</style>

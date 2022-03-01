<template>
  <div id="app">
    <Header />
    <Table />
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

  metaInfo: {
    title: 'Default App Title',
    titleTemplate: '%s | vue-meta Example App',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ]
  },
}
</script>

<style>
#app {
  background-color: #E5E5E5;
  width: 100%;
  height: 100vh;
}
body{
  margin: 0;
  padding: 0;
}
</style>

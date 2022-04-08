<template>
  <div class="table">
    <div class="container">
      <Tabs />
      <Kvartiragramma v-if="getCurrentTabs === '1'" />
      <Loading  v-if="getCurrentTabs === '2'" />
      <Update v-if="getCurrentTabs === '3'" />
    </div>
  </div>
</template>

<script>

import Tabs from './Tabs.vue'
import Kvartiragramma from './Kvartiragramma.vue'
import Loading from './Loading.vue'
import Update from './Update.vue'
import {mapActions} from "vuex";


export default {
  name: "Table",
  components: {
    Tabs, Kvartiragramma, Loading, Update
  },

  computed: {
    getCurrentTabs() {
      return this.$store.getters['getCurrentTabs'];
    }
  },

  mounted() {
    this.getObject()
    // this.getData();
  },

  methods: {
    ...mapActions(['getObject', 'getData'])
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=family=Roboto&display=swap');
  .table{
    position: relative;
    z-index: 3;
  }
  .container{
    background: #FFFFFF;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    margin: -50px 20px 20px 20px;
    padding: 20px 0;
  }
</style>
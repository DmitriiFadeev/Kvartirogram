<template>
  <div class="table">
    <div class="container">
      <Tabs />
      <div class="table__wrapper">
        <div class="table__inner" v-for="items in item.body">
          <div class="table__title">{{items.entrance}}</div>
          <Entrance :item="items.apartments" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Tabs from './Tabs.vue'
import Entrance from './Entrance.vue'

export default {
  name: "Table",
  components: {
    Tabs, Entrance
  },
  props: {
    item: Object
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=family=Roboto&display=swap');

  .table{
    width: auto;
    height: auto;
    background-color: #E5E5E5;
    padding: 20px;

    &__wrapper{
      display: flex;
    }

    &__inner{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 5px;
    }
    &__title{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      color: #757676;
      margin-bottom: 10px;
    }
  }

  .container{
    background: #FFFFFF;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    margin-top: -50px;
  }
</style>
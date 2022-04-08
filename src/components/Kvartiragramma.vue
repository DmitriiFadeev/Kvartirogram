<template>
  <div class="table__wrapper">
    <div class="table__floors">
      <div @click="() => setSortList()" class="table__floorsTitle">
        <div>Этаж</div>
        <img class="arrow-down" src="../assets/arrow-down.svg">
      </div>
      <div class="table__floorsList">
        <div v-for="item in getLvlList" :key="item" class="table__floorsItem">
          <div v-bind:class="{ 'table__floorsItem--active': Number(getActiveLvl) === Number(item) + 1 }" @click="(e) => setActiveLvl(e)" :id="Number(item) + 1" class="table__floorsItemInner">{{Number(item) + 1}}</div>
        </div>
      </div>
    </div>
    <div class="table__content">
      <div class="table__inner" v-for="items in getItem.body">
        <div class="table__title">{{items.entrance}} подъезд</div>
        <Entrance :item="items.apartments" />
      </div>
    </div>
  </div>
</template>

<script>
import Entrance from './Entrance.vue'
import { mapActions } from 'vuex'

export default {
  name: "Kvartiragramma",
  components: {
    Entrance
  },

  computed: {
    getItem() {
      return this.$store.getters['getItem'];
    },
    getLvlList() {
      return this.$store.getters['getLvlList'];
    },
    getActiveLvl() {
      return this.$store.getters['getActiveLvl'];
    }
  },

  mounted() {
    console.log('getItem', this.getItem)
  },

  methods: {
    ...mapActions({
      setSortList: 'setSortList',
      setLvl: 'setLvl',
      setActiveLvl: 'setActiveLvl',
    })
  },
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
    padding-left: 15px;
    max-height: 710px;
    overflow: scroll;
    border-top: 1px solid #9E9E9E;
    padding-top: 20px;

    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background-color: #FFFFFF;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: #464F60;
    }

    &::-webkit-scrollbar-track {
      border-radius: 3px;
      background-color: #FFFFFF;
    }
  }

  &__floors{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__floorsTitle{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #757676;
    margin-bottom: 10px;
    position: relative;
    cursor: pointer;
  }
  &__floorsList{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 0;
  }

  &__floorsItem{
    padding: 5px 10px;
    min-height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__floorsItemInner{
    padding: 11px 16px;
    cursor: pointer;
  }

  &__floorsItem--active{
    background: #FFFFFF;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  &__content{
    display: flex;
    padding-left: 15px;
  }
  &__inner{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5px;
    min-width: 718px;
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

.arrow-down{
  position: absolute;
  bottom: -10px;
  //left: 50%;
  transform: translate(70%, 50%);
}
</style>
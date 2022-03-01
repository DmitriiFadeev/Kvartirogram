<template>
  <div class="tabs">
    <div @click="(e) =>setCurrentTabs(e)" :id="1" class="tabs__btn" :class="getCurrentTabs === '1' ? 'tabs__btn--active' : ''">{{getItem.name}}</div>
    <div @click="(e) =>setCurrentTabs(e)" :id="2" class="tabs__btn" :class="getCurrentTabs === '2' ? 'tabs__btn--active' : ''">Обновления</div>
    <div @click="(e) =>setCurrentTabs(e)" :id="3" class="tabs__btn" :class="getCurrentTabs === '3' ? 'tabs__btn--active' : ''">Загрузка</div>
  </div>
</template>

<script>
export default {
  name: "Tabs",

  computed: {
    getItem() {
      return this.$store.getters['getItem'];
    },
    getCurrentTabs() {
      return this.$store.getters['getCurrentTabs'];
    }
  },

  methods: {
    setCurrentTabs(e){
      this.$store.commit('setCurrentTabs', e.target.id)
    }
  }
}
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto&display=swap');

  .tabs{
    display: flex;
    align-items: center;
    padding: 20px;

    background-color: #FFFFFF;

    &__btn{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #757676;
      padding: 10px;
      cursor: pointer;

      &:hover{
       color: #4C95DF;
      }
    }

    &__btn--active{
      background: #FFFFFF;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
      border-radius: 8px
    }
  }
</style>
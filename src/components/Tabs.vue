<template>
  <div class="tabs">
    <div class="tabs__btn tabs__btn--active">ЖК Кислород Литер 8</div>
    <div class="tabs__btn">Обновления</div>
    <div class="tabs__btn">Загрузка</div>
  </div>
</template>

<script>
export default {
  name: "Tabs"
}
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto&display=swap');

  .tabs{
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    //border-bottom: 1px solid #9E9E9E;
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
    }

    &__btn--active{
      background: #FFFFFF;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
      border-radius: 8px
    }
  }
</style>
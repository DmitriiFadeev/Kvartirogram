<template>
  <div class="loading">
    <div class="loading__title">История обновлений квартирограммы</div>
    <div class="loading__content">
      <div class="loading__item">15.02.2022 - 18:00  (обновление с 1С)</div>
      <div class="loading__item">15.02.2022 - 18:00  (обновление с 1С)</div>
      <div class="loading__item">15.02.2022 - 18:00  (обновление с 1С)</div>
      <div class="loading__item">15.02.2022 - 18:00  (обновление с 1С)</div>
      <div class="loading__item">15.02.2022 - 18:00  (обновление с 1С)</div>
      <div class="loading__item">15.02.2022 - 18:00  (обновление с 1С)</div>
      <div class="loading__item">15.02.2022 - 18:00  (обновление с 1С)</div>
      <div class="loading__item">15.02.2022 - 18:00  (обновление с 1С)</div>
      <div class="loading__item">15.02.2022 - 18:00  (обновление с 1С)</div>
      <div class="loading__item">15.02.2022 - 18:00  (обновление с 1С)</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=family=Roboto&display=swap');
  .loading{
    padding: 0 30px;

    &__title{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #757676;
      margin-bottom: 20px;
    }

    &__content{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      display: flex;
      flex-direction: column;
      color: #757676;
    }
    &__item{
      padding-left: 20px;
    }
  }
</style>
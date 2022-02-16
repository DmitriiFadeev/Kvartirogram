<template>
  <div class="header">
    <div class="header__row">
      <div class="header__title">Квартирограмма</div>
      <div class="header__filter">
        <div class="header__object">
          <div class="header__filterTitle">объект</div>
          <input placeholder="ЖК Кислород Литер 8" class="header__filterInput" />
        </div>
        <div class="header__room">
          <div class="header__filterTitle">комнат</div>
          <input placeholder="все" class="header__filterInput" />
        </div>
        <div class="header__price">
          <div class="header__filterTitle">стоимость</div>
          <input placeholder="от" class="header__filterInput" />
          <input placeholder="до" class="header__filterInput" />
        </div>
        <div class="header__square">
          <div class="header__filterTitle">площадь</div>
          <input placeholder="от" class="header__filterInput" />
          <input placeholder="до" class="header__filterInput" />
        </div>
      </div>
      <button class="header__clear">
        <img alt="logo" src="../assets/close.svg">
        <div>Сбросить фильтр</div>
      </button>
    </div>
    <div class="header__row">
      <button class="header__btn">Показать</button>
      <div class="header__description">
        <div class="header__descriptionItem" v-for="item in status">
          <div class="header__descriptionItemColor" style="background-color: #FFFFFF"></div>
          <div class="header__descriptionItemText">свободно</div>
        </div>
        <div class="header__descriptionItem">
          <div class="header__descriptionItemColor" style="background-color: #FFFFFF"></div>
          <div class="header__descriptionItemText">свободно</div>
        </div>
      </div>
      <div class="header__logo">
            <img alt="logo" src="../assets/logo.svg">
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';
// var Vue = require('vue').default;

export default {
  name: "Header",
  props: {
    status: Array
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto&display=swap');

  .header{
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    background-color: darkblue;
    height: 190px;
    //background-image: 'url(' + require(@/assets/img/${page.image}) + ')';
    //backgroundImage: `url(${require('@/assets/path/to/your/img.jpg')})`

    &__row{
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
    }

    &__title{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 36px;
      line-height: 44px;
      color: #FFFFFF;
    }

    &__object{

    }

    &__filter{
      display: flex;
    }

    &__filterTitle{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #FFFFFF;
      margin-left: 5px;
      margin-right: 5px;
      margin-bottom: 3px;
    }

    &__filterInput{
      margin: 0 5px;
      background: #FFFFFF;
      border: 1px solid #C4C4C4;
      box-sizing: border-box;
      border-radius: 5px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #757676;
    }

    &__clear{
      display: flex;
      align-items: center;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #FFFFFF;
      border: none;
      background-color: transparent;
      cursor: pointer;

    }
    &__btn{
      background: linear-gradient(180deg, #9E4BE2 0%, #4C95DF 100%);
      font-family: 'Roboto', sans-serif;
      border-radius: 8px;
      font-size: 16px;
      line-height: 130%;
      color: #FFFFFF;
      border: none;
      padding: 10px 65px;
      cursor: pointer;
    }
    &__description{
      display: flex;
      align-items: center;
    }
    &__descriptionItem{
      display: flex;
      align-items: center;
      margin: 0 10px;
    }
    &__descriptionItemColor{
      width: 20px;
      height: 20px;
      border: 1px solid #C4C4C4;
      border-radius: 3px;
      margin-right: 10px;
    }
    &__descriptionItemText{
      font-size: 16px;
      line-height: 16px;
      color: #FFFFFF;
    }
  }
</style>
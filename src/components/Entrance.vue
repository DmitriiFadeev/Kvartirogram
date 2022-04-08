<template>
  <div class="entrance" :class="filteredItems ? 'jc-en' : 'jc-st'">
    <div class="entrance__row" v-for="(row, index) in item" :key="index">
        <div
            class="entrance__item"
            :class="[itm.status, itm.active === 'disabled' ? 'entrance__item--disabled' : '', row.selectlvl ? 'entrance__item--select' : '']"
            v-for="itm in row.rooms"
            :key="itm.number">
          <div class="entrance__itemCol entrance__number">{{itm.number}}</div>
          <div class="entrance__itemCol entrance__params">
            <div class="entrance__table">
              <div class="entrance__tableRow">
                <div class="entrance__square">{{Number(itm.square).toLocaleString('ru')}}</div>
                <div class="entrance__col">{{itm.col}}</div>
              </div>
              <div class="entrance__tableRow">
                <div class="entrance__houseroom">{{itm.houseroom}}</div>
                <div class="entrance__summa">{{Number(itm.price).toLocaleString('ru')}}</div>
              </div>
              <div class="entrance__price">{{Number(itm.summa).toLocaleString('ru')}}</div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Entrance",

  props: {
    item: Array,
  },

  computed: {
    ...mapState({
      filteredItems: 'filteredItems'
    })
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=family=Roboto&display=swap');

  .entrance{
    background: #CDEAFF;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 6px 9px;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    align-items: flex-start;

    &__row{
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    &__item{
      background: #FFFFFF;
      border: 1px solid #C4C4C4;
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 5px 10px;
      margin: 5px;
      min-width: 108px;
      width: 100%;
    }
    &__params{
      width: 75%;
    }

    &__item--disabled{
      background: #CDEAFF;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      opacity: 0.2;
    }

    &__item--select{
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    &__tableRow{
     display: flex;
      align-items: center;
      border-bottom: 1px solid #9E9E9E;
      padding: 2px 0;
    }

    &__itemCol{
        //border: 1px solid black;
    }

    &__table{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      color: #000000;
      border-left: 1px solid #9E9E9E;
      padding: 0 5px;
      width: 100%;
    }

    &__number{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      color: #000000;
      margin-right: 5px;
      min-width: 15%;
    }

    &__square{
      border-right: 1px solid #9E9E9E;
      padding: 1px;
      width: 35%;
      min-width: 35%;
    }
    &__col{
      padding: 1px 3px;
    }
    &__houseroom{
      border-right: 1px solid #9E9E9E;
      padding: 1px;
      width: 35%;
      min-width: 35%;
    }
    &__summa{
      padding: 1px 3px;
    }
    &__price{
      text-align: center;
      padding: 1px;
    }
  }

  .free{
    background-color: #FFFFFF;
  }
  .reserve{
    background-color: #FFDE31;
  }
  .booking{
    background-color: #90CDF4;
  }
  .contract{
    background-color: #A6E0B3;
  }
  .transferred{
    background-color: #FED7D7;
  }
  .close{
    background-color: #C4C4C4;
  }

  .jc-en{
    justify-content: flex-end;
  }

  .jc-st{
    justify-content: flex-start;
  }

</style>
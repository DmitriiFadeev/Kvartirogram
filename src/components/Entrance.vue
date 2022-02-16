<template>
  <div class="entrance">
    <div class="entrance__row" v-for="row in item" :key="row.floors">
        <div class="entrance__item" v-for="itm in row.rooms" :key="itm.number">
          <div class="entrance__itemCol entrance__number">{{itm.number}}</div>
          <div class="entrance__itemCol">
            <table class="entrance__table">
              <tr>
                <td class="entrance__square">{{itm.square}}</td>
                <td class="entrance__col">{{itm.col}}</td>
              </tr>
              <tr>
                <td class="entrance__houseroom">{{itm.houseroom}}</td>
                <td class="entrance__summa">{{itm.summa}}</td>
              </tr>
              <tr>
                <td class="entrance__price" colspan="2">{{itm.price}}</td>
              </tr>
            </table>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entrance",

  props: {
    item: Array
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
      min-width: 90px;
    }
    &__itemCol{

    }
    &__table{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      color: #000000;
      border-left: 1px solid #9E9E9E;
    }

    &__number{
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      color: #000000;
      margin-right: 5px;
    }

    &__square{

    }
    &__col{

    }
    &__houseroom{

    }
    &__summa{

    }
    &__price{

    }
  }

  tr {
    border-bottom: 1px solid #9E9E9E;
  }

</style>
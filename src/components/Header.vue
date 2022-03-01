<template>
  <div class="header">
    <div class="header__row zr">
      <div class="w-30">
        <div class="header__title">Квартирограмма</div>
      </div>
      <div class="w-60 jc-c">
        <div class="header__filter">
          <div class="header__filterCol">
            <div class="header__filterItem header__object">
              <div class="header__filterTitle">объект</div>
              <v-select v-model="selectedObj" class="header__filterInput header__filterSelectObj style-chooser" :options="getListObject" :searchable="false"></v-select>
            </div>
            <div class="header__filterItem header__room">
              <div class="header__filterTitle">комнат</div>
              <v-select v-model="selectedRooms.join()" :options="['']" :searchable="false" :internal-search="false" class="header__filterInput header__filterSelectRooms">
                <template #list-header >
                  <label class="header__label" v-for="item in checkboxes" :key="item.id" :for="item.lvl">
                    <input v-model="checkboxes[item.id].status" class="header__inp" type="checkbox" :id="item.lvl" @change="(e) => addLvl(e)"/>
                    <div>{{item.lvl}}</div>
                    <div class="header__fake">
                      <img src="../assets/checkbox.svg">
                    </div>
                  </label>
                </template>
              </v-select>
            </div>
          </div>
          <div class="header__filterCol">
            <div class="header__filterItem header__price">
              <div class="header__filterTitle">стоимость</div>
              <input type="number" v-model.number.trim="priceStart" placeholder="от" class="header__filterInput m0 br0" />
              <input type="number" v-model.number.trim="priceEnd" placeholder="до" class="header__filterInput m0 bl0" />
            </div>
            <div class="header__filterItem header__square">
              <div class="header__filterTitle">площадь</div>
              <input type="number" v-model.number.trim="squareStart" placeholder="от" class="header__filterInput m0 br0" />
              <input type="number" v-model.number.trim="squareEnd" placeholder="до" class="header__filterInput m0 bl0" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-30 jc-r">
        <div @click="() => clearFilter()" class="header__clear">
          <svg class="close-icon" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2917 6.29408C16.6823 5.90355 17.3154 5.90355 17.706 6.29408C18.0965 6.6846 18.0965 7.31776 17.706 7.70829L13.4143 12L17.706 16.2917C18.0965 16.6822 18.0965 17.3154 17.706 17.7059C17.3154 18.0964 16.6823 18.0964 16.2918 17.7059L12 13.4142L7.70833 17.7059C7.3178 18.0964 6.68464 18.0964 6.29411 17.7059C5.90359 17.3154 5.90359 16.6822 6.29411 16.2917L10.5858 12L6.29412 7.70829C5.9036 7.31776 5.9036 6.6846 6.29412 6.29408C6.68464 5.90355 7.31781 5.90355 7.70833 6.29408L12 10.5858L16.2917 6.29408Z"/>
          </svg>
          <div>Сбросить фильтр</div>
        </div>
      </div>
    </div>
    <div class="header__row">
      <div class="w-30">
        <Button text="Показать" color="thee" @click="() => filter()"  class="header__btn"></Button>
      </div>
      <div class=" w-60 jc-c">
        <div class="header__description">
          <div class="header__descriptionItem" v-for="item in getStatus">
            <div class="header__descriptionItemColor" :class="item.class" ></div>
            <div class="header__descriptionItemText">{{item.text}}</div>
          </div>
        </div>
      </div>
      <div class="w-30 jc-r">
        <div class="header__logo ">
          <img alt="logo" src="../assets/logo.svg">
        </div>
      </div>

    </div>
    <img class="header__bg" alt="header-bg" src="../assets/header-bg.png">
  </div>
</template>

<script>
import vSelect from 'vue-select'
import Button from "@/components/Button";

export default {
  name: "Header",
  components: {Button, vSelect },
  computed: {
    getItem() {
      return this.$store.getters['getItem'];
    },
    getStatus() {
      return this.$store.getters['getStatus'];
    },
    getListObject() {
      return this.$store.getters['getListObject'];
    }
  },

  data() {
    return {
      showSelect: false,
      selectedObj: 'ЖК Кислород Литер 8',
      selectedRooms: ['все'],
      priceStart: null,
      priceEnd: null,
      squareStart: null,
      squareEnd: null,
      expanded: false,
      checkboxes: [
        {id: 0, status: true, lvl: 'все' },
        {id: 1, status: true, lvl: 1 },
        {id: 2, status: true, lvl: 2 },
        {id: 3, status: true, lvl: 3 },
        {id: 4, status: true, lvl: 4 },
        {id: 5, status: true, lvl: 5 },
      ],
    }
  },

  methods: {
    openSelect(e){
      let select = this.$refs.checkboxes
      if (e.target == select) {
        select.style.display = "none";
      }
    },

    clearFilter(){
      this.selectedObj = this.getListObject[0];
      this.selectedRooms = ['все'];
      this.priceStart = null;
      this.priceEnd = null;
    },
    filter(){
      const data = {
        selectedObj: this.selectedObj,
        selectedRooms: this.selectedRooms,
        priceStart: this.priceStart,
        priceEnd: this.priceEnd,
        squareStart: this.squareStart,
        squareEnd: this.squareEnd,
        checkboxes: this.checkboxes
      }
      this.$store.commit('setFilteredItems')
      this.$store.commit('setFilter', data)
    },

    showCheckboxes() {
      let checkboxes = this.$refs.checkboxes
      if (!this.expanded) {
        checkboxes.style.display = "block";
        this.expanded = true;
        this.showSelect = true
      } else {
        checkboxes.style.display = "none";
        this.expanded = false;
      }
    },

    addLvl(e){
      if(e.target.id === 'все' && e.target.checked){
        for (const checkbox of this.checkboxes) {
          checkbox.status = true
        }
        this.selectedRooms = []
        this.selectedRooms.push(e.target.id)
      }
      if (e.target.id === 'все' && !e.target.checked){
        this.selectedRooms = []
        for (const checkbox of this.checkboxes) {
          checkbox.status = false
        }
      }

      if(e.target.id !== 'все' && e.target.checked){
        this.selectedRooms.push(e.target.id)
      }

      if(e.target.id !== 'все' && !e.target.checked){
        this.checkboxes[0].status = false
        this.selectedRooms = []
        for (const checkbox of this.checkboxes) {
          if(checkbox.status === true){
            this.selectedRooms.push(Number(checkbox.id))
          }
        }
      }
    },
  }
}
</script>
<style src="vue-select/dist/vue-select.css"></style>

<style scoped>
>>> {
  --vs-dropdown-option--active-bg: #CDEAFF;
  --vs-dropdown-option--active-color: #757676;
}
</style>


<style>
.vs__dropdown-toggle{
  border: none !important;
  padding: 0;
  width: 100%;
}

.vs--single{
  display: flex;
}
.vs__clear{
  display: none
}

.vs__actions{
  transform: scale(0.8);
}

.style-chooser .vs__dropdown-menu {
  /*background: #dfe5fb;*/
  /*border: none;*/
  /*color: #394066;*/
  /*text-transform: lowercase;*/
  /*font-variant: small-caps;*/
}

header__filterSelectRooms ~ .vs__dropdown-menu{
  display: none !important;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #464F60;
}

.vs__selected-options{
  display: flex;
  align-items: center;
}

</style>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto&display=swap');
  .header{
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    background-color: darkblue;
    height: 190px;
    position: relative;

    &__bg{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    &__filterCol{
      display: flex;
      align-items: center;
    }

    &__row{
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      z-index: 2;
    }

    &__title{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 2vw;
      color: #FFFFFF;
    }

    &__filterItem{
      margin: 0 5px;
    }

    &__room{
      position: relative;
    }

    &__overSelect {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    &__label{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 10px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #757676;
    }

    &__inp{
      display: none;
    }

    &__fake{
      width: 10px;
      height: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition-duration:0.25s;
    }

    &__inp:checked ~ &__fake{
      opacity: 1;
      transition-duration:0.25s;
    }

    &__checkboxes {
      display: none;
      border: 1px #dadada solid;
      position: absolute;
      width: 89%;
      background-color: #FFFFFF;
      transform: translate(5%, 0%);
    }

    &__checkboxes label {
      display: flex;
    }

    &__checkboxes label:hover {
      background-color: #CDEAFF;
    }

    &__filter{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
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
      min-height: 41px;
      padding: 0 5px;
    }
    &__filterSelectObj{
      //max-width: 30vw;
      max-width: 280px;
      min-width: 280px;
      width: 100%;

      //&:hover{
      //   background-color: #D8093A !important;
      //   color: #ffffff;
      //}
    }

    &__option{
      // background-color: #D8093A !important;
      // color: #ffffff;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #757676;
    }

    &__filterSelectRooms{
      min-width: 100px;
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

      &:hover{
        color: #4C95DF;
        .close-icon{
          fill: #4C95DF;
        }
      }

      &:active{
        color: #0F64BA;
        .close-icon{
          fill: #0F64BA;
        }
      }

    }
    &__btn{
      font-family: 'Roboto', sans-serif;
      border-radius: 8px;
      font-size: 16px;
      line-height: 130%;
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

  .header_option:hover {
    background-color: #D8093A !important;

    color: #ffffff;
  }

  .m0{
    margin: 0;
    max-width: 120px;
  }

  .br0{
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    margin-left: 5px;
  }

  .bl0{
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-right: 5px;
  }

  .zr{
    z-index: 5;
  }

  .w-30{
    width: 20%;
    display: flex;
    align-items: center;
  }
  .w-60{
    width: 60%;
    display: flex;
    align-items: center;
  }

  .jc-c{
    justify-content: center;
  }

  .jc-r{
    justify-content: flex-end;
  }

  input, select {
    outline:none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    appearance: textfield;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    display: none;
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
  .close-icon{
    fill: #FFFFFF;
  }

</style>
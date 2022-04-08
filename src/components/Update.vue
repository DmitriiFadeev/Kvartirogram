<template>
  <div class="update">
    <div class="update__title">
      Загрузка и выгрузка данных вручную.
    </div>
    <div class="update__content">
      <div class="update__row">
        <div class="update__col">Для загрузки CSV файла, необходимо нажать кнопку «загрузить файл», выбрать с жесткого диска компьютера CSVфайл и загрузить его в битрикс.</div>
        <div>
          <input type="file" ref="file" @change="parse" class="input one">
        </div>
      </div>
      <div class="update__row">
        <div class="update__col">Для выгрузки CSV файла на компьютер, необходимо нажать кнопку «выгрузить файл».</div>
        <Button text="Выгрузить файл" color="two"  @click="() => download()" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button"
import {mapActions} from "vuex"

export default {
  name: "Update",
  components: {Button},

  data() {
    return {
      unparsedResults: null,
      parsed: false,
      file: '',
    }
  },

  methods: {
    parse() {
      const file = this.$refs.file.files[0]
      this.$papa.parse(file, {
        header: false,
        complete: (result) => {
          this.setData(result.data)
        }
      })
    },
    ...mapActions(['setData'])
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=family=Roboto&display=swap');
.update{
  padding: 0 20px;

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
    align-items: center;
    text-align: center;
    color: #757676;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  &__row{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 10px 0;
    width: 100%;
    text-align: left;
  }

  &__col{
    min-width: 25%;
    max-width: 25%;
    margin-right: 20px;
  }
}

.input{
  &::-webkit-file-upload-button {
    border: none;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    padding: 10px 40px;
    cursor: pointer;
    min-width: 200px;
  }
}

.one{
  &::-webkit-file-upload-button{
    background: #4C95DF;
  }
}
</style>
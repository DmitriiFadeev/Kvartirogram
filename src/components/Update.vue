<template>
  <div class="update">
    <div class="update__title">
      Загрузка и выгрузка данных вручную.
    </div>
    <div class="update__content">
      <div class="update__row">
        <div class="update__col">Для загрузки CSV файла, необходимо нажать кнопку «загрузить файл», выбрать с жесткого диска компьютера CSVфайл и загрузить его в битрикс.</div>
        <Button text="Загрузить файл" color="one"/>
      </div>
      <div class="update__row">
        <div class="update__col">Для выгрузки CSV файла на компьютер, необходимо нажать кнопку «выгрузить файл».</div>
        <Button text="Выгрузить файл" color="two"/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Update",
  components: {Button}
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
</style>
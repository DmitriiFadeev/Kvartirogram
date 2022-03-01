<template>
  <div>
    <button :class="color" @click="filtered()" class="btn">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    filtered(){
      this.$emit('click')
    },
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=family=Roboto&display=swap');
  .btn{
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

    &:hover {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      color: #000000;
    }
  }

  .one{
    background: #4C95DF;
  }
  .two{
    background: #9E4BE2;
  }
  .thee{
    background: linear-gradient(180deg, #9E4BE2 0%, #4C95DF 100%);
  }
</style>
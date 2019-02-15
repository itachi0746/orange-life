<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .van-stepper__minus, .van-stepper__plus {
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    background-color: #fff;
    border: 2px solid #ebedf0;
    position: relative;
    padding: 2px;
    vertical-align: middle;
  }
  .van-stepper__minus::before, .van-stepper__plus::before {
    width: 15px;
    height: 2px;
  }
  .van-stepper__minus::after, .van-stepper__plus::after {
    width: 2px;
    height: 15px;
  }
  .van-stepper__input {
    width: 100px;
    height: 52px;

    padding: 2px;
    border: 2px solid #ebedf0;
    /* border-width: 0.025rem 0; */
    border-radius: 0;
    box-sizing: content-box;
    color: #7d7e80;
    /*font-size: 0.35rem;*/
    font-size: 28px;
    vertical-align: middle;
    text-align: center;
    -webkit-appearance: none;
  }

  .van-checkbox__icon {
    height: 40px;
  }
  .van-checkbox__icon, .van-checkbox__label {
    line-height: 40px;
  }
  .van-checkbox__icon .van-icon {
    font-size: 0.55rem;
    width: 1rem;
    height: 1rem;
    border: 0.05rem solid #e5e5e5;
  }
</style>

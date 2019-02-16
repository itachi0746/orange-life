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

<style lang="scss">
  @import "../../styles/common";
  @import "../../styles/mixin";

  .van-submit-bar__bar {

  }
  .van-button {
    font-size: 28px;
  }
  .van-button--large {
    width: 100%;
    height: 2.2rem;
    line-height: 2.2rem;
  }
  .van-button--danger {
    color: #fff;
    /*background-color: #f4456c;*/
    /*border: 0.025rem solid #f4456c;*/
    background-color: $btnColor;
    border: 0.025rem solid $btnColor;
  }
  .van-submit-bar__price {
    font-size: 28px;
  }
  .van-submit-bar__bar {
    height: 2.2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    font-size: 0.75rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-color: #fff;
  }
  .van-submit-bar .van-button {
    width: 300px;
    border-radius: 30px;
  }
  .van-submit-bar__price::first-letter {
    font-size: 28px;
  }
</style>

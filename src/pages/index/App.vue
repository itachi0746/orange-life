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
  /*轮播指示*/
  .van-swipe__indicator {
    width: 30px;
    height: 10px;
    border-radius: 10px;
  }
  .van-card__title {
    max-height: .8rem;
    line-height: .8rem;
  }
  .van-card__content {
    justify-content: space-between;
    padding: 10px 0;
    height: 3rem;

  }
  .van-card__thumb {
    width: 3rem;
    height: 3rem;
  }
</style>

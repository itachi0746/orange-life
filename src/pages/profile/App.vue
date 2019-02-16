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

  .van-cell__left-icon, .van-cell__right-icon {
    height: 1rem;
    min-width: 1em;
    font-size: 0.75rem;
    line-height: 1rem;
  }
</style>

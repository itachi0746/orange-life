<template>
  <!--  开始-->
  <div class="loading-layer">
    <van-loading class="loading" />
  </div>
  <!--  结束-->
</template>

<script>

export default {
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {},

  created() {},

  mounted() {},

  beforeDestroy() {}
}
</script>

<style lang='scss' scoped>
  @import "../styles/mixin";

  .van-loading {
    width: 2rem;
    height: 2rem;
    z-index: 0;
    font-size: 0;
    line-height: 0;
    position: relative;
    vertical-align: middle;
  }
  .loading-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

  }
  .loading {
    @include center;
  }
</style>

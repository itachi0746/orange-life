<template>
  <!--  开始-->
  <div class="footer">
    <footer>
      <van-row class="footer-box">
        <van-col span="8" class="footer-i-box">
          <div class="footer-item">首页</div>
        </van-col>
        <van-col span="8">
          <div class="footer-item">购物车</div>
        </van-col>
        <van-col span="8">
          <div class="footer-item">我的</div>
        </van-col>
      </van-row>
    </footer>
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
  @import "src/styles/mixin";
  .footer {
    font-size: 28px;
    height: 95px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    border-top: 2px solid black;
  }
  footer {
    height: 97px;
    width: 100%;

    div {
      height: 100%;
    }

    .footer-item {
      @include defaultFlex;
    }
  }
</style>

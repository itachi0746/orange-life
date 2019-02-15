<template>
  <!--  开始-->
  <div class="footer" id="footer">
    <footer>
      <van-row class="footer-box">
        <van-col span="8" v-for="(item) in footerArr" :key="item.id">
          <div class="footer-item" @click="clickFooter(item.link)">{{item.name}}</div>
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
      footerArr: [
        {
          id: 0,
          name: '首页',
          link: 'index.html'
        },
        {
          id: 1,
          name: '购物车',
          link: 'cart.html'
        },
        {
          id: 2,
          name: '我的',
          link: 'profile.html'
        },
      ]
    }
  },

  components: {},

  computed: {},

  methods: {
    clickFooter(link) {
      console.log(link);
      myModule.goToPage('',link,{});
    }
  },

  created() {},

  mounted() {},

  beforeDestroy() {}
}
</script>

<style lang='scss' scoped>
  @import "src/styles/mixin";
  .footer {
    font-size: 28px;
    /*height: 95px;*/
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    border-top: 2px solid black;
  }
  footer {
    /*height: 97px;*/
    width: 100%;

    div {
      height: 2.375rem;
    }

    .footer-item {
      @include defaultFlex;
    }
  }
</style>

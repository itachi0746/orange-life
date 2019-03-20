<template>
  <div class="profile">
    <div class="header" ref="header">
      <div class="img-box"></div>
      <div class="tel">
        1345678467
      </div>
    </div>
    <div class="body" ref="body">
      <div class="p-item" @click="clickMyOrder">
        <van-cell title="我的订单" is-link />
      </div>
      <div class="p-item" @click="clickKF">
        <van-cell title="联系客服" is-link />
      </div>
    </div>
    <Loading v-if="loading"></Loading>
    <Footer ref="footer"></Footer>
  </div>
</template>

<script>
  import Footer from '../../../components/Footer'
  import Loading from '../../../components/Loading'
  import { myModule } from '../../../common'

  export default {
    name: 'Profile',
    data () {
      return {
        loading: false
      }
    },
    methods: {
      setBodyHeight () {
        let wh = myModule.getClientHeight();
        let headerH = this.$refs.header.offsetHeight;
        let footer = document.getElementById('footer');
        let footerH = footer.offsetHeight;

        let theH = wh - headerH - footerH;
//        debugger
        this.$refs.body.style.height = theH + 'px'
      },
      clickMyOrder() {
//        this.loading = true;
        myModule.goToPage('','myOrder.html',{})
      },
      clickKF() {
//        debugger
        location.href = 'tel:13455555555';
      }
    },
    mounted () {

      let me = this;
      setTimeout(function () {
        me.setBodyHeight()
      }, 300)
    },
    components: {
      Footer,Loading
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /*@import "../../../styles/common";*/
  @import "../../../styles/mixin";

  .header {
    font-size: 28px;
    height: 260px;
    width: 100%;
    background-color: #999999;
    padding: 70px 25px;
    display: flex;
  }
  .img-box {
    width: 116px;
    height: 116px;
    background-color: $btnColor;
    border-radius: 50%;
  }
  .tel {
    padding-left: 20px;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .p-item {
    /*padding: 28px 25px;*/
    margin-bottom: 25px;
    height: 85px;
    background-color: #ffffff;
  }
  .van-cell {
    line-height: 1rem;
    font-size: 0.75rem;
    width: 100%;
    /*height: 100%;*/
    padding: 28px 25px;

  }
  .van-cell__left-icon, .van-cell__right-icon {
    height: 1rem;
    min-width: 1em;
    font-size: 0.75rem;
    line-height: 1rem;
  }
  .body {
    background-color: #f8f8f8;
    width: 100%;
    overflow: hidden;
  }

</style>

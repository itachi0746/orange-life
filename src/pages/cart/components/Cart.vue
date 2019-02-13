<template>
  <div class="cart">
    <div class="cart-list" ref="cartList">
      <div class="header" ref="header">
        <span>编辑</span>
      </div>
      <div ref="cartUlBox" class="cartUl-box scroll-y">
        <ul class="">
          <li class="cart-list-li">
            <van-row>
              <van-col span="2">
                <div class="select-icon">
                  <van-icon name="circle" />
                </div>
              </van-col>
              <van-col span="6">
                <div class="goods-img">
                  <img src="../assets/logo.png" alt="">
                </div>
              </van-col>
              <van-col span="16">
                <div class="goods-data">
                  <div class="goods-name">
                    名字2222
                  </div>
                  <div class="goods-num">

                    <span>￥100</span>
                    <span>×1</span>
                  </div>
                </div>
              </van-col>
            </van-row>
          </li>
          <li class="cart-list-li">
            <van-row>
              <van-col span="2">
                <div class="select-icon">
                  <van-icon name="circle" />
                </div>
              </van-col>
              <van-col span="6">
                <div class="goods-img">
                  <img src="../assets/logo.png" alt="">
                </div>
              </van-col>
              <van-col span="16">
                <div class="goods-data">
                  <div class="goods-name">
                    名字2222
                  </div>
                  <div class="goods-num">

                    <span>￥100</span>
                    <span>×1</span>
                  </div>
                </div>
              </van-col>
            </van-row>
          </li>
        </ul>
      </div>

    </div>
    <div class="btm-fill" ref="btmFill"></div>
    <div class="btm-p">
      <van-row>
        <van-col span="8">
          <div class="sel-all">
            <van-icon name="circle" />
            <span>全选</span>
          </div>
        </van-col>
        <van-col span="10">
          <div class="total-price">
            ￥100.00
          </div>
        </van-col>
        <van-col span="6">
          <div class="action-btn">
            提交订单
          </div>
        </van-col>
      </van-row>
    </div>
    <Footer ref="footer"></Footer>
  </div>
</template>

<script>
  import Footer from '../../../components/Footer';

  export default {
    name: 'Cart',
    data () {
      return {
      }
    },
    methods: {
      setCartListHeight() {
        let wh = myModule.getClientHeight();
        let headerH = this.$refs.header.offsetHeight;
        let btmFillH = this.$refs.btmFill.offsetHeight;
        let footerH = this.$refs.footer.offsetHeight;
        let theH = wh - headerH - btmFillH;
//        debugger
        this.$refs.cartUlBox.style.height = theH + 'px';
      }
    },
    created() {

    },
    mounted() {
//      this.$nextTick(()=> {
//        this.setCartListHeight()
//      })
      let me = this;
      setTimeout(function () {
        me.setCartListHeight()
      },300)
    },

    components: {
      Footer
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../../styles/common";
  @import "../../../styles/mixin";

  .cart {
    font-size: 28px;
  }
  .cart-list {
    width: 100%;

    .header {
      width: 100%;
      height: 80px;
      padding-right: 55px;
      text-align: right;
      line-height: 80px;
      border-bottom: 1px solid black;
      background-color: #fff;

    }

    .cartUl-box {
      background-color: #e5e5e5;
    }

    .cart-list-li {
      background-color: #fff;
      margin-bottom: 10px;
    }
    .goods-img,.select-icon,.goods-data {
      width: 100%;
      height: 220px;
    }
    .select-icon {
      @include defaultFlex;
    }
    .goods-img {
      padding: 20px 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .goods-data {
      padding: 40px 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .goods-num {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }
  }
  .btm-fill {
    width: 100%;
    height: 190px;
  }
  .btm-p {
    width: 100%;
    height: 95px;
    position: fixed;
    bottom: 95px;
    left: 0;
    z-index: 100;
    /*background-color: #000000;*/
  }
  .sel-all {
    height: 95px;
    line-height: 95px;
    /*text-align: right;*/
    text-align: center;
    span {
      margin-left: 5px;
    }
  }
  .total-price {
    width: 100%;
    height: 100%;
    text-align: right;
    line-height: 95px;
    padding-right: 10px;
  }
  .action-btn {
    width: 100%;
    height: 95px;
    text-align: center;
    line-height: 95px;
    border-radius: 30px;
    background-color: $btnColor;

  }
</style>

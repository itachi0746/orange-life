<template>
  <div class="myOrder">
    <div class="header">
      <van-row>
        <van-col span="8">
          <div class="h-item">
            <van-icon name="orders-o" />
            <span>全部</span>
          </div>
        </van-col>
        <van-col span="8">
          <div class="h-item">
            <van-icon name="pending-payment" />
            <span>待付款</span>
          </div>
        </van-col>
        <van-col span="8">
          <div class="h-item">
            <van-icon name="shopping-cart" />
            <span>已完成</span>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="o-list">
      <ul>
        <li>
          <div class="line1">
            <div class="img-box">

            </div>
            <div class="data-box">
              <span>产品名字产品名字产品名字产品名字</span>
            </div>
          </div>
          <div class="line2">
            <span>共1件商品</span>
            <span>现金付款: </span>
            <span>￥30.00</span>
          </div>
          <div class="line3">
            <van-row>
              <van-col span="11">
                <div class="line3-item-l">
                  <Countdown></Countdown>
                  <!--<span>剩余时间</span>-->
                  <!--<span class="time">-->
                    <!--<i>23</i>-->
                    <!--<b>:</b>-->
                    <!--<i>59</i>-->
                    <!--<b>:</b>-->
                    <!--<i>59</i>-->
                  <!--</span>-->
                </div>
              </van-col>
              <van-col span="13">
                <div class="line3-item-r">
                  <van-row>
                    <van-col span="11">
                      <van-button size="large" class="del">取消订单</van-button>
                    </van-col>
                    <van-col span="11" offset="2">
                      <van-button class="toPay" size="large" type="warning">确认付款</van-button>
                    </van-col>
                  </van-row>

                </div>
              </van-col>
            </van-row>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Countdown from '../../../components/Countdown.vue';
  import { myModule } from '../../../common'

  export default {
    name: 'MyOrder',
    data () {
      return {

      }
    },
    components: {
      Countdown
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /*@import "../../../styles/common";*/
  @import "../../../styles/mixin";

  .myOrder {
    font-size: 28px;
  }
  i {
    font-style: normal;
  }
  .header {
    padding: 20px 0 20px 0;
  }
  .h-item {
    height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .van-icon {
      font-size: 40px;
    }
  }

  .o-list {
    /*padding-top: 15px;*/
    background-color: #e5e5e5;

    ul {
      position: relative;
      top: 15px;
      padding-bottom: 15px;
    }

    li {
      margin-bottom: 15px;
      background-color: #fff;
      padding: 25px 40px;
    }
    .line1 {
      display: flex;
    }
    .line2 {
      text-align: right;
      padding: 10px 0;

      span:nth-child(1) {
        font-size: 25px;
        color: #a7a7a7;
      }
      span:nth-child(2) {
        font-size: 25px;
        color: #a7a7a7;
      }
    }
    .line3 {
      padding: 10px 0;
    }
    .line3-item-l {
      height: 70px;
      @include defaultFlex;

      /*.time {*/
        /*display: flex;*/
      /*}*/
      /*b {*/
        /*margin: 0 5px;*/
      /*}*/
      /*i {*/
        /*padding: 5px;*/
        /*background-color: #666;*/
        /*color: #ffffff;*/
      /*}*/

      /*span:nth-child(1) {*/
        /*margin-right: 10px;*/
        /*overflow: hidden;*/
      /*}*/
    }
    .line3-item-r {
      height: 70px;
      line-height: 70px;

      .van-button {
        font-size: 28px;
        /*border: 1px solid #a7a7a7;*/
      }
      .del {
        border-color: #979797;
      }
      .toPay {
        /*background-color: #fff;*/
        /*color: #ff976a;*/
      }
    }

    .img-box {
      width: 175px;
      height: 175px;
      background-color: #000000;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .data-box {
      flex: 1;
      padding: 20px 25px;

    }
  }
</style>

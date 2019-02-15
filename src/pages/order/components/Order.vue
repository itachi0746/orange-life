<template>
  <div class="order">
    <header>
      <div class="line line1">
        <van-row>
          <van-col span="5">
            <span class="line-key">订单编号</span>
          </van-col>
          <van-col span="15">
            <span class="o-num">2020222222222222202022222222222222</span>
          </van-col>
          <van-col span="4">
            <span class="o-state">待付款</span>
          </van-col>
        </van-row>

      </div>
      <div class="line line2">
        <van-row>
          <van-col span="5">
            <span class="line-key">下单时间</span>
          </van-col>
          <van-col span="15">
            <span class="o-num">202022222</span>
          </van-col>
        </van-row>

      </div>
      <div class="line line2">
        <van-row>
          <van-col span="5">
            <span class="line-key">成交时间</span>
          </van-col>
          <van-col span="15">
            <span class="o-num">202022222</span>
          </van-col>
        </van-row>

      </div>
    </header>
    <div class="fillter"></div>

    <div class="mid the-data" v-if="complete">
      <van-row>
        <van-col span="12">
          <span>卡号: </span>
          <span>666666</span>
        </van-col>
        <van-col span="12">
          <span>密码: </span>
          <span>666666</span>

        </van-col>
      </van-row>

      <van-row>
        <van-col span="18">
          <div class="msg-data">
            <span>卡密已发送到手机号: 12223333333</span>
          </div>
        </van-col>
        <van-col span="6">
          <div class="msg-btn">
            重发短信
          </div>
        </van-col>
      </van-row>

    </div>
    <div class="mid tel" v-else>
      充值手机号: 1234589980
    </div>
    <div class="fillter"></div>
    <div class="goods-data-box">
      <div class="img-box">

      </div>
      <div class="data-box">
        <div class="the-name">商品名字</div>
        <div class="the-price">
          ￥50.00
        </div>
      </div>
    </div>
    <div class="fillter"></div>
    <div class="btm-data">
      <span>实付款</span>
      <span>￥50.00</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Order',
    data () {
      return {
        complete: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../../styles/common";
  @import "../../../styles/mixin";

  .order {
    font-size: 28px;
  }
  .fillter {
    width: 100%;
    height: 15px;
    background-color: #e5e5e5;
  }

  header {
    padding: 18px 25px 0px 25px;
    /*margin-bottom: 15px;*/
  }
  .tel {
    /*padding: 25px;*/

  }
  .mid {
    padding: 25px;

  }
  .msg-data {
    width: 100%;
    height: 85px;
    line-height: 85px;
    margin-top: 20px;

  }
  .msg-btn {
    width: 100%;
    height: 85px;
    line-height: 85px;
    text-align: center;
    color: #ffffff;
    background-color: $btnColor;
    border-radius: 20px;
    margin-top: 20px;
  }
  .goods-data-box {
    padding: 25px;
    display: flex;

    .img-box {
      width: 180px;
      height: 180px;
      background-color: #000000;
    }
    .data-box {
      padding: 20px 30px;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
    }
    .the-price {
      text-align: right;
    }
  }
  .btm-data {
    display: flex;
    justify-content: space-between;
    padding: 35px 25px;
  }
  .line {
    margin-bottom: 20px;
  }
  .line-key {
    color: #959595;
  }
  .line1 {
    .o-num {
      word-wrap:break-word;
    }
    .o-state {
      width: 100%;
      display: inline-block;
      color: #de9b79;
      text-align: right;
    }
  }
</style>

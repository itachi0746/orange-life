<template>
  <div class="detail">
    <div class="header">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="good-data">
      <div class="good-price">
        <div class="left-p">
          ￥100
        </div>
        <div class="right-p">
          市场价: 100
        </div>
      </div>
      <div class="good-name">
        【电子券】名字111
      </div>
    </div>
    <div class="interval"></div>
    <div class="good-tab">
      <section>图文详情</section>
      <section>宝贝评价</section>
    </div>


    <van-goods-action>
      <van-goods-action-mini-btn
        icon="chat-o"
        text="客服"
        @click="onClickMiniBtn"
      />
      <van-goods-action-mini-btn
        icon="cart-o"
        text="购物车"
        @click="onClickMiniBtn"
      />
      <van-goods-action-big-btn
        text="加入购物车"
        @click="onClickBigBtn"
      />
      <van-goods-action-big-btn
        primary
        text="立即购买"
        @click="onClickBigBtn"
      />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../../styles/common";
  @import "../../../styles/mixin";

  .detail {
    font-size: 28px;
  }
  .header {
    height: 660px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .good-data {
    /*height: 100px;*/
  }
  .interval {
    height: 15px;
    background-color: #f5f5f5;
  }
  .good-tab {
    display: flex;

    section {
      flex: 1;
      height: 85px;
      line-height: 85px;
      text-align: center;
    }
  }
  .good-price {
    height: 100px;
    display: flex;

    .left-p {
      flex: 3;
      font-weight:bold;
      color: #f4456c;
      @include defaultFlex;
      font-size: 50px;
    }
    .right-p {
      flex: 7;
      font-size: 25px;
      display: flex;
      align-items: center;
    }
  }
  .good-name {
    padding: 0 10px;
    height: 80px;
    line-height: 80px;

  }
  .van-goods-action {

    * {
      font-size: 28px;
    }
    i {
      font-size: 28px!important;
    }
  }
  .van-goods-action>div,.van-goods-action>button {
    height: 80px;
  }

</style>

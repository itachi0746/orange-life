<template>
  <div class="placeOrder">
    <div class="header" ref="header">
      <van-row>
        <van-col span="4">
          <div class="font">
            手机号:
          </div>
        </van-col>
        <van-col span="20">
          <div class="the-tel-box">
            <input type="number" class="the-tel" placeholder="请输入大陆手机号码">
          </div>
        </van-col>
      </van-row>

    </div>
    <div class="order-list-box scroll-y" ref="orderListBox">
      <ul>
        <li>
          <van-row>
            <van-col span="10">
              <div class="img-box"></div>
            </van-col>
            <van-col span="14">
              <div class="goods-data-box">
                <div class="the-name">
                  产品名称产品名称产品名称产品名称产品名称产品名
                </div>
                <div class="the-num">
                  数量:×1
                </div>
              </div>
            </van-col>
          </van-row>

        </li>
        <li>
          <van-row>
            <van-col span="10">
              <div class="img-box"></div>
            </van-col>
            <van-col span="14">
              <div class="goods-data-box">
                <div class="the-name">
                  产品名称产品名称产品名称产品名称产品名称产品名
                </div>
                <div class="the-num">
                  数量:×1
                </div>
              </div>
            </van-col>
          </van-row>

        </li>
      </ul>
    </div>
    <van-submit-bar ref="footer" id="van-submit-bar"
                    :loading="submit"
      :price="3050"
      button-text="提交订单"
      @submit="clickSubmit"
    />
    <!--<footer ref="footer">-->
      <!--<van-row>-->
        <!--<van-col span="10">-->
          <!--<div class="total-price">-->
            <!--合计: <span>90.00</span>元-->
          <!--</div>-->
        <!--</van-col>-->
        <!--<van-col span="14">-->
          <!--<div class="sub-btn-box">-->
            <!--<div class="sub-btn">-->
              <!--提交订单-->
            <!--</div>-->
          <!--</div>-->
        <!--</van-col>-->
      <!--</van-row>-->
    <!--</footer>-->
  </div>
</template>

<script>
  export default {
    name: 'PlaceOrder',
    data () {
      return {
        submit: false
      }
    },
    mounted() {
      setTimeout(()=> {
        this.setBoxHeight()
      },300)
    },
    methods: {
      setBoxHeight() {
        let headerH = this.$refs.header.offsetHeight;
        let footerH = document.getElementById('van-submit-bar').offsetHeight;
        let theH = myModule.getClientHeight();
        this.$refs.orderListBox.style.height = theH - headerH - footerH + 'px';
      },
      clickSubmit() {
        this.submit = true;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /*@import "../../../styles/common";*/
  @import "../../../styles/mixin";

  .placeOrder {
    font-size: 28px;
    /*padding: 0 20px;*/
  }
  .header {
    /*height: 90px;*/
    width: 100%;
    padding: 0 20px;

  }
  .font {
    height: 90px;
    width: 100%;
    @include defaultFlex;
  }

  .the-tel-box {
    height: 90px;
    width: 100%;
    @include defaultFlex;
  }
  .the-tel {
    height: 55px;
    width: 90%;
    border: 1px solid black;
    border-radius: 5px;
    padding-left: 10px;
  }
  footer {
    /*height: 87px;*/
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1000;
    padding: 0 20px;

  }
  .total-price {
    height: 88px;
    line-height: 88px;
    color: $priceColor;
  }
  .sub-btn-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .sub-btn {
    color: #ffffff;
    width: 300px;
    height: 88px;
    background-color: #f4456c;
    border-radius: 30px;
    @include defaultFlex;
  }
  .order-list-box {
    width: 100%;
    padding: 0 20px;
    background-color: #f8f8f8;

    li {
      margin-bottom: 20px;
      background-color: #fff;

      .img-box {
        width: 100%;
        height: 290px;
        background-color: #000000;
      }
      .goods-data-box {
        width: 100%;
        height: 290px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 20px 0 45px 20px;
      }
      .the-name {
        width: 100%;
      }
      .the-num {
        text-align: right;
      }

    }
  }

</style>

<template>
  <div class="detail">
    <div class="header">
      <img src="../assets/goods.jpg" alt="">
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
        @click=""
      />
      <van-goods-action-mini-btn
        icon="cart-o"
        text=""
        @click=""
      />
      <van-goods-action-big-btn
        text="加入购物车"
        @click="clickAddCart"
      />
      <van-goods-action-big-btn
        primary
        text="立即购买"
        @click=""
      />
    </van-goods-action>

    <van-sku
      ref="sku"
      v-model="showBase"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :hide-stock="sku.hide_stock"
      :reset-stepper-on-hide="resetStepperOnHide"
      :reset-selected-sku-on-hide="resetSelectedSkuOnHide"
      :close-on-click-overlay="closeOnClickOverlay"
      :disable-stepper-input="disableStepperInput"
      @buy-clicked=""
      @add-cart=""
    />
  </div>
</template>

<script>
  import { myModule } from '../../../common'

  export default {
  name: 'Detail',
  data () {
    return {
      showBase: false,
      goodsId: '946755',
      disableStepperInput: true,
      closeOnClickOverlay: true,
      resetSelectedSkuOnHide: false,
      resetStepperOnHide: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '分类', // skuK
            // eyName：规格类目名称
            v: [
              {
                id: '30349', // skuValueId：规格值 id
                name: '50元代金券', // skuValueName：规格值名称
                imgUrl: 'https://img.yzcdn.cn' // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: '1215',
                name: '150元代金券',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2258, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '30349', // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 210 // 当前 sku 组合对应的库存
          },
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
//        messages: [
//          {
//            // 商品留言
//            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
//            multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
//            name: '留言', // 留言名称
//            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
//            required: '1' // 是否必填 '1' 表示必填
//          }
//        ],
        hide_stock: true // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: '测试商品',
        // 默认商品 sku 缩略图
        picture: 'https://img.yzcdn.cn/1.jpg'
      },
      messageConfig: {

      },
      skuData: {
        // 商品 id
        goodsId: '946755',
        // 留言信息
        messages: {
          message_0: '12',
          message_1: ''
        },
        // 另一种格式的留言，key 不同
        cartMessages: {
          '留言1': 'xxxx'
        },
        // 选择的商品数量
        selectedNum: 1,
        // 选择的 sku 组合
        selectedSkuComb: {
//          id: 2257,
//          price: 100,
//          s1: '30349',
//          s2: '1193',
//          s3: '0',
//          stock_num: 111
        }
      }
    }
  },
  methods: {
    clickAddCart() {
      this.showBase = true;
    }
  },
  mounted() {
    console.log(this.$refs.sku.getSkuData())
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /*@import "../../../styles/common";*/
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
      font-size: 30px;
    }

  }
  .van-goods-action>div,.van-goods-action>button {
    height: 84px;
  }
  .van-button--warning,.van-button--danger {
    background-color: $btnColor;
    border-radius: 30px;
  }


</style>

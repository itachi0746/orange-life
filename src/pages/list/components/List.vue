<template>
  <div class="list">
    <div class="banner">
      <!--<img src="../assets/logo.png" alt="">-->
    </div>

    <div class="goods-list">
      <ul>
        <li @click="clickList">
          <div class="img-box"></div>
          <div class="goods-name">移动话费200</div>
          <div class="goods-price">￥200.00</div>
        </li>
        <li>
          <div class="img-box"></div>
          <div class="goods-name">移动话费200</div>
          <div class="goods-price">￥200.00</div>

        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data () {
      return {
      }
    },
    methods: {
      clickList() {
        myModule.goToPage('','detail.html',{})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /*@import "../../../styles/common";*/
  @import "../../../styles/mixin";

  .list {
    font-size: 28px;
  }
  .banner {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    background-color: #000000;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .goods-list-box {

  }
  .goods-list {
    width: 100%;
    padding: 0 40px;


    ul {
      overflow: hidden;

      li {
        width: 300px;
        min-height: 366px;
        margin-bottom: 40px;
      }
      .img-box {
        width: 100%;
        height: 300px;
        background-color: #000000;
      }

      li:nth-child(2n+1) {
        /*margin-right: 54px;*/
        float: left;

      }
      li:nth-child(2n) {
        float: right;
      }
    }

    .goods-name {

    }
    .goods-price {
      color: $priceColor;
    }
  }
</style>

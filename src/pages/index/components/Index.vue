<template>
  <div class="index">
    <header>
      <van-row>
        <van-col span="6">
          <div class="header-name">生活服务</div>
        </van-col>
        <van-col span="18">
          <div class="input-box" @click="clickSearch">
            <van-icon name="search" class="search-icon" />
            <input type="text" placeholder="输入关键字, 发现你所想" readonly>
          </div>
        </van-col>
      </van-row>
    </header>
    <div class="banner">
      <van-swipe :autoplay="5000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>

      </van-swipe>
    </div>
    <div class="special-area">
      <div class="s-header" @click="clickHF">
        <span>话费专区</span>
        <van-icon name="arrow" />
      </div>
      <div class="s-main">
        <div class="s-item" @click="clickItem">
          <div class="s-item-img"></div>
          <div class="s-item-name">
            移动话费200元
          </div>
        </div>
      </div>
    </div>
    <div class="btm-fill"></div>
    <Footer></Footer>
    <Loading v-if="loading"></Loading>
  </div>
</template>

<script>
  import Footer from '../../../components/Footer';
  import Loading from '../../../components/Loading';
  import { myModule } from '../../../common'

  export default {
    name: 'Index',
    data () {
      return {
        msg: 'Welcome to Index2222',
        value: '',
        isSearch: false,
        loading: false
      }
    },
    methods: {
      clickSearch() {
//        console.log('12');
        this.$router.push({name: 'Search', params: {}})
      },
      clickHF() {
//        this.loading = true;
        myModule.goToPage('','list.html',{})
      },
      clickItem() {
//        this.loading = true;
        myModule.goToPage('','detail.html',{})

      }
    },
    mounted() {
    },

    components: {
      Footer,Loading
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../../../styles/mixin";

  .index {
    font-size: 28px;
  }
  header {
    height: 90px;
    width: 100%;
    padding: 13px 0;
    font-size: 28px;

    .header-name {
      width: 100%;
      /*height: 100%;*/
      height: 62px;
      @include defaultFlex
    }
    .input-box {
      width: 540px;
      /*height: 100%;*/
      height: 62px;
      border-radius: 5px;
      background-color: #ededed;
      padding: 14px 0 14px 76px;
      color: #979797;
      display: flex;
      align-items: center;
      i {
        font-size: 40px;
      }
      input {
        width: 400px;
        background-color: #ededed;

      }

    }
    .search-icon {
      color: #979797;
    }

  }

  .btm-fill {
    height: 97px;
    width: 100%;
  }
  .banner {
    height: 290px;
    width: 100%;
    margin-bottom: 48px;

    .van-swipe {
      height: 100%;
    }
    .van-swipe-item {
      background-color: #0000ff;
    }
  }
  .special-area {
    padding: 20px 0;
    margin-bottom: 25px;
    .s-header {
      @include defaultFlex;
      padding: 0 50px;
      i {

      }
    }
    .s-main {
      padding: 20px 0px;
      margin: 20px 20px 0 20px;
      border-top: 1px solid black;
      @include fj();
      .s-item {
        width: 200px;
        height: 250px;
        /*background-color: blue;*/
      }
      .s-item-img {
        width: 100%;
        height: 200px;
        background-color: #000000;
      }
      .s-item-name {
        @include defaultFlex
      }
    }
    span {
      font-size: 35px;
      font-weight:bold;
    }
  }

</style>

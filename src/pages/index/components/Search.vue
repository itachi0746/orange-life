<template>
  <!--  开始-->
  <div class="search">
    <div class="myContainer" ref="myContainer">
      <!--<div class="input-box" @click="">-->
        <!--<van-icon name="search" class="search-icon" />-->
        <!--&lt;!&ndash;<input type="text" placeholder="搜索">&ndash;&gt;-->
        <!--<span>搜索</span>-->
      <!--</div>-->
      <div class="input-box2" @click="">
        <van-icon name="arrow-left" class="arrow-left" @click="backToIndex" />
        <input type="text" placeholder="请输入搜索内容" ref="input">
        <span>搜索</span>
      </div>
      <div class="hot-search dn">
        <div class="header">
          热门搜索
        </div>
        <ul class="hot-search-list">
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
        </ul>
      </div>
    </div>

    <div class="result-list" ref="resultList">
      <!--<ul>-->
        <!--<li>-->
          <!--<div class="left-p">-->
            <!--<div class="header">-->
              <!--1-->
            <!--</div>-->
            <!--<div class="body">-->
              <!--2-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="right-p">-->
            <!--<div class="header">-->
              <!--哈根达斯-->
            <!--</div>-->
            <!--<div class="body">-->
              <!--2-->
            <!--</div>-->
            <!---->
          <!--</div>-->
        <!--</li>-->
      <!--</ul>-->
      <van-card
        price="2.00"
        desc=""
        title="商品标题"
        :thumb="imageURL"
      />
      <van-card
        price="2.00"
        desc=""
        title="商品标题"
        :thumb="imageURL"
      />
    </div>
  </div>
  <!--  结束-->
</template>

<script>

export default {
  data() {
    return {
      imageURL: '../assets/logo.png'
    }
  },

  components: {},

  computed: {},

  methods: {
    backToIndex() {
      this.$router.push({name: 'Index', params: {}})

    },
    /**
     * 设置搜索结果容器高度
     */
    setResultListH() {
      let wh = myModule.getClientHeight();
      let inputH = this.$refs.myContainer.clientHeight;
      let theH = wh - inputH;
      this.$refs.resultList.style.height = theH + 'px';
    }

  },

  created() {},

  mounted() {
    this.$refs.input.focus();
    this.setResultListH()
  },


  beforeDestroy() {}
}
</script>

<style lang='scss' scoped>
  /*@import "../../../styles/common";*/
  @import "../../../styles/mixin";

  .search {
    /*padding: 0rem 0.5rem;*/
    height: 100%;

  }
  .myContainer {
    padding: 0.35rem 0.5rem;
    font-size: 28px;
    height: 100%;
  }
  .input-box2 {
    height: 62px;
    border-radius: 5px;
    /*background-color: $bc;*/
    /*padding: 14px 0 14px 76px;*/
    color: #979797;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow-left {
      font-size: 40px;
    }

    input {
      background-color: $bc;
      width: 84%;
      /*text-align: center;*/
      height: 100%;
      line-height: 62px;
      padding-left: 20px;
      border-radius: 30px;
    }
    span {
      color: red;
    }
  }
  .hot-search {
    margin-top: 40px;
    padding-left: 20px;

    .hot-search-list {
      margin-top: 30px;

      li {
        margin-right: 40px;
        float: left;
      }
    }
  }
  .result-list {
    background-color: $bc;
    height: 100%;
    padding: 0.35rem 0.5rem;
    font-size: 26px;

    li {
      display: flex;
      padding-top: 20px;

      .header {
        height: 38px;
      }
      .body {
        height: 85px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .left-p {
      flex: 2;

    }
    .right-p {
      flex: 8;
    }
  }
  .input-box {
    /*width: 540px;*/
    /*height: 100%;*/
    height: 62px;
    border-radius: 5px;
    background-color: $bc;
    /*padding: 14px 0 14px 76px;*/
    color: #979797;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 40px;
    }

    span {
      color: #979797;

    }

  }
  .search-icon {
    color: #979797;
  }
  .van-card {
    margin-bottom: 20px;
    font-size: .5rem;
  }
  .van-card__title {
    max-height: 1.5rem;
    line-height: 1.5rem;
  }

</style>

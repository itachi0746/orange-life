<template>
  <!--  开始-->
  <div class="countdown">
    <span>剩余时间</span>
    <span class="time">
      <i>23</i>
      <b>:</b>
      <i>59</i>
      <b>:</b>
      <i>59</i>
    </span>
  </div>
  <!--  结束-->
</template>

<script>

  export default {
    data () {
      return {

      }
    },

    components: {},

    computed: {

    },

    methods: {},

    created () {},

    mounted () {},

    beforeDestroy () {}
  }
</script>

<style lang='scss' scoped>
  @import "../styles/mixin";

  i {
    font-style: normal;
  }
  .countdown {
    width: 100%;
    height: 100%;
    @include defaultFlex;

    .time {
      display: flex;
    }
    b {
      margin: 0 5px;
    }
    i {
      padding: 5px;
      background-color: #666;
      color: #ffffff;
    }

    span:nth-child(1) {
      margin-right: 10px;
      overflow: hidden;
    }
  }
</style>

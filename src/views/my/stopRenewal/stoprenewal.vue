<template>
  <div class="stoprenewal">
    <div class="stop-wrap">
      <p>选择险种</p>
      <div class="stop-choose">
        <van-checkbox v-model="checked" checked-color="#E02D47"></van-checkbox>
        <p>中银三星中银汇鑫宝年金保险（万能型）</p>
      </div>
      <div class="stop-choose">
        <van-checkbox v-model="checked" checked-color="#E02D47"></van-checkbox>
        <p>中银三星中银汇鑫宝年金保险（万能型）</p>
      </div>
    </div>
    <div class="foot-btn">
      <p class="page-single-btn">下一步</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "stoprenewal",
  components: {},
  data() {
    return {
      checked: false,
    };
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.stoprenewal {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  padding-bottom: 230px;

  .foot-btn {
    position: fixed;
    bottom: 60px;
    left: 0;
    right: 0;
  }
  .stop-wrap {
    background: white;
    padding-left: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
    .stop-choose:last-child {
      margin-bottom: 0;
    }
    .stop-choose {
      display: flex;
      align-items: center;
      //   height: 80px;
      margin-bottom: 30px;
      // vant checkbox
      .van-checkbox {
        width: 40px;
        height: 40px;
        margin-right: 40px;
        /deep/.van-checkbox__icon,
        /deep/.van-icon {
          width: 40px;
          height: 40px;
          font-size: 32px;
          text-align: center;
          line-height: 42px;
        }
      }
    }
    & > p:nth-of-type(1) {
      color: #f56200;
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 30px;
    }
  }
}
</style>
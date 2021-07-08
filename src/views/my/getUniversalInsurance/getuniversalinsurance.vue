<template>
  <div class="getuniversalinsurance">
    <div class="tab-wrap">
      <div class="tab-item">
        <p class="title">目前账户价值</p>
        <p class="red">12412.64元</p>
      </div>
      <div class="tab-item">
        <p class="title">申请领取金额</p>
        <input v-model="money" placeholder="请输入金额" type="text" />
      </div>
    </div>
    <div class="choose-account">
      <p class="choose-title">退费账号选择</p>
      <div class="choose-item">
        <div>
          <img src="@/assets/images/my/banner.png" alt="" />
          <p>中国银行 章三（8866）</p>
        </div>
        <van-checkbox v-model="checked" checked-color="#E02D47"></van-checkbox>
      </div>

      <div class="choose-item">
        <div>
          <img src="@/assets/images/my/banner.png" alt="" />
          <p>中国银行 章三（8866）</p>
        </div>
        <van-checkbox color="#E02D47"></van-checkbox>
      </div>
    </div>
    <div class="next-step">
      <p class="page-single-btn">下一步</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "getuniversalinsurance",
  components: {},
  data() {
    return {
      checked: false,
      money: "",
    };
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.getuniversalinsurance {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  font-size: 28px;
  padding-bottom: 140px;
  .next-step {
    position: fixed;
    bottom: 60px;
    left: 0;
    right: 0;
  }
  .choose-account {
    background: white;
    padding-left: 30px;
    .choose-title {
      font-size: 32px;
      height: 104px;
      line-height: 104px;
    }
    .choose-item:last-child {
      border-bottom: none;
    }
    .choose-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 140px;
      border-bottom: 1px solid #d8d8d8;

      div {
        display: flex;
        align-items: center;
      }
      img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        margin-right: 30px;
      }
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
  }
}
</style>
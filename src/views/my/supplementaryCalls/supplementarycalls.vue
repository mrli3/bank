<template>
  <div class="supplementarycalls">
    <div class="supplement-item">
      <div class="supplement-amount">
        <p class="title">追加保费金额</p>
        <input v-model="money" type="number" placeholder="请输入" />
      </div>
    </div>
    <div class="choose-account">
      <p class="choose-title">收费账号选择</p>
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
  </div>
</template>

<script>
export default {
  name: "supplementarycalls",
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
.supplementarycalls {
  padding-top: 16px;
  background: #f4f4f4;
  height: 100%;
  box-sizing: border-box;
  .supplement-item {
    padding-left: 40px;
    padding-right: 40px;
    background: white;
    margin-bottom: 16px;
    & > div:nth-last-of-type(1) {
      display: flex;
      align-items: center;
      font-size: 28px;
    }
    .supplement-amount {
      padding: 30px 0;
    }
  }
  .choose-account {
    background: white;
    padding-left: 30px;
    font-size: 28px;
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
<template>
  <div class="policyborrowing">
    <div class="policyborrowing-wrap">
      <div class="policyborrowing-info">
        <div class="policyborrowing-item">
          <p class="title">借款限额</p>
          <p>1688888.00</p>
        </div>
        <div class="policyborrowing-item">
          <p class="title">借款利息</p>
          <p>5.00%</p>
        </div>
        <div class="policyborrowing-item">
          <p class="title">借款期限</p>
          <p>6个月</p>
        </div>
      </div>
      <div class="policyborrowing-money">
        <p class="title">借款金额</p>
        <input type="text" placeholder="请输入金额" />
      </div>
      <div class="policy-read">
        <van-checkbox v-model="checked"></van-checkbox>
        <p>请点击阅读<span>借款协议书</span></p>
      </div>
      <div class="choose-account">
        <p class="choose-title">退费账号选择</p>
        <div class="choose-item">
          <div>
            <img src="@/assets/images/my/banner.png" alt="" />
            <p>中国银行 章三（8866）</p>
          </div>
          <van-checkbox checked-color="#E02D47"></van-checkbox>
        </div>
        <div class="choose-item">
          <div>
            <img src="@/assets/images/my/banner.png" alt="" />
            <p>中国银行 章三（8866）</p>
          </div>
          <van-checkbox checked-color="#E02D47"></van-checkbox>
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
    <div class="next-step">
      <p class="page-single-btn">下一步</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "policyborrowing",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.policyborrowing {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  .policyborrowing-info {
    background: white;
    padding: 32px 40px;
    margin-bottom: 16px;
    .policyborrowing-item:last-child {
      margin: 0;
    }
    .policyborrowing-item {
      display: flex;
      margin-bottom: 30px;
    }
  }
  .policyborrowing-money {
    padding: 32px 40px;
    background: white;
    display: flex;
  }
  .policy-read {
    display: flex;
    padding: 32px 40px;
    align-items: center;
    font-size: 24px;
    p {
      color: #999;
      span {
        color: #2d70ed;
      }
    }
    .van-checkbox {
      margin-right: 20px;
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
      font-weight: 500;
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
  .policyborrowing-wrap {
    flex: 1;
    overflow-y: scroll;
  }
  .next-step {
    padding-bottom: 60px;
  }
}
</style>
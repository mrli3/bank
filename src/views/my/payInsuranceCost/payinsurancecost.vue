<template>
  <div class="payinsurancecost">
    <div class="payinsurance-wrap">
      <div class="payinsurance-form">
        <div class="payinsurance-item">
          <p>险种</p>
          <p>中国汇鑫宝年金保险（万能型）</p>
        </div>
        <div class="payinsurance-item">
          <p>投保人姓名</p>
          <p>张三</p>
        </div>
        <div class="payinsurance-item">
          <p>下次保费应交日</p>
          <p>2020.01.02</p>
        </div>
        <div class="payinsurance-item">
          <p>期交保费</p>
          <p>20000</p>
        </div>
        <div class="payinsurance-item">
          <p>欠交保费共计期数</p>
          <p>3</p>
        </div>
        <div class="payinsurance-item">
          <p>险种</p>
          <input type="text" />
        </div>
      </div>
      <div class="choose-account">
        <p class="choose-title">收费账号选择</p>
        <div class="choose-item">
          <div>
            <img src="@/assets/images/my/banner.png" alt="" />
            <p>中国银行 章三（8866）</p>
          </div>
          <van-checkbox
            v-model="checked"
            checked-color="#E02D47"
          ></van-checkbox>
        </div>
        <div class="choose-item">
          <div>
            <img src="@/assets/images/my/banner.png" alt="" />
            <p>中国银行 章三（8866）</p>
          </div>
          <van-checkbox
            v-model="checked"
            checked-color="#E02D47"
          ></van-checkbox>
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
  name: "payinsurancecost",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.payinsurancecost {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  .payinsurance-wrap {
    flex: 1;
    overflow-y: scroll;
  }
  .next-step {
    padding-bottom: 60px;
  }
  .choose-account {
    background: white;
    padding-left: 30px;
    font-size: 28px;
    margin-top: 16px;
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
  .payinsurance-form {
    background: white;
    padding-left: 40px;
    .payinsurance-item:last-child {
      border: none;
    }
    .payinsurance-item {
      border-bottom: 1px solid #d5d5d5;
      height: 104px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p:nth-of-type(2) {
        margin-right: 40px;
        color: #999;
      }
      input {
        margin-right: 40px;
        text-align: right;
      }
    }
  }
}
</style>
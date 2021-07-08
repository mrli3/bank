<template>
  <div class="shortstoprenewal">
    <div class="shortstoprenewal-wrap">
      <div class="shortstoprenewal-item">
        <div class="shortstoprenewal-con">
          <p class="title">批单号</p>
          <p>860000220040501427</p>
        </div>
        <div class="shortstoprenewal-con">
          <p class="title">当前借款金额</p>
          <p>1000</p>
        </div>
        <div class="shortstoprenewal-con">
          <p class="title">借款利息</p>
          <p>0.3</p>
        </div>
        <div class="shortstoprenewal-con">
          <p class="title">最迟还款日期</p>
          <p>2020.11.02</p>
        </div>
        <div class="shortstoprenewal-con">
          <p class="title">借款起息日期</p>
          <p>2020.11.02</p>
        </div>
        <div class="getbonus-top">
          <div class="getbonus-top-left">
            <p class="title">红利可领取金额</p>
            <p>226.763元</p>
          </div>
          <div class="getbonus-top-right">全部清偿</div>
        </div>
      </div>
      <div class="shortstoprenewal-item">
        <div class="shortstoprenewal-con">
          <p class="title">批单号</p>
          <p>860000220040501427</p>
        </div>
        <div class="shortstoprenewal-con">
          <p class="title">当前借款金额</p>
          <p>1000</p>
        </div>
        <div class="shortstoprenewal-con">
          <p class="title">借款利息</p>
          <p>0.3</p>
        </div>
        <div class="shortstoprenewal-con">
          <p class="title">最迟还款日期</p>
          <p>2020.11.02</p>
        </div>
        <div class="shortstoprenewal-con">
          <p class="title">借款起息日期</p>
          <p>2020.11.02</p>
        </div>
        <div class="getbonus-top">
          <div class="getbonus-top-left">
            <p class="title">本次应还款</p>
            <p>226.763元</p>
          </div>
          <div class="getbonus-top-right">全部清偿</div>
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
  name: "shortstoprenewal",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.shortstoprenewal {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  .shortstoprenewal-wrap {
    flex: 1;
    overflow-y: scroll;
    .shortstoprenewal-item {
      background: white;
      padding-top: 40px;
      padding-left: 40px;
      margin-bottom: 16px;
      .getbonus-top {
        padding-right: 40px;
        box-sizing: border-box;
        width: 100%;
        height: 104px;
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .getbonus-top-left {
          display: flex;
          align-items: center;
          p:last-child {
            color: #f56200;
          }
        }
        .getbonus-top-right {
          width: 160px;
          height: 56px;
          border: 1px solid #e02d47;
          color: #e02d47;
          text-align: center;
          line-height: 56px;
          border-radius: 30px;
        }
      }
      .shortstoprenewal-con:nth-of-type(5) {
        margin: 0;
        padding-bottom: 30px;
        border-bottom: 1px solid #d5d5d5;
      }
      .shortstoprenewal-con {
        display: flex;
        margin-bottom: 30px;
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
  }
  .next-step {
    padding-bottom: 60px;
  }
}
</style>
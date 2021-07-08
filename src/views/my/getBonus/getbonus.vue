<template>
  <div class="getbonus">
    <div class="getbonus-wrap">
      <div class="getbonus-top">
        <div class="getbonus-top-left">
          <p class="title">红利可领取金额</p>
          <p>226.763元</p>
        </div>
        <div class="getbonus-top-right">全部领取</div>
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
  name: "getbonus",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.getbonus {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  .next-step {
    position: fixed;
    bottom: 60px;
    left: 0;
    right: 0;
  }
  .getbonus-wrap {
    .getbonus-top {
      padding: 0 40px;
      box-sizing: border-box;
      width: 100%;
      height: 104px;
      background: white;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .getbonus-top-left {
        display: flex;
        align-items: center;
        p:last-child {
          color: #e02d47;
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
}
</style>
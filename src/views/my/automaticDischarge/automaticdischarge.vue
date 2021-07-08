<template>
  <div class="automaticdischarge">
    <div class="automaticdischarge-wrap">
      <div class="automaticdischarge-item">
        <div class="automaticdischarge-con">
          <p class="title">垫交日期</p>
          <p>2017.08.09</p>
        </div>
        <div class="automaticdischarge-con">
          <p class="title">垫交保费</p>
          <p>2017.08.09</p>
        </div>
        <div class="automaticdischarge-con">
          <p class="title">垫交利息</p>
          <p>2017.08.09</p>
        </div>
      </div>
      <div class="automaticdischarge-item">
        <div class="automaticdischarge-con">
          <p class="title">垫交本息和</p>
          <p>2017</p>
        </div>
        <div class="automaticdischarge-con">
          <p class="title">还款金额</p>
          <p>2017</p>
        </div>
        <div class="automaticdischarge-con">
          <p class="anounce">注：您需要一次性清偿所有的垫交保费和利息</p>
        </div>
      </div>
      <div class="choose-account">
        <p class="choose-title">交费账号选择</p>
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
  name: "automaticdischarge",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.automaticdischarge {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  .automaticdischarge-wrap {
    flex: 1;
    overflow-y: scroll;
    .automaticdischarge-item {
      padding: 40px;
      background: white;
      margin-bottom: 16px;
      .automaticdischarge-con:last-child {
        margin: 0;
      }
      .automaticdischarge-con {
        margin-bottom: 30px;
        display: flex;
        .anounce {
          color: #f56200;
        }
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
  .next-step {
    padding-bottom: 60px;
  }
}
</style>
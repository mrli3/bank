<template>
  <div class="reportsvalidation">
    <div class="reportsvalidation-wrap">
      <div class="claim-title"><p>请选择待申请的报案信息</p></div>
      <div class="claim-item">
        <div class="claim-con">
          <p class="title">报案号</p>
          <p>865465465</p>
          <van-checkbox checked-color="#E02D47"></van-checkbox>
        </div>
        <div class="claim-con">
          <p class="title">报案日期</p>
          <p>2015.15.21</p>
        </div>
        <div class="claim-con">
          <p class="title">出险人姓名</p>
          <p>张三</p>
        </div>
        <div class="claim-con">
          <p class="title">证件号码</p>
          <p>123165465465</p>
        </div>
        <div class="claim-con">
          <p class="title">出险原因</p>
          <p>意外</p>
        </div>
        <div class="claim-con">
          <p class="title">理赔类型</p>
          <p>意外，打算，阿松大，阿松大打算，阿松大</p>
        </div>
        <div class="claim-con">
          <p class="title">事故经过</p>
          <p>意外，打算，阿松大，阿松大打算，阿松大</p>
        </div>
      </div>
      <div class="claim-item">
        <div class="claim-con">
          <p class="title">报案号</p>
          <p>865465465</p>
          <van-checkbox checked-color="#E02D47"></van-checkbox>
        </div>
        <div class="claim-con">
          <p class="title">报案日期</p>
          <p>2015.15.21</p>
        </div>
        <div class="claim-con">
          <p class="title">出险人姓名</p>
          <p>张三</p>
        </div>
        <div class="claim-con">
          <p class="title">证件号码</p>
          <p>123165465465</p>
        </div>
        <div class="claim-con">
          <p class="title">出险原因</p>
          <p>意外</p>
        </div>
        <div class="claim-con">
          <p class="title">理赔类型</p>
          <p>意外，打算，阿松大，阿松大打算，阿松大</p>
        </div>
        <div class="claim-con">
          <p class="title">事故经过</p>
          <p>意外，打算，阿松大，阿松大打算，阿松大</p>
        </div>
      </div>
    </div>

    <div class="next-step">
      <p @click="$router.push('/accidentinfo')" class="page-single-btn">确定</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "reportsvalidation",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.reportsvalidation {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  padding-bottom: 178px;
  .reportsvalidation-wrap {
    flex: 1;
    overflow-y: scroll;
    .claim-item {
      padding: 30px 40px;
      background: white;
      margin-bottom: 16px;
      .claim-con:first-child {
        p:nth-of-type(2) {
          margin-right: 54px;
        }
        .van-checkbox {
          margin-right: 0;
        }
      }
      .claim-con {
        display: flex;
        margin-bottom: 30px;
        p:nth-of-type(2) {
          width: 334px;
        }
      }
    }
    .claim-title {
      font-size: 32px;
      height: 106px;
      line-height: 104px;
      background: white;
      padding-left: 40px;
      font-weight: 500;
      p {
        border-bottom: 1px solid #d5d5d5;
      }
    }
  }
  .next-step {
    position: fixed;
    bottom: 60px;
    left: 0;
    right: 0;
  }
}
</style>
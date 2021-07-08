<template>
  <div class="checkphone">
    <div class="tab-item">
      <p class="title">手机号码</p>
      <input placeholder="请输入" type="text" />
    </div>
    <div class="tab-item">
      <p class="title">验证码</p>
      <input maxlength="6" placeholder="请输入" type="text" />
      <div class="get-code">获取验证码</div>
    </div>
    <div class="next-step">
      <p class="page-single-btn">确定</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkphone",
  components: {},
  data() {
    return {
      sms: "",
    };
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.checkphone {
  background: #f4f4f4;
  height: 100%;
  .next-step {
    background: #f4f4f4;
    padding-top: 2px;
    padding-bottom: 30px;
  }
  .tab-item {
    width: 100%;
    height: 104px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
    position: relative;
    background: white;
    padding: 30px;
    box-sizing: border-box;
    position: relative;
    .get-code {
      position: absolute;
      width: 200px;
      font-size: 28px;
      text-align: center;
      background: #e02d47;
      color: white;
      right: 30px;
      height: 60px;
      line-height: 60px;
      border-radius: 45px;
    }
    .choose {
      width: 460px;
    }
    .right {
      text-align: right;
      padding-right: 30px;
    }
    .uni-color {
      color: #ccc;
    }
  }
}
</style>
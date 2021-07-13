<template>
  <div class="checkphone">
    <div class="tab-item">
      <p class="title">手机号码</p>
      <input
        maxlength="11"
        oninput="if(value.length>11)value=value.slice(0,11)"
        placeholder="请输入"
        type="number"
      />
    </div>
    <div class="tab-item">
      <p class="title">验证码</p>
      <input
        maxlength="6"
        oninput="if(value.length>6)value=value.slice(0,6)"
        placeholder="请输入"
        type="number"
      />
      <div class="get-code">获取验证码</div>
    </div>
    <div class="next-step">
      <p @click="confirmChange" class="page-single-btn">确定</p>
    </div>
  </div>
</template>

<script>
import { almightyLaterPaymentChange } from "@/api/myList";
export default {
  name: "checkphone",
  components: {},
  data() {
    return {
      sms: "",
    };
  },
  methods: {
    // 确定时判断变更的类型
    confirmChange() {
      let { type } = this.$route.query;
      switch (type) {
        case "万能险保费缓交变更":
          this.almightyLaterPaymentChange();
          break;
      }
    },
    // 万能险保费缓交变更
    almightyLaterPaymentChange() {
      let {
        contNo,
        edorAppName,
        edorAppPhone,
        newBHPayIntv,
      } = this.$route.query;
      almightyLaterPaymentChange({
        edorApp: {
          contNo: contNo,
          edorAppName: edorAppName,
          edorAppPhone: edorAppPhone,
        },
        newBHPayIntv: newBHPayIntv,
      }).then((res) => {
        console.log(res);
      });
    },
  },
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
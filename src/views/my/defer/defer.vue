<template>
  <div class="editbonus">
    <div class="changemode-wrap">
      <div class="changemode-item">
        <p class="title">原交费状态</p>
        <p class="uni-color">
          {{ policyMain && showModeArr[policyMain.BhPayIntv].name }}
        </p>
      </div>
      <div @click="showMode = true" class="changemode-item">
        <p class="title">变更后交费状态</p>
        <p class="arrow">
          <span v-if="product.mode">{{ product.mode }}</span>
          <span class="uni-color" v-if="!product.mode">请选择</span>
          <span>
            <van-icon name="arrow" />
          </span>
        </p>
      </div>
    </div>
    <div class="next-step">
      <p @click="nextStep" class="page-single-btn">下一步</p>
    </div>
    <!-- 方式 -->
    <van-popup position="bottom" v-model="showMode">
      <van-picker
        title="请选择"
        show-toolbar
        :columns="showModeArr"
        value-key="name"
        @confirm="chooseMode"
        @cancel="showMode = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { defer } from "@/assets/pickerData/pickerData";
import { getMyInsuranceMain } from "@/api/myList";

export default {
  name: "editbonus",
  components: {},
  data() {
    return {
      showModeArr: defer,
      policyMain: "",
      appnt: "",
      showMode: false,
      ContNo: "", // 保单号
      product: {
        mode: "",
      },
      productCode: {
        mode: "",
      },
    };
  },
  methods: {
    chooseMode(item) {
      this.product["mode"] = item.name;
      this.productCode["mode"] = item.code;
      this.showMode = false;
    },
    // 下一步
    nextStep() {
      if (this.productCode["mode"]) {
        this.$router.push({
          path: "/checkMobile",
          query: {
            newBHPayIntv: this.productCode["mode"],
            contNo: this.ContNo,
            edorAppName: this.appnt.AppntName,
            edorAppPhone: this.appnt.Mobile,
            type: "万能险保费缓交变更",
          },
        });
      } else {
        this.$toast("请选择变更后交费状态");
      }
    },
    // 获取保单详情
    getMainPolicy() {
      getMyInsuranceMain({ contNo: this.ContNo }).then((res) => {
        this.policyMain =
          res.CALL_RESPONSE.RESPONSE_BODY.TranData.RetData.Policy;
        this.appnt = res.CALL_RESPONSE.RESPONSE_BODY.TranData.RetData.Appnt;
      });
    },
  },
  created() {
    this.ContNo = this.$route.query.contNo;
    this.getMainPolicy();
  },
};
</script>
<style scoped lang='less'>
.editbonus {
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
  .changemode-wrap {
    background: white;
    padding-left: 40px;
    .changemode-item:last-child {
      border: none;
    }
    .changemode-item {
      padding-right: 40px;
      height: 104px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #d5d5d5;
      .uni-color {
        color: #999;
      }
      .arrow {
        display: flex;
        align-items: center;
        .van-icon {
          font-size: 32px;
          margin-top: 10px;
        }
        span:nth-of-type(1) {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
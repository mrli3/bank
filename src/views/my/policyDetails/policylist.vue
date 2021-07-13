<template>
  <div class="policylist">
    <div class="choose-insurance">
      <p>请选择下列一项保单</p>
      <div class="insurance-wrap">
        <div
          v-for="(item, index) in policyList"
          :key="index"
          class="insurance-item"
        >
          <div @click="chooseItem(item)" class="insurance-title">
            <div>
              <img src="@/assets/images/my/product.png" alt="" />
              <p>{{ item.RiskName }}</p>
            </div>
            <van-checkbox
              v-model="item.isChoose"
              checked-color="#E02D47"
            ></van-checkbox>
          </div>
          <div class="insurance-con">
            <p>保单号：{{ item.ContNo }}</p>
            <p>期交保费：{{ item.Prem }}元</p>
            <p>保单生效日：{{ item.CValiDate }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="next-step">
      <p class="page-double-btn1" @click="nextStep">下一步</p>
      <p class="page-double-btn2" @click="$router.go(-1)">取消</p>
    </div>
  </div>
</template>

<script>
import { getMyInsurance } from "@/api/myList";
import { myListFilter } from "@/untils/areaFilter";
export default {
  name: "policylist",
  components: {},
  data() {
    return {
      policyList: [],
    };
  },
  methods: {
    // 选择表单
    chooseItem(item) {
      this.policyList.forEach((item) => {
        item.isChoose = false;
      });
      item.isChoose = true;
      this.$forceUpdate();
    },
    // 下一步
    nextStep() {
      let isChoose = this.policyList.some((item) => {
        return item.isChoose == true;
      });
      if (!isChoose) {
        this.$toast("请选择表单");
      } else {
        let chooseItem = this.policyList.filter((item) => {
          return item.isChoose == true;
        });
        this.$router.push({
          path: this.$route.query.path,
          query: { contNo: chooseItem[0].ContNo },
        });
      }
    },
    // 同步获取保单列表
    asyncGetMyInsurance() {
      return new Promise((resolve) => {
        getMyInsurance().then((res) => {
          let Policy =
            res.CALL_RESPONSE.RESPONSE_BODY.TranData.PolicyList.Policy;
          if (Policy instanceof Array) {
            this.policyList = myListFilter(Policy, "DI");
          } else {
            this.policyList.push(Policy);
          }
          this.policyList.forEach((item) => {
            item.isChoose = false;
          });
          resolve(this.policyList);
        });
      });
    },
  },
  async created() {
    await this.asyncGetMyInsurance();
  },
};
</script>
<style scoped lang='less'>
.policylist {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  .next-step {
    background: #f4f4f4;
    padding-top: 30px;
    padding-bottom: 60px;
    display: flex;
    justify-content: center;
  }
  .choose-insurance {
    margin-top: 20px;
    padding-top: 16px;
    .van-checkbox__icon,
    .van-icon {
      width: 40px;
      height: 40px;
      font-size: 32px;
      text-align: center;
      line-height: 42px;
    }
    .van-checkbox__icon {
      width: 40px;
      height: 40px;
    }
    .van-checkbox {
      width: 40px;
      height: 40px;
    }
    .insurance-wrap {
      background: #f4f4f4;
      .insurance-item {
        background: white;
        padding-left: 30px;
        height: 346px;
        margin-bottom: 16px;
        .insurance-title {
          padding-right: 44px;
          margin-bottom: 30px;
          display: flex;
          height: 104px;
          align-items: center;
          justify-content: space-between;
          font-size: 32px;
          border-bottom: 1px solid #d8d8d8;
          & > div:nth-of-type(1) {
            display: flex;
            align-items: center;
          }
          p {
            color: #2d70ed;
            font-weight: 500;
          }
          img {
            width: 28px;
            height: 32px;
            margin-right: 17px;
          }
        }
        .insurance-con {
          font-size: 28px;
          p {
            margin-bottom: 30px;
          }
        }
      }
    }
    & > p:nth-last-of-type(1) {
      font-size: 32px;
      color: #f56200;
      padding-left: 30px;
      background: white;
      padding-top: 30px;
      // height: 104px;
      // line-height: 104px;
    }
  }
}
</style>
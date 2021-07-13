<template>
  <div class="usercontactedit">
    <van-tabs
      title-inactive-color="black"
      title-active-color="#E02D47"
      v-model="active"
    >
      <van-tab title="投保人">
        <Usercontacteditform
          ref="product"
          :product="Appnt"
        ></Usercontacteditform>
        <div class="choose-insurance">
          <p>投保人名下的所有保单是否同时变更？</p>
          <div class="insurance-wrap">
            <div
              v-for="(item, index) in policyList"
              :key="index"
              class="insurance-item"
            >
              <div class="insurance-title">
                <div>
                  <img src="@/assets/images/my/product.png" alt="" />
                  <p>{{ item.RiskName }}</p>
                </div>
                <van-checkbox checked-color="#E02D47"></van-checkbox>
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
      </van-tab>
      <van-tab title="被保人">
        <Usercontacteditform
          :product="insured"
          :type="active"
        ></Usercontacteditform>
        <div class="next-step">
          <p class="page-double-btn1">下一步</p>
          <p class="page-double-btn2" @click="$router.go(-1)">取消</p>
        </div>
      </van-tab>
      <div class="line"></div>
    </van-tabs>
  </div>
</template>

<script>
import Usercontacteditform from "@/components/usercontacteditform";
import { getMyInsurance, getMyInsuranceMain } from "@/api/myList";
import { areaNameFiletr } from "@/untils/areaFilter";
export default {
  name: "usercontactedit",
  components: { Usercontacteditform },
  data() {
    return {
      active: 0,
      policyList: [],
      Appnt: {},
      insured: {},
    };
  },
  methods: {
    // 下一步
    nextStep() {
      console.log(this.$refs.product.product);
    },
    // 获取保单详情
    getMainPolicy(ContNo) {
      getMyInsuranceMain({ contNo: ContNo }).then((res) => {
        this.Appnt = res.CALL_RESPONSE.RESPONSE_BODY.TranData.RetData.Appnt;
        this.insured =
          res.CALL_RESPONSE.RESPONSE_BODY.TranData.RetData.Insureds.Insured;
        let { Province, City, District, NativePlace } = this.Appnt;
        let { Province1, City1, District1 } = this.insured;
        let areaArr = [
          areaNameFiletr(Province, 0),
          areaNameFiletr(City, 1),
          areaNameFiletr(District, 2),
        ];
        let areaArr1 = [
          areaNameFiletr(Province1, 0),
          areaNameFiletr(City1, 1),
          areaNameFiletr(District1, 2),
        ];
        this.Appnt["areaCode"] = areaArr.filter((item) => item);
        this.insured["areaCode"] = areaArr1.filter((item) => item);
        console.log(this.insured["areaCode"]);
      });
    },
    // 同步获取保单列表
    asyncGetMyInsurance() {
      return new Promise((resolve) => {
        getMyInsurance().then((res) => {
          let Policy =
            res.CALL_RESPONSE.RESPONSE_BODY.TranData.PolicyList.Policy;
          if (Policy instanceof Array) {
            this.policyList = Policy;
          } else {
            this.policyList.push(Policy);
          }
          resolve(this.policyList);
        });
      });
    },
  },
  async created() {
    await this.asyncGetMyInsurance();
    this.getMainPolicy(this.policyList[0].ContNo);
  },
};
</script>
<style scoped lang='less'>
.usercontactedit {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    transform: scaleY(-1);
    background: #d8d8d8;
    top: 100px;
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
  .next-step {
    background: #f4f4f4;
    padding-top: 30px;
    padding-bottom: 60px;
    display: flex;
    justify-content: center;
  }
  /deep/.van-tabs {
    position: relative;

    .van-tabs__line {
      width: 334px;
    }
    .van-tabs__wrap {
      height: 100px;
    }
    .van-tab__text--ellipsis {
      line-height: 100px;
      font-size: 32px;
    }
  }
}
</style>
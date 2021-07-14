<template>
  <div class="my">
    <div class="top-wrap">
      <div class="my-banner">
        <div @click="$router.push('/previewList')" class="my-policy">
          <div>
            <img src="@/assets/images/my/money.png" alt="" />
            <div>
              <p>我的保单</p>
              <p>3989万元</p>
            </div>
          </div>
          <div>
            <img src="@/assets/images/my/selfMonth.png" alt="" />
            <div>
              <p>五大管家增值服务</p>
              <p>服务</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service-wrap">
      <h3>保全服务</h3>
      <div class="security-service">
        <van-row gutter="20" v-for="(item, index) in myList" :key="index">
          <van-col
            span="8"
            v-for="(child, childIndex) in item"
            :key="childIndex"
          >
            <div @click="mallStatistics(child)" class="service-item">
              <!-- <img :src="child.functionIcon" alt="" /> -->
              <van-image
                width="91"
                height="94"
                :src="child.functionIcon"
              ></van-image>
              <p>{{ child.functionName }}</p>
            </div>
          </van-col>
        </van-row>
        <!-- <van-row gutter="20">
          <van-col span="8">
            <div @click="$router.push('/userInfoEdit')" class="service-item">
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>客户资料方式变更</p>
            </div>
          </van-col>
          <van-col span="8">
            <div @click="$router.push('/usercontactedit')" class="service-item">
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>客户联系方式变更</p>
            </div>
          </van-col>
          <van-col span="8">
            <div
              @click="$router.push('/getuniversalinsurance')"
              class="service-item"
            >
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>万能险部分领取</p>
            </div>
          </van-col>
        </van-row>
        <van-row gutter="20">
          <van-col span="8">
            <div
              @click="$router.push('/terminatecontract')"
              class="service-item"
            >
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>合同解除</p>
            </div>
          </van-col>
          <van-col span="8">
            <div
              @click="$router.push('/terminatecontract')"
              class="service-item"
            >
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>犹豫期解除合同</p>
            </div>
          </van-col>
          <van-col span="8">
            <div
              @click="$router.push('/supplementarycalls')"
              class="service-item"
            >
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>万能险追加保费</p>
            </div>
          </van-col>
        </van-row>
        <van-row gutter="20">
          <van-col span="8">
            <div @click="$router.push('/beneficiary')" class="service-item">
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>变更/新增受益人资料</p>
            </div>
          </van-col>
          <van-col span="8">
            <div @click="$router.push('/changemode')" class="service-item">
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>保费逾期未付处理方式变更</p>
            </div>
          </van-col>
          <van-col span="8">
            <div @click="$router.push('/stoprenewal')" class="service-item">
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>短期险终止续保</p>
            </div>
          </van-col>
        </van-row>
        <van-row gutter="20">
          <van-col span="8">
            <div @click="$router.push('/getbonus')" class="service-item">
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>红利领取</p>
            </div>
          </van-col>
          <van-col span="8">
            <div @click="$router.push('/editbonus')" class="service-item">
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>红利实现方式变更</p>
            </div>
          </van-col>
          <van-col span="8">
            <div @click="$router.push('/changefrequency')" class="service-item">
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>交费频率变更</p>
            </div>
          </van-col>
        </van-row>
        <van-row gutter="20">
          <van-col span="8">
            <div
              @click="$router.push('/shortstoprenewal')"
              class="service-item"
            >
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>短期险终止续保</p>
            </div>
          </van-col>
          <van-col span="8">
            <div @click="$router.push('/defer')" class="service-item">
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>万能险保费缓交变更</p>
            </div>
          </van-col>
          <van-col span="8">
            <div
              @click="$router.push('/payinsurancecost')"
              class="service-item"
            >
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>万能险补交续期保费</p>
            </div>
          </van-col>
        </van-row>
        <van-row gutter="20">
          <van-col span="8">
            <div
              @click="$router.push('/changeregularpremium')"
              class="service-item"
            >
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>万能险期交保费变更</p>
            </div>
          </van-col>
          <van-col span="8">
            <div @click="$router.push('/accountlinking')" class="service-item">
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>续期保费账户关联</p>
            </div>
          </van-col>
          <van-col span="8">
            <div
              @click="$router.push('/changepaytypeandrenew')"
              class="service-item"
            >
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>续期交费方式及交费账号变更</p>
            </div>
          </van-col>
        </van-row>
        <van-row gutter="20">
          <van-col span="8">
            <div
              @click="$router.push('/automaticdischarge')"
              class="service-item"
            >
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>自动垫交清偿</p>
            </div>
          </van-col>
          <van-col span="8">
            <div
              @click="$router.push('/changerenewaltype')"
              class="service-item"
            >
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>续期信函方式变更</p>
            </div>
          </van-col>
          <van-col span="8">
            <div @click="$router.push('/policyborrowing')" class="service-item">
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>保单借款</p>
            </div>
          </van-col>
        </van-row> -->
      </div>
      <h3>理赔服务</h3>
      <div class="security-service">
        <van-row gutter="20">
          <van-col span="8">
            <div
              @click="$router.push('/claimapplacation')"
              class="service-item"
            >
              <img src="../../assets/images/my/top-arrow.png" alt="" />
              <p>理赔申请</p>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <Dialog
      :show="show"
      @confirm="confirm"
      @cancel="cancel"
      content="弹窗内容"
    ></Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/dialog";
import { getMyList, mallStatistics } from "@/api/myList";
export default {
  name: "my",
  components: { Dialog },
  data() {
    return {
      show: false,
      myList: [],
    };
  },
  methods: {
    // 获取保全列表数据
    getMyList() {
      getMyList().then((res) => {
        let resultArr = res;
        let oneArr = [];
        // 新建二维数组
        resultArr.forEach((item) => {
          oneArr.push(item);
          if (oneArr.length == 3) {
            this.myList.push(oneArr);
            oneArr = [];
          }
        });
      });
    },
    // 埋点
    mallStatistics(item) {
      const { functionPath, functionType, functionName } = item;
      mallStatistics({
        applicationType: functionType,
        applicationName: functionName,
      }).then((res) => {});
      this.$router.push({
        path: "/policyList",
        query: { path: functionPath, remark: item.remark },
      });
    },
    confirm() {
      this.show = false;
      console.log("666");
    },
    cancel() {
      this.show = false;
    },
  },
  created() {
    this.getMyList();
  },
};
</script>
<style scoped lang='less'>
.my {
  .top-wrap {
    height: 360px;
    .my-banner {
      height: 244px;
      width: 100%;
      background: url("../../assets/images/my/banner.png") no-repeat;
      background-size: 100% 100%;
      position: relative;

      .my-policy {
        height: 160px;
        width: 660px;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 154px;
        background: url("../../assets/images/my/bannerbg.png");
        background-size: contain;
        display: flex;
        padding: 0 30px;
        justify-content: space-between;
        & > div {
          display: flex;
          align-items: center;
          div {
            p {
              font-size: 24px;
              line-height: 36px;
            }
            p:nth-of-type(2) {
              color: #f56200;
            }
          }
          img {
            width: 91px;
            height: 94px;
            margin-right: 20px;
          }
        }
      }
    }
  }
  .service-wrap {
    padding: 0 30px;
    h3 {
      font-size: 34px;
      margin-bottom: 53px;
    }
    .security-service {
      .service-item {
        width: 210px;
        font-size: 30px;
        text-align: center;
        margin-bottom: 60px;
        /deep/.van-icon {
          font-size: 42px;
        }
        p {
          color: #666660;
        }
        img {
          width: 50px;
          height: 50px;
          margin-bottom: 18px;
        }
      }
    }
  }
}
</style>
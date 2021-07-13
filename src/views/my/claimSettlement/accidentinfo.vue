<template>
  <div class="accidentinfo">
    <div class="accidentinfo-wrap">
      <div class="info-top">
        <div class="info-item">
          <p class="title">出险人姓名</p>
          <p>张三</p>
        </div>
        <div class="info-item">
          <p class="title">证件类型</p>
          <p>身份证</p>
        </div>
        <div class="info-item">
          <p class="title">证件号码</p>
          <p>789546321</p>
        </div>
      </div>
      <div class="payinsurance-form">
        <div class="payinsurance-item">
          <p class="title">出险原因</p>
          <p>意外</p>
          <van-icon name="arrow" />
        </div>
        <div class="payinsurance-item">
          <p class="title">理赔类型</p>
          <p>身故</p>
          <van-icon name="arrow" />
        </div>
        <div @click="showDate = true" class="payinsurance-item">
          <p class="title">事故日期</p>
          <p class="choose" v-if="product.date">
            {{ product.date }}
          </p>
          <p v-if="!product.date" class="uni-color">请选择</p>
          <van-icon name="arrow" />
        </div>
        <div @click="showNowRegister = true" class="payinsurance-item">
          <p class="title">出险地点</p>
          <p class="register">
            <span
              v-for="(item, index) in product.nowRegisterText"
              :key="index"
              >{{ item.name }}</span
            >
          </p>
          <p v-if="!product.nowRegisterText.length" class="uni-color">请选择</p>
          <van-icon name="arrow" />
        </div>
        <div class="payinsurance-item">
          <input v-model="product.address" placeholder="详细地址" type="text" />
        </div>
        <div class="payinsurance-item">
          <p class="title">事故经过</p>
          <input placeholder="请输入" type="text" />
        </div>
        <div class="payinsurance-item">
          <p class="title">治疗情况</p>
          <p>门诊</p>
        </div>
      </div>
    </div>
    <div class="next-step">
      <p class="page-single-btn">确定</p>
    </div>
    <!-- 地址 -->
    <van-popup position="bottom" v-model="showNowRegister">
      <van-area
        @confirm="chooseNowRegister"
        title="请选择"
        :area-list="areaList"
        value="110101"
      />
    </van-popup>
    <!-- 开始时间 -->
    <van-popup position="bottom" v-model="showDate">
      <van-datetime-picker
        title="请选择"
        show-toolbar
        @confirm="chooseDate"
        @cancel="showDate = false"
        :formatter="formatter"
        type="date"
        v-model="currentDate"
      />
    </van-popup>
  </div>
</template>

<script>
import { msToDate } from "@/assets/common/date";
import are from "@/assets/common/area";
export default {
  name: "accidentinfo",
  components: {},
  data() {
    return {
      showDate: false,
      showNowRegister: false,
      currentDate: new Date(),
      areaList: are,
      product: {
        date: "",
        nowRegisterText: [],
      },
      productCode: {
        nowRegisterText: [],
      },
    };
  },
  methods: {
    chooseDate(item) {
      this.product["date"] = msToDate(item);
      this.showDate = false;
    },
    // 现住址选择
    chooseNowRegister(item) {
      this.product["nowRegisterText"] = item;
      this.productCode["nowRegisterText"] = item.map((item) => {
        return item.code;
      });
      this.showNowRegister = false;
    },
    formatter(type, val) {
      if (type === "year") {
        return val + "年";
      }
      if (type === "month") {
        return val + "月";
      }
      if (type === "day") {
        return val + "日";
      }
      return val;
    },
  },
  created() {},
};
</script>
<style scoped lang='less'>
.accidentinfo {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  .accidentinfo-wrap {
    .info-top {
      padding-left: 40px;
      padding-top: 32px;
      padding-bottom: 32px;
      color: #999;
      background: white;
      margin-bottom: 16px;
      .title {
        color: #999;
      }
      .info-item:last-child {
        margin: 0;
      }
      .info-item {
        display: flex;
        margin-bottom: 30px;
      }
    }
    .payinsurance-form {
      background: white;
      padding-left: 40px;
      .payinsurance-item:last-child {
        border: none;
      }
      .payinsurance-item {
        border-bottom: 1px solid #d5d5d5;
        height: 104px;
        display: flex;
        align-items: center;
        position: relative;
        .register {
          span {
            margin-right: 10px;
          }
        }
        .van-icon {
          position: absolute;
          right: 40px;
        }
        .uni-color {
          color: #999;
        }
        input {
          margin-right: 40px;
        }
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
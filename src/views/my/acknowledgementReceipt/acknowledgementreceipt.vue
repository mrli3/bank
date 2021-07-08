<template>
  <div class="acknowledgementreceipt">
    <div
      :style="isPicker ? 'padding-bottom:330px' : 'padding-bottom:170px'"
      class="receipt-content"
    >
      <div class="dear-user">
        <p>尊敬的李丽丽先生/女士：</p>
        <p>为了保障您的权益，在您收到保险合同后，我们提醒您注意以下事项：</p>
      </div>
      <!-- 个险长期 -->
      <div v-if="false" class="contract">
        <p class="contract-title">一、合同内容检查核对</p>
        <p class="contract-con">
          请您对照保险合同目录逐页检查保险合同内容是否完整，核对保险单上的投保人、被保险人、受益人信息及保障信息是否有误，如有错漏，请您即时交予保单服务人员带回公司进行更改。
          <span
            >您可拨打本公司服务电话（4000095566、95566）、登录网站（www.boc-samsunglife.cn）或至公司（XX市XXXXXXXX）查询、核对您的保单信息。</span
          >
        </p>
        <p class="contract-title">二、保险合同送达通知书签署及犹豫期权利</p>
        <p class="contract-con">
          如您确认合同内容正确无误，请您输入验证码并点击下方“回执签收”按钮，。
          自您签收本合同之日起十五日内，您可以申请退保，本公司将全额退还您所交保险费（不包括主合同保险期间为一年期的保险合同，对一年期的保险合同，我们将按合同约定支付退保金）。
          <span
            >为维护您的权利，建议您在签收合同之日起十日内完成对您保单的首次查询。</span
          >
        </p>
        <p class="contract-title">三、电话回访</p>
        <p class="contract-con">
          根据保监会要求，我们将在收到您的保险合同送达通知书后对您进行简短的电话回访，为了保障您的权益，请您如实回答回访人员的提问
          <span>（回访内容见保单服务指南），</span
          >不要听信他人对您的错误引导而作出不符合实情的回答，从而导致您的权益受损。
        </p>
      </div>
      <!-- 个险一年期 -->
      <div v-if="false" class="contract">
        <p class="contract-title">一、合同内容检查核对</p>
        <p class="contract-con">
          请您对照保险合同目录逐页检查保险合同内容是否完整，核对保险单上的投保人、被保险人、受益人信息及保障信息是否有误，如有错漏，请您即时交予保单服务人员带回公司进行更改。
          <span
            >您可拨打本公司服务电话（4000095566、95566）、登录网站（www.boc-samsunglife.cn）或至公司（XX市XXXXXXXX）查询、核对您的保单信息。为维护您的权利，建议您在签收合同之日起十日内完成对您保单的首次查询。</span
          >
        </p>
        <p class="contract-title">二、保险合同送达通知书签署</p>
        <p class="contract-con">
          如您确认合同内容正确无误，请您输入验证码并点击下方“回执签收”按钮。
        </p>
      </div>
      <!-- 银保一年期 -->
      <div class="contract">
        <p class="contract-title">一、合同内容检查核对</p>
        <p class="contract-con">
          收到保险合同时，请您对照保险合同目录逐页检查保险合同内容是否完整，核对保险单上的投保人、被保险人、受益人信息及保障信息是否有误，如有错漏，请您即时交予保单服务人员带回公司进行更改。
          <span
            >您可拨打本公司服务电话（4000095566、95566）、登录网站（www.boc-samsunglife.cn）或至公司（XX市XXXXXXXX）查询、核对您的保单信息。为维护您的权利，建议您在签收合同之日起十五日内完成对您保单的首次查询。</span
          >
        </p>
        <p class="contract-title">二、保险合同送达通知书签署</p>
        <p class="contract-con">
          如您确认合同内容正确无误，请您输入验证码并点击下方“回执签收”按钮。
        </p>
      </div>
      <!-- 银保长期 -->
      <div class="contract">
        <p class="contract-title">一、合同内容检查核对</p>
        <p class="contract-con">
          请您对照保险合同目录逐页检查保险合同内容是否完整，核对保险单上的投保人、被保险人、受益人信息及保障信息是否有误，如有错漏，请您即时交予客户经理带回公司进行更改。
          <span
            >。您可拨打本公司服务电话（4000095566、95566）、登录网站（www.boc-samsunglife.cn）或至公司（XX市XXXXXXXX）查询、核对您的保单信息。</span
          >
        </p>
        <p class="contract-title">二、保险合同送达通知书签署及犹豫期权利</p>
        <p class="contract-con">
          如您确认合同内容正确无误，请您输入验证码并点击下方“回执签收”按钮。
          自您签收本合同之日起十五日内，您可以申请退保，本公司将全额退还您所交保险费（不包括主合同保险期间为一年期的保险合同，对一年期的保险合同，我们将按合同约定支付退保金）。
          <span
            >为维护您的权利，建议您在签收合同之日起十五日内完成对您保单的首次查询。</span
          >
        </p>
        <p class="contract-title">三、电话回访</p>
        <p class="contract-con">
          根据保监会要求，我们将在收到您的保险合同送达通知书后对您进行简短的电话回访，为了保障您的权益，请您如实回答回访人员的提问
          <span>（回访主要见保单服务指南），</span
          >不要听信他人对您的错误引导而作出不符合实情的回答，从而导致您的权益受损。
        </p>
      </div>
      <div class="reciept">
        <p>签收方式：手机银行</p>
        <p>签收日期：2012年12月02日</p>
      </div>
    </div>
    <div class="readcontract-reciept">
      <div class="code-recive">
        <van-checkbox shape="square" v-model="checked" checked-color="#ee0a24"
          >本人已收到保单号000130916327188的保险合同，阅读并知晓以上回执内容</van-checkbox
        >
      </div>
      <div class="get-code">
        <van-field
          v-model="sms"
          center
          clearable
          label="验证码："
          placeholder=""
        >
          <template #button>
            <van-button color="#e02d47" size="small" type="primary"
              >获取</van-button
            >
          </template>
        </van-field>
      </div>
      <div class="date">
        <p>
          如您对电话回访时间有特点需求，请<span @click="isPicker = !isPicker"
            >点击此处</span
          >
        </p>
        <div v-show="isPicker" class="date-picker">
          <div class="choose-date">
            <p>回访日期：</p>
            <p @click="showDatePicker = true">{{ showDate }}</p>
          </div>
          <van-popup position="bottom" v-model="showDatePicker">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              title="选择日期"
              @cancel="showDatePicker = false"
              :formatter="formatter"
              @confirm="onConfirmDate"
            />
          </van-popup>
          <div class="choose-time">
            <p>预约时间段：</p>
            <p @click="showTimePicker = true">{{ currentTime }}</p>
          </div>
          <van-popup position="bottom" v-model="showTimePicker">
            <van-picker
              title="请选择"
              show-toolbar
              :columns="columns"
              @confirm="onConfirmTime"
              @cancel="showTimePicker = false"
            />
          </van-popup>
          <div class="page-single-btn">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { msToDate } from "@/assets/common/date";
export default {
  name: "acknowledgementreceipt",
  components: {},
  data() {
    return {
      checked: false,
      sms: "",
      currentDate: new Date(),
      showDate: "请选择预约回访日期",
      currentTime: "—请选择—",
      chooseDate: "",
      showDatePicker: false,
      isPicker: false,
      showTimePicker: false,
      columns: [
        "8:30-9:30",
        "9:30-10:30",
        "11:30-12:30",
        "13:30-14:30",
        "14:30-15:30",
        "15:30-16:30",
        "16:30-17:30",
        "18:30-19:30",
      ],
    };
  },
  methods: {
    onConfirmDate(date) {
      this.showDate = msToDate(date);
      this.showDatePicker = false;
    },
    onConfirmTime(time) {
      this.currentTime = time;
      this.showTimePicker = false;
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
.acknowledgementreceipt {
  height: 100%;
  .receipt-content {
    padding: 0 30px;
    padding-top: 40px;
    background: white;
    .dear-user {
      p:nth-of-type(1) {
        font-size: 32px;
        font-weight: 500;
        line-height: 45px;
        color: #333;
        margin-bottom: 18px;
      }
      p:nth-of-type(2) {
        font-size: 30px;
        text-indent: 2em;
        line-height: 60px;
        color: #666;
      }
    }
    .contract {
      line-height: 60px;
      margin-bottom: 50px;
      .contract-title {
        font-weight: 500;
        font-size: 32px;
        height: 100px;
        line-height: 100px;
        color: #333;
      }
      .contract-con {
        font-size: 30px;
        color: #666;
        text-indent: 2em;
        span {
          font-weight: 500;
          color: #333;
        }
      }
    }
    .reciept {
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      padding-bottom: 40px;
    }
  }
  .readcontract-reciept {
    width: 100%;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    background: #ffffff;
    box-shadow: 0px -2px 11px 0px rgba(0, 0, 0, 0.18);
    .code-recive {
      padding-top: 25px;
      padding-left: 37px;
      /deep/.van-checkbox {
        width: auto;
        height: auto;
        margin-right: 0;
        .van-checkbox__icon,
        .van-icon {
          width: 40px;
          height: 40px;
          font-size: 32px;
          text-align: center;
          line-height: 42px;
        }
      }
      /deep/.van-checkbox__label {
        line-height: 30px;
        font-size: 24px;
        margin-left: 10px;
        width: 586px;
        color: #999999;
        text-align: center;
        // margin-bottom: 29px;
      }
      /deep/.van-checkbox__icon {
        margin-top: -18px;
      }
    }
    .get-code {
      margin-top: 29px;
      padding-left: 18px;
      padding-bottom: 30px;
      /deep/.van-cell__title {
        font-size: 30px;
        width: auto;
      }
      /deep/.van-field__control {
        font-size: 30px;
      }
      /deep/.van-cell--center {
        height: 92px;
      }
      /deep/.van-field__body {
        border: 1px solid #c0c0c0;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
      }
      /deep/.van-field__button button {
        width: 200px;
        height: 88px;
        font-size: 34px;
        background: #e02d47;
        border: none;
        border-radius: 8px;
      }
    }
    .date {
      padding-top: 17px;
      background: #f4f4f4;
      padding-bottom: 30px;
      & > p:nth-of-type(1) {
        text-align: center;
        font-size: 24px;
        color: #999999;
        padding-bottom: 27px;
        span {
          color: #2d70ed;
        }
      }
    }
    .date-picker {
      .choose-date {
        padding-left: 60px;
        display: flex;
        align-items: center;
        p:nth-of-type(1) {
          font-size: 30px;
          color: #222222;
        }
        p:nth-of-type(2) {
          font-size: 28px;
          color: #999999;
          width: 510px;
          height: 88px;
          border-radius: 8px;
          border: 1px solid #c0c0c0;
          line-height: 88px;
          padding-left: 30px;
          box-sizing: border-box;
        }
      }
      .choose-time {
        padding-left: 30px;
        display: flex;
        margin-top: 25px;
        align-items: center;
        p:nth-of-type(1) {
          font-size: 30px;
          color: #222222;
        }
        p:nth-of-type(2) {
          font-size: 28px;
          color: #999999;
          width: 510px;
          height: 88px;
          border-radius: 8px;
          border: 1px solid #c0c0c0;
          line-height: 88px;
          padding-left: 27px;
          box-sizing: border-box;
        }
      }
    }
  }
  /deep/.van-popup {
    padding-top: 20px;
    .van-picker {
      .van-picker__toolbar {
        width: 100%;
        button {
          font-size: 28px;
        }
      }
      .van-picker__title {
        height: 50px;
        line-height: 50px;
        font-size: 28px;
      }
      .van-picker__columns {
        ul > li {
          font-size: 30px;
        }
      }
      .van-picker__confirm {
        color: #e02d47;
      }
    }
  }
}
</style>
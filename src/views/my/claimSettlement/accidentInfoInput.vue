<template>
  <div class="accidentInfoInput">
    <div class="changemode-wrap">
      <div class="changemode-item">
        <p class="title"><span>*</span> 事故经过</p>
        <van-field
          v-model="product.textarea"
          rows="2"
          autosize
          type="textarea"
          placeholder="请输入事情经过"
          maxlength="50"
        />
      </div>
      <div @click="showMode = true" class="changemode-item">
        <p class="title">治疗情况</p>
        <p class="arrow">
          <span v-if="product.mode">{{ product.mode }}</span>
          <span class="uni-color" v-if="!product.mode">请选择</span>
        </p>
        <van-icon name="arrow" />
      </div>
      <div class="changemode-item">
        <p class="title">治疗医院</p>
        <input v-model="product.id" placeholder="请输入治疗医院" type="text" />
      </div>
      <div @click="showDateStart = true" class="changemode-item">
        <p class="title">就诊日期</p>
        <p class="arrow">
          <span v-if="product.startText">{{ product.startText }}</span>
          <span class="uni-color" v-if="!product.startText">请选择</span>
        </p>
        <van-icon name="arrow" />
      </div>
      <div @click="showDateEnd = true" class="changemode-item">
        <p class="title">出院日期</p>
        <p class="arrow">
          <span v-if="product.endText">{{ product.endText }}</span>
          <span class="uni-color" v-if="!product.endText">请选择</span>
        </p>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="next-step">
      <p @click="$router.push('/applacationInfo')" class="page-single-btn">
        确定
      </p>
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
    <!-- 就诊日期 -->
    <van-popup position="bottom" v-model="showDateStart">
      <van-datetime-picker
        title="请选择"
        show-toolbar
        @confirm="chooseStartDate"
        @cancel="showDatePicker = false"
        :formatter="formatter"
        :min-date="minDate"
        type="date"
        v-model="currentDate"
      />
    </van-popup>
    <!-- 结束时间 -->
    <van-popup position="bottom" v-model="showDateEnd">
      <van-datetime-picker
        title="请选择"
        show-toolbar
        @confirm="chooseEndDate"
        @cancel="showDatePicker = false"
        :formatter="formatter"
        :min-date="minDate"
        type="date"
        v-model="currentDate"
      />
    </van-popup>
  </div>
</template>

<script>
import { treatmentCondition } from "@/assets/pickerData/pickerData";
import { msToDate } from "@/assets/common/date";
export default {
  name: "editbonus",
  components: {},
  data() {
    return {
      showModeArr: treatmentCondition,
      showMode: false,
      showDateStart: false,
      showDateEnd: false,
      currentDate: new Date(),
      minDate: new Date(1500, 0),
      product: {
        mode: "",
        id: "",
        name: "",
        startText: "",
        textarea: "",
        endTextL: "",
      },
    };
  },
  methods: {
    chooseEndDate(item) {
      this.product["endText"] = msToDate(item);
      this.showDateEnd = false;
    },
    chooseStartDate(item) {
      this.product["startText"] = msToDate(item);
      this.showDateStart = false;
    },
    chooseMode(item) {
      this.product["mode"] = item.name;
      this.showMode = false;
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
.accidentInfoInput {
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
      border-bottom: 1px solid #d5d5d5;
      position: relative;
      .title > span {
        color: #e02d47;
      }
      /deep/.van-field {
        padding-left: 0;
        textarea::placeholder {
          line-height: 60px;
        }
      }
      /deep/.van-field {
        font-size: 28px;
        height: 80px;
        textarea {
          height: 80px !important;
          line-height: 30px;
        }
      }
      .uni-color {
        color: #ccc;
      }
      .van-icon {
        position: absolute;
        right: 40px;
      }
    }
  }
}
</style>
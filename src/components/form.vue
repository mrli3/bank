<template>
  <div class="form">
    <div class="tab-wrap">
      <div class="tab-item">
        <p class="title">{{ type == 1 ? "被保人姓名" : "投保人姓名" }}</p>
        <p>{{ product.name }}</p>
      </div>
      <div @click="isShowcredentialsPicker = true" class="tab-item">
        <p class="title">证件类型</p>
        <p :style="product.credentialsText == '请选择' ? 'color:#ccc' : ''">
          {{ product.credentialsText }}
        </p>
        <van-icon name="arrow" />
      </div>
      <div class="tab-item">
        <p class="title">证件号码</p>
        <p>101203199608126898</p>
      </div>
      <div class="tab-item">
        <p class="title">证件有效期</p>
        <p
          :style="product.startText == '请选择' ? 'color:#ccc' : ''"
          @click="showDateStart = true"
          class="choose"
        >
          {{ product.startText }}
        </p>
        <p>至</p>
        <p
          :style="product.endText == '请选择' ? 'color:#ccc' : ''"
          @click="showDateEnd = true"
          class="choose right"
        >
          {{ product.endText }}
        </p>
      </div>
      <div @click="showMatrimony = true" class="tab-item">
        <p class="title">婚姻状况</p>
        <p>{{ product.maritalText }}</p>
        <van-icon name="arrow" />
      </div>
      <div @click="showNational = true" class="tab-item">
        <p class="title">国籍</p>
        <p>{{ product.nationalText }}</p>
        <van-icon name="arrow" />
      </div>
      <div @click="showCensusRegister = true" class="tab-item">
        <p class="title">户籍所在地</p>
        <p class="register">
          <span v-for="(item, index) in product.Register" :key="index">{{
            item.name
          }}</span>
        </p>
        <van-icon name="arrow" />
      </div>
      <div @click="showEducationBackground = true" class="tab-item">
        <p class="title">教育程度</p>
        <p>{{ product.educationText }}</p>
        <van-icon name="arrow" />
      </div>
      <div @click="showPublicMedicare = true" class="tab-item">
        <p class="title">是否拥有公费医疗</p>
        <p>{{ product.publicMedicareText }}</p>
        <van-icon name="arrow" />
      </div>
      <div @click="showMedicare = true" class="tab-item">
        <p class="title">社会医疗保险</p>
        <p>{{ product.medicareText }}</p>
        <van-icon name="arrow" />
      </div>
      <div @click="showNowRegister = true" class="tab-item">
        <p class="title">现住址</p>
        <p class="register">
          <span v-for="(item, index) in product.nowRegisterText" :key="index">{{
            item.name
          }}</span>
        </p>
        <van-icon name="arrow" />
      </div>
      <div class="tab-item input">
        <input v-model="product.address" placeholder="详细地址" type="text" />
      </div>
      <div class="tab-item">
        <p class="title">现住址邮政编码</p>
        <input placeholder="请填写" type="text" />
      </div>
    </div>
    <!-- 证件类型 -->
    <van-popup position="bottom" v-model="isShowcredentialsPicker">
      <van-picker
        title="请选择"
        show-toolbar
        value-key="name"
        :columns="credentials"
        @cancel="isShowcredentialsPicker = false"
        @confirm="chooseProductCredentials"
      />
    </van-popup>
    <!-- 婚姻 -->
    <van-popup position="bottom" v-model="showMatrimony">
      <van-picker
        title="请选择"
        show-toolbar
        value-key="name"
        :columns="Matrimony"
        @cancel="showMatrimony = false"
        @confirm="chooseMarital"
      />
    </van-popup>
    <!-- 开始时间 -->
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
    <!-- 国籍选择 -->
    <van-popup position="bottom" v-model="showNational">
      <van-picker
        title="请选择"
        show-toolbar
        value-key="name"
        :columns="nationalArr"
        @confirm="chooseNational"
        @cancel="showNational = false"
      />
    </van-popup>
    <!-- 户籍选择 -->
    <van-popup position="bottom" v-model="showCensusRegister">
      <van-area
        @confirm="chooseRegister"
        title="请选择"
        :area-list="areaList"
        value="110101"
      />
    </van-popup>
    <!-- 现住址选择 -->
    <van-popup position="bottom" v-model="showNowRegister">
      <van-area
        @confirm="chooseNowRegister"
        title="请选择"
        :area-list="areaList"
        value="110101"
      />
    </van-popup>
    <!-- 学历 -->
    <van-popup position="bottom" v-model="showEducationBackground">
      <van-picker
        title="请选择"
        value-key="name"
        show-toolbar
        @confirm="chooseEducation"
        :columns="educationBackground"
        @cancel="showMatrimony = false"
      />
    </van-popup>
    <!-- 公费医疗 -->
    <van-popup position="bottom" v-model="showPublicMedicare">
      <van-picker
        title="请选择"
        value-key="name"
        show-toolbar
        :columns="medicareData"
        @confirm="choosePublicMedicare"
        @cancel="showPublicMedicare = false"
      />
    </van-popup>
    <!-- 医疗保险 -->
    <van-popup position="bottom" v-model="showMedicare">
      <van-picker
        title="请选择"
        value-key="name"
        show-toolbar
        @confirm="chooseCredentials"
        :columns="medicareData"
        @cancel="showMedicare = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { msToDate } from "@/assets/common/date";
import are from "@/assets/common/area";

import {
  maritalStatus,
  education,
  credentials,
  national,
} from "@/assets/pickerData/pickerData";
export default {
  name: "productForm",
  components: {},
  props: {
    type: {
      type: Number,
      default: 0,
    },
    product: {
      type: Object,
      default: function () {
        return {
          credentialsText: "请选择",
          startText: "请选择",
          endText: "请选择",
          maritalText: "请选择",
          nationalText: "请选择",
          Register: [],
          educationText: "请选择",
          publicMedicareText: "请选择",
          medicareText: "请选择",
          nowRegisterText: [],
          address: "",
          postalCode: "",
        };
      },
    },
    productCode: {
      type: Object,
      default: function () {
        return {
          credentialsText: "请选择",
          startText: "请选择",
          endText: "请选择",
          maritalText: "请选择",
          nationalText: "请选择",
          Register: [],
          educationText: "请选择",
          publicMedicareText: "请选择",
          medicareText: "请选择",
          nowRegisterText: [],
          address: "",
          postalCode: "",
        };
      },
    },
  },
  data() {
    return {
      showDateStart: false,
      showDateEnd: false,
      showMatrimony: false,
      showEducationBackground: false,
      showNational: false,
      showPublicMedicare: false, // 公费医疗
      showMedicare: false, // 医疗保险
      isShowcredentialsPicker: false,
      showCensusRegister: false,
      showNowRegister: false, // 现住址
      currentDate: new Date(),
      minDate: new Date(1500, 0),
      Matrimony: maritalStatus, // 婚姻状况
      credentials: credentials, // 证件类型
      areaList: are,
      educationBackground: education,
      medicareData: [
        { code: 0, name: "否" },
        { code: 1, name: "是" },
      ],
      nationalArr: [], // 国籍
    };
  },
  methods: {
    // 投保人
    // 证件选择
    chooseProductCredentials(item) {
      this.product["credentialsText"] = item.name;
      this.productCode["credentialsText"] = item.code;
      this.isShowcredentialsPicker = false;
    },
    // 开始结束时间选择
    chooseEndDate(item) {
      this.product["endText"] = msToDate(item);
      this.showDateEnd = false;
    },
    chooseStartDate(item) {
      this.product["startText"] = msToDate(item);
      this.showDateStart = false;
    },
    // 婚姻选择
    chooseMarital(item) {
      this.product["maritalText"] = item.name;
      this.productCode["maritalText"] = item.code;
      this.showMatrimony = false;
    },
    // 国籍选择
    chooseNational(item) {
      this.product["nationalText"] = item.name;
      this.productCode["nationalText"] = item.code;
      this.showNational = false;
    },
    // 户籍选择
    chooseRegister(item) {
      this.product["Register"] = item;
      this.productCode["Register"] = item.map((item) => {
        return item.code;
      });
      this.showCensusRegister = false;
    },
    // 学历选择
    chooseEducation(item) {
      this.product["educationText"] = item.name;
      this.productCode["educationText"] = item.code;
      this.showEducationBackground = false;
    },
    // 公费医疗
    choosePublicMedicare(item) {
      this.product["publicMedicareText"] = item.name;
      this.productCode["publicMedicareText"] = item.code;
      this.showPublicMedicare = false;
    },
    // 医疗保险
    chooseCredentials(item) {
      this.product["medicareText"] = item.name;
      this.productCode["medicareText"] = item.code;
      this.showMedicare = false;
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
  mounted() {
    this.nationalArr = national();
  },
};
</script>
<style scoped lang='less'>
.form {
  .tab-wrap {
    padding-left: 30px;
    font-size: 28px;
  }
  .tab-item:last-child {
    border-bottom: none;
  }
  .tab-item {
    width: 100%;
    height: 104px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
    position: relative;
    .register {
      span {
        margin-right: 10px;
      }
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

  .input {
    padding-left: 240px;
    box-sizing: border-box;
    input {
      width: 306px;
    }
  }
  input::-webkit-input-placeholder {
    font-size: 28px;
    width: 100%;
  }
}
</style>
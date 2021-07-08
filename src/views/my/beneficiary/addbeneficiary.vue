<template>
  <div class="addbeneficiary">
    <div class="add-beneficiary-wrap">
      <div @click="showAddType = true" class="add-beneficiary-item">
        <p class="title">新增受益人类型</p>
        <p class="uni-color" v-if="!product.showAddType">请选择</p>
        <p v-if="product.showAddType">{{ product.showAddType }}</p>
        <van-icon name="arrow" />
      </div>
      <div class="add-beneficiary-item">
        <p class="title">受益人姓名</p>
        <input placeholder="请输入" maxlength="10" type="text" />
      </div>
      <div @click="showCredentials = true" class="add-beneficiary-item">
        <p class="title">证件类型</p>
        <p v-if="product.credentials">{{ product.credentials }}</p>
        <p class="uni-color" v-if="!product.credentials">请选择</p>
        <van-icon name="arrow" />
      </div>
      <div class="add-beneficiary-item">
        <p class="title">证件号码</p>
        <input placeholder="请输入" type="text" />
      </div>
      <div @click="showSex = true" class="add-beneficiary-item">
        <p class="title">性别</p>
        <p v-if="product.sex">{{ product.sex }}</p>
        <p class="uni-color" v-if="!product.sex">请选择</p>
        <van-icon name="arrow" />
      </div>
      <div @click="showBirth = true" class="add-beneficiary-item">
        <p class="title">出生日期</p>
        <p v-if="product.birth">{{ product.birth }}</p>
        <p class="uni-color" v-if="!product.birth">请选择</p>
      </div>
      <div class="add-beneficiary-item">
        <p class="title">证件有效期</p>
        <p
          @click="showDateStart = true"
          class="choose"
          :class="product.dateStart ? '' : 'uni-color'"
        >
          {{ product.dateStart ? product.dateStart : "请选择" }}
        </p>
        <p>至</p>
        <p
          @click="showDateEnd = true"
          class="choose right"
          :class="product.dateEnd ? '' : 'uni-color'"
        >
          {{ product.dateEnd ? product.dateEnd : "请选择" }}
        </p>
      </div>
      <div @click="showNational = true" class="add-beneficiary-item">
        <p class="title">国籍</p>
        <p v-if="product.national">{{ product.national }}</p>
        <p class="uni-color" v-if="!product.national">请选择</p>
        <van-icon name="arrow" />
      </div>
      <div @click="showSelfConcat = true" class="add-beneficiary-item">
        <p class="title">与被保人关系</p>
        <p v-if="product.seltContact">{{ product.seltContact }}</p>
        <p v-if="!product.seltContact" class="uni-color">请选择</p>
        <van-icon name="arrow" />
      </div>
      <div @click="showBeneficialOrder = true" class="add-beneficiary-item">
        <p class="title">受益顺序</p>
        <p v-if="product.beneficialOrder">{{ product.beneficialOrder }}</p>
        <p v-if="!product.beneficialOrder" class="uni-color">请选择</p>
        <van-icon name="arrow" />
      </div>
      <div class="add-beneficiary-item">
        <p class="title">受益份额</p>
        <input
          v-model="product.beneficialQuota"
          placeholder="请输入"
          type="text"
        />
      </div>
    </div>
    <div class="foot-btn">
      <p @click="$router.push('/addbeneficiary')" class="page-double-btn1">
        确定
      </p>
      <p @click="$router.go(-1)" class="page-double-btn2">返回</p>
    </div>
    <!-- 受益人顺序 -->
    <van-popup position="bottom" v-model="showBeneficialOrder">
      <van-picker
        title="请选择"
        show-toolbar
        :columns="beneficialOrder"
        @cancel="showBeneficialOrder = false"
        @confirm="chooseBeneficiaryOrder"
        value-key="name"
      />
    </van-popup>
    <!-- 受益人类型 -->
    <van-popup position="bottom" v-model="showAddType">
      <van-picker
        title="请选择"
        show-toolbar
        :columns="beneficiary"
        @confirm="chooseBeneficiary"
        @cancel="showAddType = false"
        value-key="name"
      />
    </van-popup>
    <!-- 性别 -->
    <van-popup position="bottom" v-model="showSex">
      <van-picker
        title="请选择"
        show-toolbar
        @confirm="chooseSex"
        :columns="showSexArr"
        @cancel="showSex = false"
        value-key="name"
      />
    </van-popup>
    <!-- 证件类型 -->
    <van-popup position="bottom" v-model="showCredentials">
      <van-picker
        @confirm="chooseCredentials"
        value-key="name"
        title="请选择"
        show-toolbar
        :columns="credentials"
        @cancel="showCredentials = false"
      />
    </van-popup>
    <!-- 与被保人关系 -->
    <van-popup position="bottom" v-model="showSelfConcat">
      <van-picker
        value-key="name"
        title="请选择"
        show-toolbar
        :columns="selfConcat"
        @confirm="chooseSelfContact"
        @cancel="showSelfConcat = false"
      />
    </van-popup>
    <!-- 出生时间 -->
    <van-popup position="bottom" v-model="showBirth">
      <van-datetime-picker
        title="请选择"
        show-toolbar
        @confirm="chooseBirth"
        @cancel="showBirth = false"
        :formatter="formatter"
        :min-date="minDate"
        type="date"
        v-model="currentDate"
      />
    </van-popup>
    <!-- 开始时间 -->
    <van-popup position="bottom" v-model="showDateStart">
      <van-datetime-picker
        title="请选择"
        show-toolbar
        @cancel="showDatePicker = false"
        :formatter="formatter"
        :min-date="minDate"
        type="date"
        v-model="currentDate"
        @confirm="chooseStartDate"
      />
    </van-popup>
    <!-- 结束时间 -->
    <van-popup position="bottom" v-model="showDateEnd">
      <van-datetime-picker
        title="请选择"
        show-toolbar
        @cancel="showDatePicker = false"
        :formatter="formatter"
        :min-date="minDate"
        type="date"
        v-model="currentDate"
        @confirm="chooseStartEnd"
      />
    </van-popup>
    <!-- 国籍 -->
    <van-popup position="bottom" v-model="showNational">
      <van-picker
        value-key="name"
        title="请选择"
        show-toolbar
        :columns="national"
        @cancel="showNational = false"
        @confirm="chooseNational"
      />
    </van-popup>
  </div>
</template>

<script>
import {
  beneficialOrder,
  credentials,
  sex,
  national,
  selfConcat,
  beneficiary,
} from "@/assets/pickerData/pickerData";
import { msToDate } from "@/assets/common/date";
export default {
  name: "addbeneficiary",
  components: {},
  data() {
    return {
      showCredentials: false,
      showSelfConcat: false,
      showBeneficiary: false,
      showAddType: false,
      showSex: false,
      showBirth: false,
      showDateStart: false,
      showDateEnd: false,
      showBeneficialOrder: false,
      showNational: false,
      showSexArr: sex,
      credentials: credentials,
      selfConcat: selfConcat,
      beneficiary: beneficiary,
      beneficialOrder: beneficialOrder,
      national: [],
      currentDate: new Date(),
      minDate: new Date(1500, 0),
      product: {
        showAddType: "",
        credentials: "",
        sex: "",
        birth: "",
        dateStart: "",
        dateEnd: "",
        national: "",
        seltContact: "",
        beneficialOrder: "",
        beneficialQuota: "",
      },
      productCode: {
        showAddType: "",
        credentials: "",
        sex: "",
        birth: "",
        dateStart: "",
        dateEnd: "",
        national: "",
        seltContact: "",
        beneficialOrder: "",
        beneficialQuota: "",
      },
    };
  },
  methods: {
    // 受益人顺序
    chooseBeneficiaryOrder(item) {
      this.product["beneficialOrder"] = item.name;
      this.productCode["beneficialOrder"] = item.code;
      this.showBeneficialOrder = false;
    },
    // 与被保人关系
    chooseSelfContact(item) {
      this.product["seltContact"] = item.name;
      this.productCode["seltContact"] = item.code;
      this.showSelfConcat = false;
    },
    // 国籍
    chooseNational(item) {
      this.product["national"] = item.name;
      this.productCode["national"] = item.code;
      this.showNational = false;
    },
    // 开始时间、结束时间
    chooseStartDate(item) {
      this.product["dateStart"] = msToDate(item);
      this.showDateStart = false;
    },
    chooseStartEnd(item) {
      this.product["dateEnd"] = msToDate(item);
      this.showDateEnd = false;
    },
    // 出生日期
    chooseBirth(item) {
      this.product.birth = msToDate(item);
      this.showBirth = false;
    },
    // 性别
    chooseSex(item) {
      this.product["sex"] = item.name;
      this.productCode["sex"] = item.code;
      this.showSex = false;
    },
    // 证件类型
    chooseCredentials(item) {
      this.product["credentials"] = item.name;
      this.productCode["credentials"] = item.code;
      this.showCredentials = false;
    },
    // 受益人类型
    chooseBeneficiary(item) {
      this.product["showAddType"] = item.name;
      this.productCode["showAddType"] = item.code;
      this.showAddType = false;
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
  created() {
    this.national = national();
  },
};
</script>
<style scoped lang='less'>
.addbeneficiary {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  .uni-color {
    color: #999;
  }
  .add-beneficiary-wrap {
    padding-left: 40px;
    background: white;
    .add-beneficiary-item:last-child {
      border-bottom: none;
    }
    .add-beneficiary-item {
      position: relative;
      height: 104px;
      display: flex;
      width: 100%;
      align-items: center;
      border-bottom: 1px solid #d5d5d5;
      .choose {
        width: 460px;
      }
      .right {
        text-align: right;
        padding-right: 40px;
      }

      .van-icon-arrow {
        position: absolute;
        right: 40px;
        color: #999;
        font-size: 32px;
      }
    }
  }
}
</style>
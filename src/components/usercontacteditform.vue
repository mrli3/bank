<template>
  <div class="usercontacteditform">
    <div class="tab-wrap">
      <div class="tab-item">
        <p class="title">姓名</p>
        <p v-if="type == 0">{{ product.AppntName }}</p>
      </div>
      <div class="tab-item">
        <p class="title">手机号码</p>
        <input
          v-model="product.Mobile"
          maxlength="11"
          placeholder="请输入"
          type="text"
        />
      </div>
      <div class="tab-item get-code">
        <input
          v-model="product.code"
          placeholder="请填写手机验证码"
          type="text"
        />
        <p>获取验证码</p>
      </div>
      <div @click="showCensusRegister = true" class="tab-item">
        <p class="title">联系地址</p>
        <p v-if="product.areaCode && product.areaCode.length" class="register">
          <span v-for="(item, index) in product.areaCode" :key="index">{{
            item.name
          }}</span>
        </p>
        <p
          class="uni-color"
          v-if="product.areaCode && !product.areaCode.length"
        >
          请选择
        </p>
        <van-icon name="arrow" />
      </div>
      <div class="tab-item input">
        <input
          v-model="product.PostalAddress"
          maxlength="60"
          placeholder="详细地址"
          type="text"
        />
      </div>
      <div class="tab-item">
        <p class="title">邮编</p>
        <input v-model="product.ZipCode" placeholder="请填写" type="text" />
      </div>
      <div class="tab-item">
        <p class="title">电子邮箱</p>
        <input v-model="product.Email" placeholder="请填写" type="text" />
      </div>
      <div class="tab-item">
        <p class="title">住宅电话</p>
        <input v-model="product.HomePhone" placeholder="请填写" type="text" />
      </div>
      <div class="tab-item">
        <p class="title">办公电话</p>
        <input
          v-model="product.CompanyPhone"
          placeholder="请填写"
          type="text"
        />
      </div>
      <div @click="showNational = true" class="tab-item">
        <p class="title">境外地址</p>
        <p>{{ product.nationalText }}</p>
        <p class="uni-color" v-show="!product.nationalText">请选择</p>
      </div>
      <div class="tab-item input">
        <input
          v-model="product.nationalAddress"
          placeholder="详细地址"
          type="text"
        />
      </div>
      <div class="tab-item">
        <p class="title">国外联系电话</p>
        <input
          v-model="product.nationalMobile"
          placeholder="请填写"
          type="text"
        />
      </div>
    </div>

    <!-- 联系地址选择 -->
    <van-popup position="bottom" v-model="showCensusRegister">
      <van-area
        @confirm="chooseArea"
        title="请选择"
        :area-list="areaList"
        value="110101"
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
  </div>
</template>

<script>
import are from "@/assets/common/area";
import { national } from "@/assets/pickerData/pickerData";
export default {
  name: "usercontacteditform",
  data() {
    return {
      areaList: are,
      nationalArr: [],
      showCensusRegister: false,
      showNational: false,
      productCode: {},
    };
  },
  props: {
    type: {
      type: Number,
      default: 0,
    },
    product: {
      type: Object,
      default: {},
    },
    policyList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  methods: {
    // 国籍选择
    chooseNational(item) {
      this.product["nationalText"] = item.name;
      this.productCode["nationalText"] = item.code;
      this.showNational = false;
    },
    chooseArea(item) {
      this.product["areaCode"] = item;
      this.showCensusRegister = false;
    },
    dataGroup() {},
  },
  created() {
    this.nationalArr = national();
  },
};
</script>
<style scoped lang='less'>
.usercontacteditform {
  .tab-wrap {
    padding-left: 30px;
    font-size: 28px;
    background: white;
  }
  .tab-item:last-child {
    border-bottom: none;
  }
  .get-code {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    box-sizing: border-box;
    p {
      width: 204px;
      height: 56px;
      border: 1px solid #e02d47;
      border-radius: 45px;
      color: #e02d47;
      line-height: 56px;
      text-align: center;
    }
  }
  .tab-item {
    width: 100%;
    height: 104px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
    position: relative;
    .uni-color {
      color: #999;
    }
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
  .van-icon-arrow {
    position: absolute;
    right: 20px;
    color: #999;
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
  .input {
    padding-left: 240px;
    box-sizing: border-box;
    input {
      width: 360px;
    }
  }
  input::-webkit-input-placeholder {
    font-size: 28px;
    width: 100%;
  }

  .van-tabs__line {
    width: 334px;
  }
  .van-tabs__wrap {
    height: 100px;
  }
}
</style>
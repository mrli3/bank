<template>
  <div class="accidentInfoInput">
    <div class="changemode-wrap">
      <div class="changemode-item">
        <p class="title"><span>*</span> 与出险人关系</p>
        <div class="applacationSelfConcat">
          <p v-for="(item, index) in applacationSelfConcat" :key="index">
            {{ item.name }}
          </p>
        </div>
      </div>
      <div class="changemode-item">
        <p class="title">申请人姓名</p>
        <input placeholder="请输入" type="text" />
      </div>
      <div @click="showMode = true" class="changemode-item">
        <p class="title">证件类型</p>
        <p class="arrow">
          <span v-if="product.mode">{{ product.mode }}</span>
          <span class="uni-color" v-if="!product.mode">请选择</span>
        </p>
        <van-icon name="arrow" />
      </div>
      <div class="changemode-item">
        <p class="title">证件号码</p>
        <p class="arrow">
          <span v-if="product.mode">{{ product.idNumber }}</span>
          <input type="text" placeholder="请输入或者直接扫描证件" />
        </p>
        <van-icon name="scan" />
      </div>
      <div class="changemode-item">
        <p class="title">职业</p>
        <input type="text" placeholder="请输入" />
      </div>
      <div @click="showNowRegister = true" class="changemode-item">
        <p class="title">联系住址</p>
        <p class="register">
          <span v-for="(item, index) in product.nowRegisterText" :key="index">{{
            item.name
          }}</span>
        </p>
        <p v-if="!product.nowRegisterText.length" class="uni-color">请选择</p>
        <van-icon name="arrow" />
      </div>
      <div class="changemode-item input">
        <input v-model="product.address" placeholder="详细地址" type="text" />
      </div>
    </div>

    <div class="next-step">
      <p
        @click="$router.push('/uploadApplacationFile')"
        class="page-single-btn"
      >
        下一步
      </p>
    </div>
    <!-- 证件类型 -->
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
    <!-- 户籍选择 -->
    <van-popup position="bottom" v-model="showNowRegister">
      <van-area
        @confirm="chooseRegister"
        title="请选择"
        :area-list="areaList"
        value="110101"
      />
    </van-popup>
  </div>
</template>

<script>
import {
  applacationSelfConcat,
  credentials,
} from "@/assets/pickerData/pickerData";
import are from "@/assets/common/area";

export default {
  name: "editbonus",
  components: {},
  data() {
    return {
      applacationSelfConcat: applacationSelfConcat,
      showModeArr: credentials,
      showNowRegister: false,
      showMode: false,
      areaList: are,

      product: {
        mode: "",
        Register: "",
        address: "",
        idNumber: "",
        nowRegisterText: "",
      },
      productCode: {
        Register: "",
      },
    };
  },
  methods: {
    // 户籍选择
    chooseRegister(item) {
      this.product["nowRegisterText"] = item;
      this.productCode["nowRegisterText"] = item.map((item) => {
        return item.code;
      });
      this.showNowRegister = false;
    },
    chooseMode(item) {
      this.product["mode"] = item.name;
      this.showMode = false;
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
    .changemode-item:first-child {
      align-items: baseline;
    }
    .changemode-item {
      padding: 32px 40px 32px 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #d5d5d5;
      position: relative;
      .register {
        span {
          margin-right: 10px;
        }
      }
      .applacationSelfConcat {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .active {
          color: #e02d47;
          background: #fff4f6;
          border: 1px solid #e02d47;
        }
        p {
          padding: 8px 36px;
          color: #999;
          border: 1px solid #d5d5d5;
          border-radius: 35px 35px 35px 35px;
          margin-bottom: 30px;
        }
        p:last-child {
          margin: 0;
        }
      }
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
      .van-icon-scan {
        font-size: 40px;
        color: #e02d47;
        font-weight: 600;
      }
    }
  }
}
</style>
<template>
  <div class="editbonus">
    <div class="changemode-wrap">
      <div class="changemode-item">
        <p class="title">出险人姓名</p>
        <input
          v-model="product.name"
          placeholder="请输入出险人姓名"
          type="text"
        />
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
        <input
          v-model="product.id"
          placeholder="请输入保单预留证件号码"
          type="text"
        />
      </div>
    </div>
    <div class="next-step">
      <p class="page-single-btn">确定</p>
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
  </div>
</template>

<script>
import { credentials } from "@/assets/pickerData/pickerData";
export default {
  name: "editbonus",
  components: {},
  data() {
    return {
      showModeArr: credentials,
      showMode: false,
      product: {
        mode: "",
        id: "",
        name: "",
      },
    };
  },
  methods: {
    chooseMode(item) {
      this.product["mode"] = item.name;
      this.showMode = false;
    },
  },
  created() {},
};
</script>
<style scoped lang='less'>
.editbonus {
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
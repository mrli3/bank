<template>
  <div class="editbonus">
    <div class="changemode-wrap">
      <div class="changemode-item">
        <p class="title">原红利领取方式</p>
        <p class="uni-color">累积生息</p>
      </div>
      <div @click="showMode = true" class="changemode-item">
        <p class="title">变更后红利领取方式</p>
        <p class="arrow">
          <span v-if="product.getType">{{ product.getType }}</span>
          <span class="uni-color" v-if="!product.getType">请选择</span>
          <span>
            <van-icon name="arrow" />
          </span>
        </p>
      </div>
    </div>
    <div class="next-step">
      <p class="page-single-btn">下一步</p>
    </div>
    <!-- 方式 -->
    <van-popup position="bottom" v-model="showMode">
      <van-picker
        title="请选择"
        show-toolbar
        value-key="name"
        :columns="showModeArr"
        @cancel="showMode = false"
        @confirm="chooseMode"
      />
    </van-popup>
  </div>
</template>

<script>
import { editbonus } from "@/assets/pickerData/pickerData";
export default {
  name: "editbonus",
  components: {},
  data() {
    return {
      showModeArr: editbonus,
      showMode: false,
      product: {
        getType: "",
      },
      productCode: {
        getType: "",
      },
    };
  },
  methods: {
    chooseMode(item) {
      this.product["getType"] = item.name;
      this.productCode["getType"] = item.code;
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
  .uni-color {
    color: #999;
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
      justify-content: space-between;
      border-bottom: 1px solid #d5d5d5;
      .uni-color {
        color: #999;
      }
      .arrow {
        display: flex;
        align-items: center;
        .van-icon {
          font-size: 32px;
          margin-top: 10px;
        }
        span:nth-of-type(1) {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="changemode">
    <div class="changemode-wrap">
      <div class="changemode-item">
        <p class="title">原保费逾期未处理方式</p>
        <p>自动垫交</p>
      </div>
      <div @click="showMode = true" class="changemode-item">
        <p class="title">变更后保费逾期未处理方式</p>
        <p class="arrow">
          <span v-if="product.mode">{{ product.mode }}</span>
          <span v-if="!product.mode" class="uni-color">请选择</span>
          <span>
            <van-icon name="arrow" />
          </span>
        </p>
      </div>
    </div>
    <!-- 方式 -->
    <van-popup position="bottom" v-model="showMode">
      <van-picker
        title="请选择"
        show-toolbar
        value-key="name"
        :columns="showModeArr"
        @confirm="chooseMode"
        @cancel="showMode = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { expectedUnhandled } from "@/assets/pickerData/pickerData";
export default {
  name: "changemode",
  components: {},
  data() {
    return {
      showModeArr: expectedUnhandled,
      showMode: false,
      product: {
        mode: "",
      },
      productCode: {
        mode: "",
      },
    };
  },
  methods: {
    chooseMode(item) {
      this.product["mode"] = item.name;
      this.productCode["mode"] = item.code;
      this.showMode = false;
    },
  },

  created() {},
};
</script>
<style scoped lang='less'>
.changemode {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
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
<template>
  <div class="policynumbercheck">
    <div class="changemode-wrap">
      <div class="changemode-item">
        <p class="title">出险人姓名</p>
        <input
          v-model="product.name"
          placeholder="请输入出险人姓名"
          type="text"
        />
      </div>

      <div class="changemode-item">
        <p class="title">保单号码</p>
        <input
          v-model="product.id"
          placeholder="请输入您申请理赔的保单号码"
          type="text"
        />
      </div>
    </div>
    <div class="next-step">
      <p class="page-single-btn">确定</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "policynumbercheck",
  components: {},
  data() {
    return {
      product: {
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
.policynumbercheck {
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
<template>
  <div class="changefrequency">
    <div class="changemode-wrap">
      <div @click="showMode = true" class="changemode-item">
        <p class="title">验证方式</p>
        <p class="arrow">
          <span class="uni-color">请选择</span>
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
        :columns="showModeArr"
        @cancel="showMode = false"
        @confirm="chooseMode"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "editbonus",
  components: {},
  data() {
    return {
      showModeArr: ["身份证件验证", "保单号验证", "报案验证"],
      showMode: false,
    };
  },
  methods: {
    chooseMode(item) {
      switch (item) {
        case "身份证件验证":
          this.$router.push("/idcardcheck");
          break;
        case "保单号验证":
          this.$router.push("/policynumbercheck");
          break;
        case "报案验证":
          this.$router.push("/reportsvalidationcheck");
      }
    },
  },
  created() {},
};
</script>
<style scoped lang='less'>
.changefrequency {
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
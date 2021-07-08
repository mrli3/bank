<template>
  <div class="changepaytypeandrenew">
    <div class="changepaytypeandrenew-wrap">
      <div class="link-list">
        <div class="choose-account">
          <p class="choose-title">您可以选择同步变更您名下以下保单的银行账号</p>
          <div class="choose-item">
            <div>
              <img src="@/assets/images/my/product.png" alt="" />
              <p>中国银行 章三（8866）</p>
            </div>
            <van-checkbox
              v-model="checked"
              checked-color="#E02D47"
            ></van-checkbox>
          </div>
          <div class="choose-item">
            <div>
              <img src="@/assets/images/my/product.png" alt="" />
              <p>中国银行 章三（8866）</p>
            </div>
            <van-checkbox
              v-model="checked"
              checked-color="#E02D47"
            ></van-checkbox>
          </div>
          <div class="choose-item">
            <div>
              <img src="@/assets/images/my/product.png" alt="" />
              <p>中国银行 章三（8866）</p>
            </div>
            <van-checkbox color="#E02D47"></van-checkbox>
          </div>
        </div>
      </div>
    </div>
    <div class="next-step">
      <p class="page-single-btn">下一步</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "changepaytypeandrenew",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.changepaytypeandrenew {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  .changepaytypeandrenew-wrap {
    flex: 1;
    overflow-y: scroll;
    .choose-account {
      background: white;
      padding-left: 30px;
      font-size: 28px;
      margin-top: 16px;
      padding-bottom: 40px;
      .choose-title {
        font-size: 32px;
        height: 104px;
        line-height: 104px;
        font-weight: 500;
        border-bottom: 1px solid #d5d5d5;
        margin-bottom: 30px;
      }
      .choose-item:last-child {
        border-bottom: none;
        margin: 0;
      }
      .choose-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        div {
          display: flex;
          align-items: center;
        }
        img {
          width: 28px;
          height: 32px;
          margin-right: 30px;
        }
        // vant checkbox
        .van-checkbox {
          width: 40px;
          height: 40px;
          margin-right: 40px;
          /deep/.van-checkbox__icon,
          /deep/.van-icon {
            width: 40px;
            height: 40px;
            font-size: 32px;
            text-align: center;
            line-height: 42px;
          }
        }
      }
    }
    .link-list {
      .link-title-wrap {
        padding-left: 40px;
        background: white;
      }
      .link-title {
        font-weight: 500;
        height: 104px;
        line-height: 104px;
        border-bottom: 1px solid #d5d5d5;
      }
    }
  }
  .next-step {
    padding-bottom: 60px;
  }
}
</style>
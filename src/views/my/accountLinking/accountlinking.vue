<template>
  <div class="accountlinking">
    <div class="account-wrap">
      <div v-if="showAnounce" class="account-anounce">
        <img src="@/assets/images/my/anounce.png" alt="" />
        <p>请选择您需要关联的账号</p>
        <van-icon @click="showAnounce = false" name="cross" />
      </div>
      <div class="link-list">
        <div class="link-title-wrap">
          <div class="link-title">万能关联账户列表</div>
        </div>
        <div class="account-wrap">
          <div class="account-item">
            <div class="choose-account">
              <van-checkbox
                v-model="checked"
                checked-color="#e02d47"
              ></van-checkbox>
              <div>
                <p>中银慧心宝保险</p>
                <p>保单号：<span>00013154886</span></p>
              </div>
            </div>
            <p>已关联</p>
          </div>
          <div class="account-item">
            <div class="choose-account">
              <van-checkbox
                v-model="checked"
                checked-color="#e02d47"
              ></van-checkbox>
              <div>
                <p>中银慧心宝保险</p>
                <p>保单号：<span>00013154886</span></p>
              </div>
            </div>
            <p>已关联</p>
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
  name: "accountlinking",
  components: {},
  data() {
    return {
      showAnounce: true,
      checked: false,
    };
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.accountlinking {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  .account-wrap {
    flex: 1;
    overflow-y: scroll;
    .link-list {
      .account-wrap {
        padding-left: 40px;
        background: white;
        .account-item:last-child {
          border: none;
        }
        .account-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #d5d5d5;
          height: 160px;
          margin-bottom: 16px;
          & > p {
            margin-right: 40px;
            color: white;
            background: #f56200;
            padding: 5px 10px;
          }
          .choose-account {
            display: flex;
            align-items: center;
            & > div:nth-of-type(2) {
              p {
                line-height: 60px;
                span {
                  color: #999;
                }
              }
            }
          }
        }
      }

      .link-title-wrap {
        padding-left: 40px;
        background: white;
      }
      .link-title {
        font-size: 32px;
        font-weight: 500;
        height: 104px;
        line-height: 104px;
        border-bottom: 1px solid #d5d5d5;
      }
    }
    .account-anounce {
      height: 40px;
      padding-left: 40px;
      display: flex;
      align-items: center;
      background: rgba(245, 98, 0, 0.05);
      position: relative;
      font-size: 24px;
      color: #999;
      .van-icon {
        position: absolute;
        right: 40px;
        color: #999;
      }
      img {
        width: 30px;
        height: 30px;
        margin-right: 20px;
      }
    }
  }
  .next-step {
    padding-bottom: 60px;
  }
}
</style>
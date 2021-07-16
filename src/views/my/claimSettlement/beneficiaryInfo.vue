<template>
  <div class="beneficiaryInfo">
    <div class="file-wrap">
      <div class="file-item">
        <div class="file-item-top">
          <div class="file-item-top-left">
            <img src="@/assets/images/index/idCard.png" alt="" />
            <p>户籍、身份、关系证明</p>
          </div>
        </div>
        <div class="file-introduce">领款银行卡或存折（卡号清晰）</div>
        <van-uploader>
          <img src="@/assets/images/index/camera.png" alt="" />
          <p>出险人身份证正面</p>
        </van-uploader>
      </div>
    </div>
    <div class="next-step">
      <p class="page-single-btn">确定</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "beneficiaryInfo",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.beneficiaryInfo {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  .file-wrap {
    .file-item {
      padding: 28px 0 28px 40px;
      background: white;
      margin-bottom: 16px;
      /deep/ .van-uploader {
        background: #f4f4f4;
        width: 320px;
        height: 200px;
        margin-top: 30px;
        border-radius: 20px;
        img {
          width: 80px;
          height: 80px;
          margin-bottom: 30px;
        }
        .van-uploader__wrapper {
          height: 100%;
        }
        .van-uploader__input-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          & > p {
            color: #e02d47;
          }
        }
      }
      .file-introduce {
        width: 670px;
        color: #999;
        margin-top: 30px;
      }
      .file-item-top-left {
        display: flex;
        font-size: 32px;
        font-weight: 500;
        img {
          width: 64px;
          height: 48px;
          margin-right: 30px;
        }
      }
      .file-item-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > img {
          width: 130px;
          height: 64px;
        }
      }
    }
  }
  .next-step {
    position: fixed;
    bottom: 60px;
    left: 0;
    right: 0;
  }
}
</style>
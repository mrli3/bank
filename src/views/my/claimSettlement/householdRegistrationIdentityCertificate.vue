<template>
  <div class="householdRegistrationIdentityCertificate">
    <div class="centificate-wrap">
      <div class="centificate-top">
        <div class="top-title">
          <img src="@/assets/images/index/idCard.png" alt="" />
          <p>户籍、身份、关系证明</p>
        </div>
        <div class="text-con">
          出险人有效身份证明（正反面）<br />
          如为监护人申请，还需上传监护人有效身份证明（正反面）和监护关系证明
        </div>
      </div>
      <div class="upload-file">
        <div class="upload-title">出险人</div>
        <div class="upload-item">
          <van-uploader>
            <img src="@/assets/images/index/camera.png" alt="" />
            <p>出险人身份证正面</p>
          </van-uploader>
          <van-uploader>
            <img src="@/assets/images/index/camera.png" alt="" />
            <p>出险人身份证反面</p>
          </van-uploader>
        </div>
        <div class="upload-title">监护人</div>
        <div class="upload-item">
          <van-uploader>
            <img src="@/assets/images/index/camera.png" alt="" />
            <p>监护人身份证正面</p>
          </van-uploader>
          <van-uploader>
            <img src="@/assets/images/index/camera.png" alt="" />
            <p>监护人身份证反面</p>
          </van-uploader>
          <van-uploader class="last-child">
            <img src="@/assets/images/index/camera.png" alt="" />
            <p>监护关系证明</p>
          </van-uploader>
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
  name: "householdRegistrationIdentityCertificate",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.householdRegistrationIdentityCertificate {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  .centificate-wrap {
    padding: 28px 40px;
    background: white;
    .centificate-top {
      margin-bottom: 30px;
      .text-con {
        color: #999;
        line-height: 44px;
      }
      .top-title {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        font-weight: 500;

        img {
          width: 64px;
          height: 46px;
          margin-right: 30px;
        }
      }
    }
    .upload-file {
      .upload-title {
        margin: 30px 0;
      }
      .upload-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        img {
          width: 80px;
          height: 80px;
          margin-bottom: 30px;
        }
        .last-child {
          margin-top: 30px;
        }
        /deep/ .van-uploader {
          border-radius: 20px;
          background: #f4f4f4;
          width: 320px;
          height: 200px;
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
      }
    }
  }
}
</style>
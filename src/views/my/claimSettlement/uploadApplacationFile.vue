<template>
  <div class="uploadApplacationFile">
    <div class="file-wrap">
      <div @click="$router.push('')" class="file-item">
        <div class="file-item-top">
          <div class="file-item-top-left">
            <img src="@/assets/images/index/idCard.png" alt="" />
            <p>户籍、身份、关系证明</p>
          </div>
          <img src="@/assets/images/index/uploadtwo.png" alt="" />
        </div>
        <div class="file-introduce">
          出险人有效身份证明（正反面）
          如为监护人申请，还需上传监护人有效身份证明（正反面）和监护关系证明
        </div>
      </div>
      <div class="file-item">
        <div class="file-item-top">
          <div class="file-item-top-left">
            <img src="@/assets/images/index/idCard.png" alt="" />
            <p>受益人账户资料</p>
          </div>
          <img src="@/assets/images/index/uploadone.png" alt="" />
        </div>
        <div class="file-introduce">领款银行卡或存折（卡号清晰）</div>
      </div>
      <div class="file-item">
        <div class="file-item-top">
          <div class="file-item-top-left">
            <img src="@/assets/images/index/idCard.png" alt="" />
            <p>理赔医疗资料</p>
          </div>
          <img src="@/assets/images/index/uploadone.png" alt="" />
        </div>
        <div class="file-introduce">
          门/急诊病历、住院病历、出院小结 病理/血液/影像等重疾确诊检查报告
        </div>
      </div>
    </div>
    <div class="next-step">
      <p @click="$router.push('/accidentInfoInput')" class="page-single-btn">
        确定
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "uploadApplacationFile",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.uploadApplacationFile {
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
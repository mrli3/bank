<template>
  <div class="preview-list">
    <div class="announcement">
      <p>
        <img src="@/assets/images/previewList/announcement.png" alt="" />
      </p>
      <div>
        <p>请选择您的保单后点击 “查看详情”</p>
        <p>
          自2017年11月起承保的合同可正常进行预览，新承保保单可能出现延迟，请稍后刷新页面
        </p>
      </div>
    </div>
    <div class="preview-item-wrap">
      <div class="previewlist-item">
        <p>· 000130916327188</p>
        <p>中银三星中银家传终身寿险</p>
        <div class="item-status">
          <div class="item-status-con">
            <p>保单状态</p>
            <p>有效</p>
          </div>
          <div class="item-status-con">
            <p>期交保费(元)</p>
            <p>2015</p>
          </div>
          <div class="item-status-con">
            <p>保单生效日</p>
            <p>2018/10/10</p>
          </div>
        </div>
        <p class="applicant">投保人：李丽丽 / 张文</p>
        <div class="preview-item-foot">
          <p @click="acknowledgementReceipt">
            <img src="@/assets/images/previewList/receipt.png" alt="" />
            <span>回执签收</span>
          </p>
          <p @click="lookPolicyDetails">
            <img src="@/assets/images/previewList/lookmain.png" alt="" />
            <span>查看详情</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "preveiwList",
  components: {},
  data() {
    return {};
  },
  methods: {
    // 查看详情
    lookPolicyDetails() {
      this.$router.push("/policydetails");
    },
    // 回执签收
    acknowledgementReceipt() {
      this.$router.push("/acknowledgementreceipt");
    },
  },
  created() {},
};
</script>
<style scoped lang='less'>
.preview-list {
  background: #f4f4f4;
  height: 100%;
  .announcement {
    height: 133px;
    background: rgba(245, 98, 0, 0.05);
    display: flex;
    font-size: 24px;
    padding-left: 30px;
    padding-top: 21px;
    margin-bottom: 24px;
    p:nth-of-type(2) {
      width: 628px;
    }
    img {
      width: 38px;
      height: 32px;
      margin-right: 20px;
      margin-top: 10px;
    }
  }
  .preview-item-wrap {
    padding: 0 30px;
    .previewlist-item {
      width: 100%;
      background: white;
      padding-top: 28px;
      padding-left: 26px;
      padding-right: 26px;
      padding-bottom: 24px;
      box-sizing: border-box;
      & > p:nth-of-type(1) {
        font-size: 24px;
        margin-bottom: 21px;
      }
      & > p:nth-of-type(2) {
        font-size: 30px;
        margin-bottom: 47px;
      }
      .item-status {
        display: flex;
        justify-content: space-between;
        margin-bottom: 28px;
        .item-status-con {
          width: 202px;
          box-sizing: border-box;
          height: 120px;
          border-radius: 4px;
          background: rgba(244, 244, 244, 0.5);
          padding-top: 24px;
          padding-left: 20px;
          p:nth-of-type(1) {
            font-size: 22px;
            color: #666666;
            margin-bottom: 10px;
          }
          p:nth-of-type(2) {
            font-size: 28px;
            font-weight: 500;
          }
        }
      }
      .applicant {
        border-bottom: 1px solid #e5e5e5;
        font-size: 24px;
        height: 60px;
        margin-bottom: 20px;
        color: #999999;
      }
      .preview-item-foot {
        display: flex;
        justify-content: flex-end;
        p {
          width: 150px;
          height: 48px;
          background: #e02d47;
          border-radius: 24px;
          font-size: 22px;
          text-align: center;
          line-height: 48px;
          padding-left: 20px;
          position: relative;
          color: white;
          img {
            width: 18px;
            height: 22px;
            position: absolute;
            left: 22px;
            top: 13px;
          }
        }
        p:nth-of-type(1) {
          margin-right: 30px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="policy-details">
    <div class="policy-info">
      <p>保单基础信息</p>
      <div>
        <p>保单号</p>
        <p>000130916327188</p>
      </div>
      <div>
        <p>生效日期</p>
        <p>2018-10-10</p>
      </div>
      <div>
        <p>保单状态</p>
        <p>承保</p>
      </div>
      <div>
        <p>合同打印日期</p>
        <p>2018-10-09</p>
      </div>
    </div>
    <div class="lookcontract">
      <div>
        <img src="@/assets/images/index/contract.png" alt="" />
        <span>合同查看</span>
      </div>
      <div>
        <p>点击此处</p>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="action-btn">
      <div @click="$router.go(-1)">关闭</div>
      <div>合同下载</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "policyDetails",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.policy-details {
  background: #f4f4f4;
  height: 100%;
  .policy-info {
    padding-top: 40px;
    padding-left: 40px;
    padding-bottom: 40px;
    margin-bottom: 24px;
    background: white;
    & > p:nth-of-type(1) {
      font-size: 32px;
      border-left: 8px solid #e02d47;
      height: 30px;
      line-height: 30px;
      padding-left: 10px;
      font-weight: 500;
      margin-bottom: 30px;
    }
    div {
      font-size: 28px;
      display: flex;
      margin-bottom: 16px;
      p:nth-of-type(1) {
        width: 218px;
        color: #666666;
      }
    }
    div:nth-of-type(3),
    div:nth-of-type(4) {
      p:nth-of-type(2) {
        font-weight: 500;
      }
    }
  }
  .lookcontract {
    display: flex;
    justify-content: space-between;
    padding: 29px 40px;
    background: white;
    margin-bottom: 154px;
    div {
      display: flex;
      align-items: center;
      color: #333333;
      img {
        width: 50px;
        height: 50px;
        margin-right: 12px;
      }
    }
    div:nth-of-type(1) {
      font-size: 28px;
    }
    div:nth-of-type(2) {
      color: #666666;
      font-size: 30px;
      p:nth-of-type(1) {
        margin-right: 17px;
      }
    }
  }
  .action-btn {
    padding: 0 70px;
    display: flex;
    justify-content: space-between;
    div {
      width: 280px;
      height: 80px;
      border-radius: 50px 50px 50px 50px;
      text-align: center;
      line-height: 80px;
      box-sizing: border-box;
      font-size: 34px;
    }
    div:nth-of-type(1) {
      border: 1px solid #e02d47;
      color: #e02d47;
    }
    div:nth-of-type(2) {
      background: #e02d47;
      color: white;
    }
  }
}
</style>
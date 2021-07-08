<template>
  <div class="changeregularpremium">
    <div class="payinsurance-wrap">
      <div class="payinsurance-form">
        <div class="payinsurance-item">
          <p>交费频率</p>
          <p>年交</p>
        </div>
        <div class="payinsurance-item">
          <p>原期交保费</p>
          <p>20000元</p>
        </div>
        <div class="payinsurance-item">
          <p>变更后期交保费</p>
          <p>10000元</p>
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
  name: "changeregularpremium",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.changeregularpremium {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  .payinsurance-form {
    background: white;
    padding-left: 40px;
    .payinsurance-item:last-child {
      border: none;
      p:last-child {
        color: #222;
      }
    }
    .payinsurance-item {
      border-bottom: 1px solid #d5d5d5;
      height: 104px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p:nth-of-type(2) {
        margin-right: 40px;
        color: #999;
      }
      input {
        margin-right: 40px;
        text-align: right;
      }
    }
  }
  .payinsurance-wrap {
    flex: 1;
    overflow-y: scroll;
  }
  .next-step {
    padding-bottom: 60px;
  }
}
</style>
<template>
  <div class="terminatecontract">
    <div class="tab-wrap">
      <div class="tab-item">
        <p class="title">保单号</p>
        <p class="title-right">AP121319423482352</p>
      </div>
      <div class="tab-item">
        <p class="title">险种代码</p>
        <p class="title-right">6024</p>
      </div>
      <div class="tab-item">
        <p class="title">险种名称</p>
        <p class="title-right">中银乐享今生终身养老金</p>
      </div>
      <div class="tab-item">
        <p class="title">险种保费</p>
        <p class="title-right">1000.00元</p>
      </div>
      <div class="tab-item">
        <p class="title">投保人</p>
        <p class="title-right">张三</p>
      </div>
      <div class="tab-item">
        <p class="title">保单年度</p>
        <p class="title-right">2019</p>
      </div>
      <div class="tab-item">
        <p class="title">保单生效日期</p>
        <p class="title-right">2019。06.03</p>
      </div>
      <div class="tab-item">
        <p class="title">保单状态</p>
        <p class="title-right">有效</p>
      </div>
    </div>
    <div class="expense-breakdown">
      <p class="form-title">费用明细</p>
      <div class="expense-wrap">
        <div class="expense-top">
          <div>
            <img src="@/assets/images/my/product.png" alt="" />
            <p>中银三星中银智富年金保险</p>
          </div>
          <van-checkbox shape="square" checked-color="#E02D47"></van-checkbox>
        </div>
        <div class="premium">
          <p class="title">保费</p>
          <p class="uni-color">10000.00元</p>
        </div>
      </div>
      <div class="expense-wrap">
        <div class="expense-top">
          <div>
            <img src="@/assets/images/my/product.png" alt="" />
            <p>中银三星中银智富年金保险</p>
          </div>
          <van-checkbox shape="square" checked-color="#E02D47"></van-checkbox>
        </div>
        <div class="premium">
          <p class="title">保费</p>
          <p class="uni-color">10000.00元</p>
        </div>
      </div>
      <div class="expense-info">
        <p class="title">退保信息</p>
        <p>试算</p>
      </div>
      <div class="expense-money">
        <p class="title">退保金额</p>
        <p><span>985.00</span>元</p>
      </div>
    </div>
    <div class="other-info">
      <div class="expense-reason">
        <p class="form-title">退保原因</p>
        <div @click="showReason = true" class="expense-main">
          <p class="title">退保原因</p>
          <p v-if="product.expenseReason">{{ product.expenseReason }}</p>
          <p v-if="!product.expenseReason" class="uni-color">请选择</p>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="pay-info">
      <div class="pay-wrap">
        <p class="form-title">支付信息</p>
        <div>
          <p class="title">支付方式</p>
          <p>银行转账</p>
        </div>
        <div>
          <p class="title">账户信息</p>
          <div>
            <p class="active">原账户</p>
            <p>其他账户</p>
          </div>
        </div>
        <div class="account-name">
          <p class="title">账户户名</p>
          <p>张三</p>
        </div>
        <div class="account-name">
          <p class="title">账号</p>
          <p>123456789</p>
        </div>
        <div class="account-name">
          <p class="title">开户行</p>
          <input v-model="product.openBank" placeholder="请输入" type="text" />
        </div>
      </div>
    </div>
    <div class="user-btn">
      <p class="page-double-btn1">下一步</p>
      <p class="page-double-btn2">取消</p>
    </div>
    <!-- 退保原因选择 -->
    <van-popup position="bottom" v-model="showReason">
      <van-picker
        @confirm="chooseReason"
        value-key="name"
        title="请选择"
        show-toolbar
        :columns="expenseReason"
      />
    </van-popup>
  </div>
</template>

<script>
import { insuranceReason } from "@/assets/pickerData/pickerData";

export default {
  name: "terminatecontract",
  components: {},
  data() {
    return {
      expenseReason: insuranceReason,
      showReason: false,
      product: {
        expenseReason: "",
        openBank: "",
      },
      productCode: {
        expenseReason: "",
      },
    };
  },
  methods: {
    chooseReason(item) {
      this.productCode["expenseReason"] = item.code;
      this.product["expenseReason"] = item.name;
      this.showReason = false;
    },
  },
  created() {},
};
</script>
<style scoped lang='less'>
.terminatecontract {
  background: #f4f4f4;
  height: 100%;
  padding-top: 30px;
  box-sizing: border-box;
  .tab-wrap {
    margin-bottom: 16px;
  }
  .uni-color {
    color: #999;
  }
  .expense-breakdown {
    padding-left: 40px;
    background: white;
    font-size: 28px;
    .expense-wrap {
      padding: 26px 0;
    }
    .expense-money {
      display: flex;
      align-items: center;
      height: 104px;
      line-height: 104px;
      justify-content: space-between;
      p:nth-of-type(2) {
        margin-right: 40px;
        span {
          color: #e02d47;
        }
      }
    }
    .expense-info {
      display: flex;
      height: 104px;
      line-height: 104px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #d8d8d8;
      border-top: 1px solid #d8d8d8;
      p:nth-of-type(2) {
        margin-right: 40px;
        background: #ffffff;
        border: 1px solid #e02d47;
        border-radius: 45px;
        width: 160px;
        height: 56px;
        color: #e02d47;
        text-align: center;
        line-height: 56px;
      }
    }
    .expense-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 40px;
      margin-bottom: 30px;
      // vant checkbox
      /deep/.van-checkbox {
        width: 40px;
        height: 40px;
        margin-right: 40px;
        .van-checkbox__icon,
        .van-icon {
          width: 40px;
          height: 40px;
          font-size: 32px;
          text-align: center;
          line-height: 42px;
        }
      }
      div {
        display: flex;
        align-items: center;
      }
      img {
        width: 28px;
        height: 33px;
        margin-right: 17px;
      }
    }
    .premium {
      display: flex;
      align-items: center;
      color: #666;
      p:nth-of-type(1) {
        color: #666;
      }
    }
  }
  .other-info {
    padding-left: 40px;
    background: white;
  }
  .expense-reason {
    margin-top: 16px;
    font-size: 28px;
    background: white;
    .expense-main {
      display: flex;
      height: 104px;
      justify-content: space-between;
      align-items: center;
      padding-right: 40px;
      p:nth-of-type(2) {
        width: 392px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: right;
      }
    }
    .form-title {
      border-bottom: 1px solid #d8d8d8;
    }
  }
  .user-btn {
    padding-top: 30px;
    padding-bottom: 60px;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
  }
  .pay-info {
    background: #f4f4f4;
    padding-top: 16px;
    font-size: 28px;

    .pay-wrap {
      padding-left: 40px;
      background: white;
      & > div:last-child {
        border-bottom: none;
      }
      & > div {
        display: flex;
        align-items: center;
        padding: 32px 0;
        border-bottom: 1px solid #d8d8d8;
        position: relative;
        .van-icon {
          position: absolute;
          right: 40px;
        }
        div {
          display: flex;
          p {
            border-radius: 14px;
            width: 160px;
            height: 56px;
            text-align: center;
            line-height: 56px;
            border-radius: 45px;
            color: #999;
            border: 1px solid #d8d8d8;
            margin-right: 30px;
          }
          .active {
            color: #e02d47;
            background: #fff4f6;
            border: 1px solid #e02d47;
          }
        }
      }
    }
    .form-title {
      background: white;
      border-bottom: 1px solid #d8d8d8;
    }
  }
}
</style>
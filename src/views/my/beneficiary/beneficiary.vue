<template>
  <div class="beneficiary">
    <van-tabs
      title-inactive-color="black"
      title-active-color="#E02D47"
      v-model="active"
    >
      <van-tab title="生存受益人">
        <div class="tab-wrap">
          <div class="tab-items">
            <div class="tab-top">
              <p>受益人姓名</p>
              <div>
                <p>查看/变更</p>
                <p>删除</p>
              </div>
            </div>
            <div class="tab-con">
              <p>受益顺序：第一受益顺序</p>
              <p>收益份额：0.5</p>
            </div>
          </div>
        </div>
        <div class="tab-wrap">
          <div class="tab-items">
            <div class="tab-top">
              <p>受益人姓名</p>
              <div>
                <p>查看/变更</p>
                <p>删除</p>
              </div>
            </div>
            <div class="tab-con">
              <p>受益顺序：第一受益顺序</p>
              <p>收益份额：0.5</p>
            </div>
          </div>
        </div>
        <div class="foot-btn">
          <p @click="$router.push('/addbeneficiary')" class="page-double-btn1">
            新增受益人
          </p>
          <p class="page-double-btn2">返回</p>
        </div>
      </van-tab>
      <van-tab title="身故受益人">
        <div class="tab-wrap">
          <div class="tab-items">
            <div class="tab-top">
              <p>受益人姓名</p>
              <div>
                <p>查看/变更</p>
                <p>删除</p>
              </div>
            </div>
            <div class="tab-con">
              <p>受益顺序：第一受益顺序</p>
              <p>收益份额：0.5</p>
            </div>
          </div>
        </div>
      </van-tab>
      <div class="line"></div>
    </van-tabs>

    <!-- 开始时间 -->
    <van-popup position="bottom" v-model="showDateStart">
      <van-datetime-picker
        title="请选择"
        show-toolbar
        @cancel="showDatePicker = false"
        :formatter="formatter"
        :min-date="minDate"
        type="date"
        v-model="currentDate"
      />
    </van-popup>
    <!-- 结束时间 -->
    <van-popup position="bottom" v-model="showDateEnd">
      <van-datetime-picker
        title="请选择"
        show-toolbar
        @cancel="showDatePicker = false"
        :formatter="formatter"
        :min-date="minDate"
        type="date"
        v-model="currentDate"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "beneficiary",
  components: {},
  data() {
    return {
      active: 0,
      currentDate: new Date(),
      minDate: new Date(1500, 0),
      showDateStart: false,
      showDateEnd: false,
    };
  },
  methods: {
    formatter(type, val) {
      if (type === "year") {
        return val + "年";
      }
      if (type === "month") {
        return val + "月";
      }
      if (type === "day") {
        return val + "日";
      }
      return val;
    },
  },
  created() {},
};
</script>
<style scoped lang='less'>
.beneficiary {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 28px;
  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background: #d8d8d8;
    top: 100px;
  }
  /deep/.van-tabs {
    background: white;
    position: relative;
    .foot-btn {
      display: flex;
      justify-content: center;
      position: fixed;
      bottom: 60px;
      left: 0;
      right: 0;
    }
    .tab-wrap {
      padding-left: 30px;
      font-size: 28px;
      padding-right: 38px;
      background: white;
      margin-bottom: 16px;
      .tab-con {
        padding: 32px 0;
        color: #666;
        p:nth-of-type(1) {
          margin-bottom: 30px;
        }
      }
      .tab-top {
        width: 100%;
        height: 104px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 38px;
        border-bottom: 1px solid #d8d8d8;
        div {
          display: flex;
          align-items: center;
          p:nth-of-type(1) {
            margin-right: 30px;
          }
          p {
            background: #ffffff;
            border: 1px solid #e02d47;
            border-radius: 28px;
            color: #e02d47;
            text-align: center;
            width: 160px;
            height: 56px;
            line-height: 56px;
          }
        }
      }
    }
    .tab-item:last-child {
      border-bottom: none;
    }

    .van-tabs__line {
      width: 334px;
    }
    .van-tabs__content {
      background: #f4f4f4;
      padding-bottom: 160px;
    }
    .van-tabs__wrap {
      height: 100px;
    }
    .van-tab__text--ellipsis {
      line-height: 100px;
      font-size: 32px;
    }
    .van-icon-arrow {
      position: absolute;
      right: 40px;
      color: #999;
    }
  }
  /deep/.van-popup {
    padding-top: 20px;
    .van-picker {
      .van-picker__toolbar {
        width: 100%;
        button {
          font-size: 28px;
        }
      }
      .van-picker__title {
        height: 50px;
        line-height: 50px;
        font-size: 28px;
      }
      .van-picker__columns {
        ul > li {
          font-size: 30px;
        }
      }
      .van-picker__confirm {
        color: #e02d47;
      }
    }
  }
}
</style>
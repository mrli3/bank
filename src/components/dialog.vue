<template>
  <div class="vant-dialog">
    <van-overlay :lock-scroll="false" :show="show" @click="cancel">
      <div class="wrapper" @click.stop>
        <div class="block">
          <van-icon @click="cancel" name="cross" />
          <p class="dialog-title">{{ title }}</p>
          <div class="dialog-content">
            <p v-if="conType == 0" class="dialog-con">{{ content }}</p>
            <div v-if="conType">
              <div v-for="(item, index) in otherCon" :key="index">
                <p class="v-title">{{ item.title }}</p>
                <p
                  v-for="(child, index) in item.con"
                  :key="index"
                  class="v-con"
                >
                  {{ child }}
                </p>
              </div>
            </div>
          </div>
          <div class="btn-ground">
            <p
              @click="confirm"
              :class="
                showCancleBtn ? 'dialog-double-btn1' : 'dialog-single-btn'
              "
            >
              {{ confirmBtnText }}
            </p>
            <p @click="cancel" v-if="showCancleBtn" class="dialog-double-btn2">
              {{ cancelBtnText }}
            </p>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "vant-dialog",
  components: {},
  props: {
    //   显示
    show: {
      type: Boolean,
      default: true,
    },
    // 显示取消按钮
    showCancleBtn: {
      type: Boolean,
      default: true,
    },
    // 弹窗标题
    title: {
      type: String,
      default: "温馨提示",
    },
    // 弹窗内容 conType=0 时有效
    content: {
      type: String,
      default:
        "弹窗具体文字说明弹窗具体文字说明弹窗具体文字说明弹窗具体文字说明弹窗具体文字说明",
    },
    // 弹窗内容 conType=1 时有效
    otherCon: {
      type: Array,
      default: function () {
        return [];
      },
    },
    // 确认按钮文字
    confirmBtnText: {
      type: String,
      default: "确认",
    },
    // 取消按钮文字
    cancelBtnText: {
      type: String,
      default: "取消",
    },
    // 内容类型
    conType: {
      type: Number,
      default: 0, // 0:一般内容  1：带有title
    },
  },
  data() {
    return {};
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    },
  },
  created() {},
};
</script>
<style scoped lang='less'>
.vant-dialog {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 610px;
    padding-bottom: 62px;
    border-radius: 10px;
    background-color: #fff;
    position: relative;
    padding-top: 54px;
    max-height: 1000px;
    overflow-y: scroll;
    .van-icon-cross {
      font-size: 28px;
      color: #999;
      position: absolute;
      right: 50px;
      top: 50px;
      font-weight: 500;
    }
    .btn-ground {
      display: flex;
      justify-content: center;
      margin-top: 60px;
    }
    .dialog-content {
      padding: 0 50px;
      font-size: 32px;
      line-height: 48px;
      color: #222;
      .v-title {
        font-size: 32px;
        color: #222;
        margin: 22px 0;
        font-weight: 500;
      }
      .v-con {
        font-size: 28px;
        line-height: 40px;
        color: #666666;
      }
    }
  }
}
</style>
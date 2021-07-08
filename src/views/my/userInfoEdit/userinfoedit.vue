<template>
  <div class="userInfoEdit">
    <van-tabs
      title-inactive-color="black"
      title-active-color="#E02D47"
      v-model="active"
    >
      <van-tab title="投保人">
        <Form :product="product" ref="product"></Form>
        <div @click="next" class="next-step">
          <p class="page-single-btn">下一步</p>
        </div>
      </van-tab>
      <van-tab title="被保人">
        <Form :product="producted" ref="producted" :type="active"></Form>
        <div class="next-step"><p class="page-single-btn">下一步</p></div>
      </van-tab>
      <div class="line"></div>
    </van-tabs>
  </div>
</template>

<script>
import Form from "@/components/form";
export default {
  name: "userInfoEdit",
  components: { Form },
  data() {
    return {
      active: 0,
      product: {
        name: "product",
      },
      producted: {
        name: "producted",
      },
    };
  },
  methods: {
    next() {
      console.log(this.$refs.product.product);
      console.log(this.$refs.producted.product);
    },
  },
};
</script>
<style scoped lang='less'>
.userInfoEdit {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background: #d8d8d8;
    top: 100px;
  }
  .next-step {
    background: #f4f4f4;
    padding-top: 2px;
    padding-bottom: 30px;
  }
  /deep/.van-tabs {
    background: white;
    position: relative;

    .van-tabs__line {
      width: 334px;
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
      right: 20px;
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
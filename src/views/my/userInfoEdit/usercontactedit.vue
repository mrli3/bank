<template>
  <div class="usercontactedit">
    <van-tabs
      title-inactive-color="black"
      title-active-color="#E02D47"
      v-model="active"
    >
      <van-tab title="投保人">
        <Usercontacteditform></Usercontacteditform>
        <div class="next-step">
          <p class="page-double-btn1" @click="$router.push('/checkMobile')">
            下一步
          </p>
          <p class="page-double-btn2" @click="$router.go(-1)">取消</p>
        </div>
      </van-tab>
      <van-tab title="被保人">
        <Usercontacteditform :type="active"></Usercontacteditform>
        <div class="next-step">
          <p class="page-double-btn1" @click="$router.push('/checkMobile')">
            下一步
          </p>
          <p class="page-double-btn2" @click="$router.go(-1)">取消</p>
        </div>
      </van-tab>
      <div class="line"></div>
    </van-tabs>
  </div>
</template>

<script>
import Usercontacteditform from "@/components/usercontacteditform";
export default {
  name: "usercontactedit",
  components: { Usercontacteditform },
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.usercontactedit {
  background: #f4f4f4;
  height: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    transform: scaleY(-1);
    background: #d8d8d8;
    top: 100px;
  }
  .next-step {
    background: #f4f4f4;
    padding-top: 30px;
    padding-bottom: 60px;
    display: flex;
    justify-content: center;
  }
  /deep/.van-tabs {
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
  }
}
</style>
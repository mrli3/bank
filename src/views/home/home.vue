<template>
  <div class="home">
    <div class="header">
      <!-- <Header></Header> -->
    </div>
    <div class="content">
      <div class="mainCon">
        <transition name="el-fade-in-linear">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
        </transition>
        <transition name="el-fade-in-linear">
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
      </div>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header"; // 头部
import Footer from "@/components/footer"; // 尾部
export default {
  name: "home",
  components: { Header, Footer },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .header {
    // height: 50px;
    // padding: 21px 0;
    margin-left: 10px;
  }
  .footer {
    // height: 98px;
    width: 100%;
    font-size: 24px;
  }
  .content {
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    .mainCon {
      height: 100%;
    }
  }
}
</style>
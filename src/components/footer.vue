<template>
  <div :class="isHeight ? 'iosBottom' : ''" class="footer">
    <div @click="toShop">
      <img
        :src="
          $route.path == '/insuranceShop' ? shopicon.active : shopicon.inactive
        "
        alt=""
      />
      <p
        :style="
          $route.path == '/insuranceShop' ? 'color:#F54320' : 'color:#666666'
        "
      >
        保险商城
      </p>
    </div>
    <p class="line"></p>
    <div @click="toMy">
      <img
        :src="$route.path == '/my' ? myicon.active : myicon.inactive"
        alt=""
      />
      <p :style="$route.path == '/my' ? 'color:#F54320' : 'color:#666666'">
        我的
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "foot",
  components: {},
  data() {
    return {
      active: 0,
      myicon: {
        active: require("@/assets/images/index/my-index.png"),
        inactive: require("@/assets/images/index/my-inactive.png"),
      },
      shopicon: {
        active: require("@/assets/images/index/shop-active.png"),
        inactive: require("@/assets/images/index/shop-inactive.png"),
      },
    };
  },
  computed: {
    ...mapState({
      isHeight: (state) => state.isHeight,
    }),
  },
  methods: {
    toShop() {
      this.$route.path !== "/insuranceShop"
        ? this.$router.push("/insuranceShop")
        : "";
      this.$store.commit("changeMode", "/test");
    },
    toMy() {
      this.$route.path !== "/my" ? this.$router.push("/my") : "";
      this.$store.commit("changeMode", "/api");
    },
  },
  created() {},
  watch: {},
};
</script>
<style scoped lang='less'>
.footer {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #e6e6e6;
  padding: 10px 0;
  .line {
    width: 1px;
    height: 51px;
    background: #e6e6e6;
  }
  div {
    text-align: center;
    flex: 1;
    img {
      width: 39px;
      height: 41px;
    }
  }
}
.iosBottom {
  padding-bottom: 24px;
}
</style>
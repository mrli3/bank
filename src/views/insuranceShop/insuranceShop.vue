<template>
  <div class="shop">
    <div class="shop-search">
      <div class="search-input">
        <input
          placeholder="请输入产品名称搜索"
          v-model="searchValue"
          type="text"
        />
        <img src="@/assets/images/insuranceShop/search.png" alt="" />
        <p>搜索</p>
        <p v-show="searchValue" class="icon-clear">
          <van-icon name="cross" />
        </p>
      </div>
    </div>
    <div class="product-kind"></div>
  </div>
</template>

<script>
export default {
  name: "shop",
  components: {},
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.shop {
  background: #f4f4f4;
  height: 100%;
  .shop-search {
    height: 196px;
    background: linear-gradient(180deg, #e02d47 0%, #f54320 81%, #f4f4f4 100%);
    .search-input {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      color: white;
      img {
        width: 32px;
        height: 32px;
        position: absolute;
        left: 70px;
      }
      .icon-clear {
        width: 24px;
        height: 24px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 170px;
      }
      .van-icon {
        color: white;
        font-size: 12px;
      }
      input {
        width: 490px;
        height: 60px;
        margin-right: 34px;
        border-radius: 30px 30px 30px 30px;
        background: rgba(0, 0, 0, 0.1);
        padding-left: 60px;
        position: relative;
      }
    }
  }
  .product-kind {
    padding: 0 24px;
  }
}
</style>
<template>
  <div class="head">{{ $route.meta.title || "" }}</div>
</template>

<script>
export default {
  name: "top",
  components: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
<style scoped lang='less'>
.head {
  font-size: 36px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #222222;
}
</style>
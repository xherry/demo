<template name="padfShow">
  <div class="pdfShow">
    <!--  $router.go(-1) -->
    <div class="back" @click="clearUrl">
      <img src="../../assets/hz/delete.png" alt="" />
    </div>
    <div class="zzc">
      <iframe
        height="100%"
        scrolling="no"
        width="100%"
        :src="pdfUrl"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {};
  },
  props: {
    pdfUrl: {
      default: "",
      type: String,
    },
  },
  watch: {},
  beforeDestroy() {},
  mounted() {},
  destroyed() {},
  created() {},
  methods: {
    clearUrl() {
      this.$emit("clearPdfUrl");
    },
  },
};
</script>

<style lang="less" scoped>
// @import "../panoramic.css";
.back {
  // padding: 4px 25px;
  // border: 1px solid #999;
  // background: #fff;
  // font-size: 23px;
  right: 320px;
  top: 120px;
  position: absolute;
  // border-radius: 5px;
  // color: #333;
  z-index: 99999999;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
  }
}
.pdfShow {
  width: 1920px;
  height: 1080px;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
}
.zzc {
  width: 60%;
  height: 70%;
  margin-left: 20%;
  margin-top: 7%;
}
</style>

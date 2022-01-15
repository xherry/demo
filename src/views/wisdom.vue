<template>
  <div class="main">
    <img @click="noThing" src="../assets/numberwindow.gif" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    noThing() {
      this.$message({
        message: "正在开发中...",
        // type: "warning",
      });
    },
  },
};
</script>

<style>
.main img {
  width: 1920px;
  height: 1080px;
}
</style>
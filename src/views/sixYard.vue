<template>
  <div class="main">
    <div class="back" @click="$router.go(-1)"></div>
    <img src="../assets/nhbg3.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 1,
    };
  },
  methods: {
    noThing() {
      //   this.$message({
      //     message: "正在开发中...",
      //     // type: "warning",
      //   });
    },
  },
};
</script>

<style>
.main {
  position: relative;
}
.back {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 500px;
  height: 80px;
}
.zerenweis {
  position: absolute;
  left: 170px;
  top: 130px;
  width: 120px;
  height: 40px;
}
.zerenweis1 {
  position: absolute;
  left: 230px;
  bottom: 280px;
  width: 120px;
  height: 40px;
}
.main img {
  width: 1920px;
  height: 1080px;
}
</style>
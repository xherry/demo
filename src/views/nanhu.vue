<template>
  <div class="main">
    <div class="zerenweis" @click="type = 2"></div>
    <div class="back" @click="type = 1"></div>
    <img @click="noThing" v-if="type == 1" src="../assets/nhbg1.jpg" alt="" />
    <img @click="noThing" v-if="type == 2" src="../assets/nhbg2.png" alt="" />
    <div class="zerenweis1" @click="type = 2"></div>
    <div class="minq" @click="$router.push('sixYard')"></div>
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
.minq {
  width: 180px;
  height: 30px;
  position: absolute;
  left: 620px;
  bottom: 270px;
}
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
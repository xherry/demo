<template>
  <div class="home">
    <div class="box">
      <div class="btns btns1"></div>
      <div class="btns btns2"></div>
      <div class="btns btns3"></div>
      <div class="btns btns4"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data() {
    return {};
  },
  methods: {},
});
</script> 
<style >
.box {
  width: 500px;
  height: 500px;
  /* background: crimson; */
  margin: 200px auto;
  transform: rotateX(110deg);
  animation: rotates 5s infinite;
  position: relative;
  transform-style: preserve-3d;
  perspective: 800px;
}
.btns {
  width: 1px;
  height: 100px;
  background: rgb(247, 0, 255);

  transform-style: preserve-3d;
  perspective: 800px;
}
.btns::before {
  content: "";
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: darkgreen;
  position: absolute;
  bottom: 0;
  left: -24px;
}
.btns1 {
  position: absolute;
  left: 0;
  top: 0;
  transform: rotateZ(90deg) rotateX(105deg);
}
.btns2 {
  position: absolute;
  left: 0;
  bottom: 0;
  transform: rotateZ(90deg) rotateX(105deg);
}
.btns3 {
  position: absolute;
  right: 0;
  top: 0;
  transform: rotateZ(90deg) rotateX(75deg);
}
.btns4 {
  position: absolute;
  right: 0;
  bottom: 0;
  transform: rotateZ(90deg) rotateX(75deg);
}
@keyframes rotates {
  10% {
    transform: rotateX(100deg) rotateZ(36deg);
  }
  20% {
    transform: rotateX(100deg) rotateZ(72deg);
  }
  30% {
    transform: rotateX(100deg) rotateZ(108deg);
  }
  40% {
    transform: rotateX(100deg) rotateZ(144deg);
  }

  50% {
    transform: rotateX(100deg) rotateZ(180deg);
  }

  60% {
    transform: rotateX(100deg) rotateZ(216deg);
  }
  70% {
    transform: rotateX(100deg) rotateZ(252deg);
  }
  80% {
    transform: rotateX(100deg) rotateZ(288deg);
  }
  90% {
    transform: rotateX(100deg) rotateZ(324deg);
  }
  100% {
    transform: rotateX(100deg) rotateZ(360deg);
  }
}
</style>

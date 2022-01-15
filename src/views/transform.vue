<template>
  <div class="tbox">
    <div class="transform">
      <div class="t1">
        <div class="line">
          <div>
            <div></div>
            <p>测试1</p>
          </div>
        </div>
      </div>
      <div class="t2">
        <div class="line">
          <div>
            <div></div>
            <p>测试2</p>
          </div>
        </div>
      </div>
      <div class="t3">
        <div class="line">
          <div>
            <div></div>
            <p>测试3</p>
          </div>
        </div>
      </div>
      <div class="t4">
        <div class="line">
          <div>
            <div></div>
            <p>测试4</p>
          </div>
        </div>
      </div>
      <div class="t7">
        <div class="line">
          <div>
            <div></div>
            <p>测试5</p>
          </div>
        </div>
      </div>
      <div class="t8">
        <div class="line">
          <div>
            <div></div>
            <p>测试6</p>
          </div>
        </div>
      </div>
      <!-- <div class="t5"></div>
      <div class="t6"></div> -->
    </div>
  </div>
</template>

<style lang="less">
.tbox {
  width: 600px;
  height: 600px;
  margin: 0 auto;
}
.transform {
  position: relative;
  -webkit-transform: rotateX(-33.5deg) rotateY(45deg);
  transform: rotateX(-33.5deg) rotateY(45deg);
  transform-style: preserve-3d;
  animation: name 10s linear 100ms infinite;
  margin-top: 800px;
  > div {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    .line {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 2px;
      height: 200px;
      transform: translate(-50%, -50%);
      background: darkslategrey;
    }
    .line > div {
      position: absolute;
      top: -100%;
      left: 50%;
      transform: translate(-50%);
      p {
        font-size: 24px;
        text-align: center;
        margin: 10px 0;
        //  transform: rotateX(-180deg);
      }
      > div {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        background: #0ba0eb;
      }
    }
  }
  .t1 {
    // background: rgba(241, 139, 13, 0.5);
    transform: translateZ(300px);
  }
  .t2 {
    transform: translateZ(-300px);
    // background: rgba(124, 245, 4, 0.5);
  }
  .t3 {
    transform: rotateY(60deg) translateZ(-300px);
    // background: rgba(214, 107, 31, 0.5);
  }

  .t4 {
    transform: rotateY(60deg) translateZ(300px);
    // background: rgba(218, 21, 60, 0.5);
  }

  .t7 {
    transform: rotateY(320deg) translateZ(300px);
    // background: rgba(196, 144, 13, 0.5);
  }
  .t8 {
    transform: rotateY(320deg) translateZ(-300px);
    // background: rgba(196, 144, 13, 0.5);
  }


  .t5 {
    transform: rotateX(270deg) translateZ(-200px);
    background: rgba(6, 247, 247, 0.5);
  }

  .t6 {
    transform: rotateX(270deg) translateZ(200px);
    background: rgba(196, 144, 13, 0.5);
  }

  div:hover {
    opacity: 0.5;
  }
  @keyframes name {
    from {
      transform: rotateX(-20deg) rotateY(360deg);
    }
    to {
      transform: rotateX(-20deg) rotateY(0deg);
    }
  }
}
</style>

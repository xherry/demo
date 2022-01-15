<template>
  <div class="about">
    <h1 v-mycolor='"gold"'>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  directives: {
    mycolor: {
      bind: function (el, binding, vnode) {
        const s = JSON.stringify;
        el.innerHTML = "name: " +s(binding.name) 
        +"<br>" +"value: " 
        +s(binding.value) 
        +"<br>" 
        +"expression: " 
        +s(binding.expression) 
        +"<br>" 
        +"argument: " 
        +s(binding.arg) 
        +"<br>" 
        +"modifiers: " 
        +s(binding.modifiers) 
        +"<br>" 
        +"vnode keys: " +
          Object.keys(vnode).join(", ");  
      }, //本例只介绍inserted
      inserted: function (el, binding) {
        console.log("el", el);
        console.log("binding", binding);
        el.style.color = "red"; // 第一种使用
        el.style.color = binding.value; // 第二种使用 //el: dom元素; binding: 一个对象，里面包含着vue实例data里面的数据
      },
      update: function () {},
      // compinentUpdated: function () {},
      unbind: function () {},
    },
  },
});
</script>

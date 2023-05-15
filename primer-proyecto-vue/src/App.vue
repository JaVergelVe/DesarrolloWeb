<script setup>

  import { ref } from 'vue';

  const titulo = ref('Generador de solicitudes')
  const val = ref(0)
  const incrementar = function() {
    if (val.value < 9) {
      val.value = val.value + 1
    }
  }
  const decrementar = () => {
    if (val.value > 0) {
      val.value = val.value - 1
    }
  }
  

</script>

<template>

  <div class="wrapper">
    <h2>{{ titulo }}</h2>
    
    <br>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>

    <div id="globito" v-if="val > 0">
      {{ val < 9 ? val : "9+"}}
    </div>

    <br>

    <span @click="decrementar" class="buttom">
      -
    </span>
    <span @click="incrementar" class="buttom">
      +
    </span>

    <br>

    <span v-show="val == 0">
      Nadie te agrega 😢
    </span>

    <br>

    <input type="text" v-model="titulo">
  </div>

</template>

<style scoped>

 .wrapper{
  position: relative;
  display: inline-block;
 }

 #icon{
  width: 42px;
  height: 42px;
 }

 #globito{
  background-color: red;
  width: 24px;
  height: 24px;
  font-weight: bold;
  text-align: center;
  border-radius: 100%;
  position: absolute;
  top: -12px;
  right: -12px;
 }

 .buttom{
  margin: 4px;
  display: inline-block;
  background-color: gray;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  text-align: center;
 }

 .buttom:hover{
  background-color: black;
  cursor: pointer;
 }

</style>

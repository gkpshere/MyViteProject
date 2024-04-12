<template>
  <div>
    <div class="flex-container">
      <button @click="count++">Increment</button>
      <button @click="count--">Decrement</button>
    </div>

    <div class="counter-box" v-bind:text="count">{{ count }}</div>
   


  </div>
</template>

<script setup>
import { ref, computed } from "vue";



const count = ref(0)

const uName = ref("Gayathri");

setTimeout(() => {
  uName.value = "Vishakan";
  age.value=60
}, 2000);


</script>

<style>
input[type="text"] {
  padding: 10px;
  border-style: dotted;
  margin: 10px;
}

.flex-container{
  display: flex;
}

.flex-container > button {
  
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}

.counter-box{
  margin: 10px;
  padding: 20px;
  border-style: groove;
  font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
button {
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

}
</style>

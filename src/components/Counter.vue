<template>
  <div class="counter">


    <div class="flex-container">
      <div class="item">
        <Button icon="pi pi-check" severity="info"  label="Increment" @click="count++"/>

        <Button icon="pi pi-check" label="Decrement" @click="count++"/>
        
      <!-- <button @click="count--">Decrement</button> -->
      </div>

      <div class="item">
        <div class="counter-box" v-bind:text="count">{{ count }}</div>
      </div>
      
     
    </div>





  </div>
</template>
  
<script setup>
import { ref } from "vue";

import Button from 'primevue/button';


const count = ref(0)

</script>
  
<style>
.break {
  flex-basis: 100%;
  height: 0;
  align-content: center;
  justify-content: center;
}

.counter {
  margin-top: 100px;
 padding-bottom: 100px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
 
}

.item {
  flex-grow: 1;
  display:flex; 
  align-items:center;
 
}

/* .flex-container>button {
  margin: 0 auto;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
} */

.counter-box {
  margin: 10px;
  padding: 20px;
  border-style: groove;
  font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  max-width: 300px;
  
}

/* button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
} */




</style>
  
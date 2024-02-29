<template>
  <div>
    
    <select v-model="selectObject">
      <option v-for="obj in options" :key="obj.id" :value="obj.id">
        {{ obj.name }}
      </option>
    </select>
    
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store=useStore();
const options= computed(()=>{
  return store.state.result;
})
const selectObject=null;

onMounted(()=>{
  store.dispatch("fetchObjects")
})
</script>

<style>
input[type="text"] {
  padding: 10px;
  border-style: dotted;
  margin: 10px;
}
button {
  margin-top: 10px;
}
</style>

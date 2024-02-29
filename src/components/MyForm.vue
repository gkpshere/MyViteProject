<template>
  <div>
    <div v-bind:text="count">{{ count }}</div>
    <h1>{{ age }}</h1>
    <button @click="incrementcount">{{ uName }}</button>
    <div>
      <input ref="el" type="text" placeholder="Name" v-model="name" />
    </div>
    <Select/>
    <div>
      <button @click="submitForm" v-bind:disabled="name.length == 0">
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import Select from './Select.vue'

const name = ref("");
const age= ref(35)
const el = ref();

const uName = ref("Gayathri");

setTimeout(() => {
  uName.value = "Vishakan";
  age.value=60
}, 2000);

const submitForm = () => {
  console.log(`form submitted, name=${name.value}`);
};
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

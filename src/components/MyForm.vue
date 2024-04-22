<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Add Product
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="exampleInputname1">Name</label>
            <input type="text" required v-model="formData.productName" class="form-control" id="exampleInputname1"
              aria-describedby="nameHelp" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="exampleInputPrice">Price</label>
            <input type="number" v-model="formData.productPrice" class="form-control" id="exampleInputPrice1" placeholder="Price">
          </div>

          <div class="form-group">
            <label for="exampleInputModel">CPU Model</label>
            <input type="text" v-model="formData.productCPUModel" class="form-control" id="exampleInputModel" placeholder="Model">
          </div>



          <button type="submit" class="btn btn-primary">Add</button>
        </form>
      </div>
    </div>


    <div class="card">
      <div class="card-header">
        Products
      </div>
      <div class="card-body">

        <Select />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from "axios"
import { useStore,mapActions } from 'vuex'
import Select from "./Select.vue"

const store = useStore();



const formData= ref({
      productName:"",
      productPrice:0,
      productCPUModel:""
      
})


async function handleSubmit(event) {
  event.preventDefault();
  const response = await axios.post("https://api.restful-api.dev/objects",formData.value)
  console.log(response)
}

</script>

<style>
input[type="text"] {
  padding: 10px;
  border-style: dotted;
  margin: 10px;
}

.flex-container {
  display: flex;
}

.flex-container>button {

  margin: 10px;
  padding: 20px;
  font-size: 30px;
}

.counter-box {
  margin: 10px;
  padding: 20px;
  border-style: groove;
  font-size: large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

/* button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

} */
</style>

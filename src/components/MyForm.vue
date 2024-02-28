<template>
<div>

    <div>
    <input ref="el" type="text" placeholder="Name" v-model="name"/>
    </div>
    <div>
    <button @click="submitForm" 
    v-bind:disabled="name.length==0"
    >Submit
</button>
    </div>
    </div>
</template>

<script>
import {ref, onMounted,onUpdated} from "vue";

export default {
    
    setup() {
        console.log("The component is now set up")
        const name= ref("");
        const el = ref()
        onMounted(()=>{
        console.log("the component is rendered once and we are in the on mounted lifecycle")
        el.value.focus();
    })

    onUpdated(()=>{
        console.log("Updated")
        
    })
        
        const submitForm= ()=>{console.log(`form submitted, name=${name.value}`)}
        return{
            el,
            name,
            submitForm
        }
        
    }
};
</script>

<style>
input[type="text"]{
    padding:10px;
    border-style:dotted;
    margin:10px;
}
button{
    margin-top:10px;
   
    

}
</style>
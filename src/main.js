import { createApp } from 'vue'
import {createStore} from 'vuex'
import axios from "axios"
import './style.css'
import App from './App.vue'


const store= createStore({
    state(){
        return{
            count:90,
            result:[]
        }
    },
    getters:{
        getResult:(state)=> state.result,
    },
    mutations:{
        increment(state){
            state.count ++
        },
        SET_OBJ(state,data)
        {
            state.result=data;
        }
    },
    actions: {
       async fetchObjects({commit}){
        try{
            const response = await axios.get("https://api.restful-api.dev/objects")
            commit("SET_OBJ", response.data)

        }
        catch(e){
            console.log(e)
        }
       
      }}
})

// Create App
const app = createApp(App)

// Install Store instance as a plugin
app.use(store)

// Mount the app the the html element
app.mount('#app')

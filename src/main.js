import { createApp } from 'vue'
import {createStore} from 'vuex'
import { createMemoryHistory, createRouter } from 'vue-router'
import axios from "axios"
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';

//in main.js
import 'primevue/resources/themes/aura-dark-pink/theme.css'



import Counter from './components/Counter.vue'
import MyForm from './components/MyForm.vue'
import Home from './components/Home.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/counter', component: Counter },
    { path: '/form', component: MyForm }
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

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
        },
        OBJ_CREATED(state,data)
        {
            state.posted=data;
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
           
          }},
          async createProduct({commit},data){
            try{
                const response = await axios.post("https://api.restful-api.dev/objects",data)
                commit("OBJ_CREATED", response.data)
    
            }
            catch(e){
                console.log(e)
            }
        
          }
})

// Create App
const app = createApp(App)

//Router
app.use(router)


// Install Store instance as a plugin
app.use(store)

// PrimeVue
app.use(PrimeVue)

// Mount the app the the html element
app.mount('#app')

import axios from 'axios'


export let products=axios.get("https://fakestoreapi.com/products").then((res)=>{
    
    return res
}).catch((err)=>console.log(err))
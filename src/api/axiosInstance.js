import axios from "axios";


const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.noksha.dev/api",
    timeout:10000,
    headers:{
        "Content-Type":"application/json"
    }
})

export default axiosInstance
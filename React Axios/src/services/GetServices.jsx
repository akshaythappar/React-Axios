import axios  from "axios";

const api = axios.create({
    baseURL:"https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titan&page=1",
})

// creating a get Request function 
export const getMovie = ()=>{
    return api.get("?i=tt3896198&apikey=1c12799f&s=titan&page=1");
}
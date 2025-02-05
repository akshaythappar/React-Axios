import { useEffect, useState } from "react";
import axios from 'axios';
import { Card } from "../components/UI/card";

export const Movie = () => {
    const [data,setData]=useState([]);
  const API =
    "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titan&page=1";

  const getMovieData = async () => {
    try {
    //   const res = await axios.get(API);
      const res = await getMovieData();
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log("error ",error);
      console.error("Error Message",error.message);
      console.error("Error status",error.response.status);
      console.error("Error data",error.response.data);

    }
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return <ul className="container grid grid-four--cols">
    {data.map((currElem)=>{
        return <Card key={currElem.imdbID} movieData={currElem}/>
    })}
  </ul>
};

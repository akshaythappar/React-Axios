import { useEffect } from "react";
import { getPost } from "./api/PostApi";
import { Movie } from "./pages/Movie";

const App = ()=>{

  console.log(getPost());
  const getPostsData = async()=>{
    try{
          const res = await getPost();
          console.log(res);
    }catch(e){
      console.log(e);
    }
  }
  
  useEffect(()=>{
    getPostsData();
  },[]);
  return <>
    {/* <Movie/> */}
    <h1>hello react crud operation</h1>
  </>
}

export default App;
import { useEffect } from "react";
import { getPost } from "./api/PostApi";
import { Movie } from "./pages/Movie";
import { Posts } from "./components/UI/Posts";
// import "./App.css"
const App = ()=>{
 

  return <>
  <section className="main-section">
     <Posts/>
  </section>
  </>
}

export default App;
import { useEffect, useState } from "react";
import { getPost } from "../../api/PostApi";
import "../../App.css"
import { deletePost } from "../../services/GetServices";
import { Form } from "./Form";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi,setUpdateDataApi]=useState({});
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  //function to delete post 
  const handleDeletePost = async (id) => {
    try {
     const res =  await deletePost(id);
      if(res.status===200){
        const newUpdatedPosts = data.filter((currPost)=>{currPost.id!=id});
        setData(newUpdatedPosts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdatePost = (currElem)=>{setUpdateDataApi(currElem);
  }
  return (<>
    <section className="section-form">
      <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi}/>
    </section>
    <section className="section-post">
      <ol>
        {data.map((currElem) => {
            const {id,body,title}=currElem;
         return  <li key={id}>
            <p>Title:{title}</p>
            <p>Body:{body}</p>
            <button onClick={()=>handleUpdatePost(currElem)}>Edit</button>
            <button className="btn-delete" onClick={()=>handleDeletePost(id)}>Delete</button>
          </li>;
        })}
      </ol>
    </section>
    </>
  );
};

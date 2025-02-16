import { useEffect, useState } from "react";
import { postData } from "../../api/PostApi";

export const Form = ({ data, setData,updateDataApi, setUpdateDataApi }) => {
  const [addData, setaddData] = useState({
    title: "",
    body: "",
  });

  useEffect(()=>{
    
         updateDataApi &&
         setaddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || " ",
  
         })
  },[updateDataApi])

  const handleInputChange = (e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setaddData((prev)=>{
          return {
            ...prev,
            [name]:value,
          }
    })
  }
  const addPostData = async ()=>{
   const res =  await postData (addData);
   if(res.status === 200){
    setData([...data,res.data]);
    setaddData({ title: "", body: "" });

   }

  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostData();
    setData([...data, addData]);
    setaddData({ title: "", body: "" });
  };
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add Title"
          value={addData.title}        
        onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          placeholder="add post"
          id="body"
          name="body"
          value={addData.body}
        onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

import React from 'react'
import  { useState } from 'react'
import axios from 'axios';
import './Home.css'
const Add = () => {

    const [data, setData] = useState({
        todoDesc: '',
        stats: '',
      });
    
      const fetchData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const addpath= async()=>{
        try {
           const response=await axios.post('http://localhost:5000/todo/add',data);
           if(response.status==200){
               alert('List added');
               console.log("DATA SUBMITTED");
               window.location.reload()
           }else{
               alert('error in upload')
           }
        } catch (error) {
           alert(error)
        }
      }


  return (
    <>
        <div className='todo'>
      <h1>ADD TODO TO LIST</h1>
      <form onSubmit={addpath} >
        <p><b>TODO DESCRIPTION</b></p> 
        <input type="text" placeholder='Description' name='todoDesc' value={data.todoDesc} onChange={fetchData}/>
       <p><b>STATUS</b></p> 
       <input type="text" placeholder='Status' name='stats' value={data.stats} onChange={fetchData}/><br /> <br />
       <button type='submit' ><b>ADD TO LIST</b></button>
      </form>
      </div>

       
    </>
  )
}

export default Add
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {

      const [todo, setTodo] = useState([]);

      const navigate=useNavigate();
    
    
      useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/todo/');
            if (response.status === 200) {
              setTodo(response.data.data);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        getData();
      }, []);
    
      const deletetodo = async (id) => {
        try {
          const response = await axios.delete(`http://localhost:5000/todo/delete/${id}`);
          if (response.status === 200) {
            alert('Todo deleted');
            setTodo(todo.filter((items) => items._id !== id));
          } else {
            alert('Failed to delete');
          }
        } catch (error) {
          console.error('Error deleting Todo list:', error);
        }
      };
    
  return (
    <>

      <h1>TODO LIST</h1>
      <button onClick={navigate('/add')}>ADD NEW TODO</button>
      <ul>
          {todo.map((item) => (
            <li key={item._id}>
                <input type="checkbox" name="checkbox" id="box"></input>
              <span> {item.todoDesc} TODO DESCRIPTION: {item.stats} - status</span>
              <button onClick={() => deletetodo(item._id)}>Delete</button>
            </li>
          ))}
      </ul>
       
    </>
    
  )
}

export default Home
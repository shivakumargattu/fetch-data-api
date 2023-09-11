import React,{useState,useEffect} from "react";
import "./App.css"

function App(){

const [users, setUsers]=useState([])


const dataFetch=()=>{
  fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(res=>res.json())
  .then(data=>setUsers(data))
}
useEffect(()=>{
  dataFetch()
})
  return(<>
    <h1>sgiva</h1>
    
      <ul>
        {users.map(user=>(<div className="{user.completed ? green : red }" key={user.id}>{user.title}</div>))}
      </ul>
    
      </> )
} 
export default App
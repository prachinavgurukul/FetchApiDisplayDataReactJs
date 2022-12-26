import './App.css';
import  react,{ useEffect, useState } from 'react';
export default function App(){
const[data,setdata]=useState([])
const getData=async()=>{
const response=await fetch('https://jsonplaceholder.typicode.com/users')
const result =await response.json()
setdata(result)
console.log(result)
}
useEffect(()=>{
getData()
},[])
  return(
    <div id="heading"><h1>Fetch Api and Display Data</h1><hr></hr>
    <div>
      <table id="maintable">
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
          <th>Zip Code</th>
          <th>Phone</th>
          <th>Company Name</th>
        </tr>
      {
        data.map((item,index)=>{
          return(
            <tr>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
            <td>{item.address.zipcode}</td>
            <td>{item.phone}</td>
            <td>{item.company.name}</td>
            </tr>
          )
        })
      }
      </table>
    </div>
    </div>
  )
}



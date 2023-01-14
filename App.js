import './App.css';
import React from 'react'
import { useEffect,useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App  = () => {
  let [names,updatenames]=useState([]);
  let [name,updatename]=useState('');
  useEffect(()=>{
    localStorage.setItem('names',names);
  });
  return (
    <>
    <div className='text-center bg-dark text-light'>
    <h1 className='text-center'>TO DO List App</h1>
    {names.map((v,i)=>{
      return(<div key={i}>{v}
      <button className='btn btn-danger mr-2 mb-2' onClick={()=>{
        updatenames(names.filter((i)=>{
          return i!==v;
        }))
      }}>Delete</button>
      <button className='btn btn-warning mb-2' onClick={()=>{
        updatename(v);
        updatenames(names.filter((i)=>{
          return i!==v;
        }))
      }}>UPDATE<span className="bi bi-backspace"></span></button>
      </div>)
    })}
    Name <input type="text" name="name" value={name} onChange={(e)=>{
      updatename(e.target.value);
    }} /><i class="fa fa-hourglass-start" aria-hidden="true"></i>
    <button className='btn btn-primary' onClick={()=>{
      updatenames(localStorage.getItem('name'));
      updatenames([...names,name]);
    }}>Add name</button>
    </div>
    </>
  )
}
export default App;
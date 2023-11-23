
import React, {useState } from 'react'
import { useParams } from 'react-router-dom';



export const Edit = () => {
    const[user,setUser]=useState({
    name:"",
    email:"",
    phone:"",
    password:""
    })
    const handleChange=(event)=>{
      const value= event.target.value;
      setUser({...user,[event.target.name]:value});
    };
   
   const id=useParams();
   console.log(id.id);

    const submit=(event)=>{
      event.preventDefault();

      
    }
  return (
    <div className='d-flex justify-content-conter aling-item-conter '>
   
       <div className='bg-white p-3 rounded w-25'>
       <h1>Edit-User</h1>
        <form action="" >
        <div className='mb-3'>
        <strong>UserName</strong> <input type="text" placeholder="UserName" name="name" value={user.name} className='form-control-rounded-0 w-100' 
      onChange={(event)=>{
        handleChange(event)
      }}
    
      />
      
        </div>



        <div className='mb-3'>
         <strong>Email</strong><input type="Email" placeholder="UserEmail" id="email" value={user.email} className='form-control-rounded-0 w-100'
          onChange={(event)=>{
            handleChange(event)
          }}
         />
         </div>



         <div className='mb-3'>
         <strong>Phone_No</strong> <input type="phone" placeholder="Phone_No" id="phone" value={user.phone} className='form-control-rounded-0 w-100' 
        onChange={(event)=>{
          handleChange(event)
        }}
         />
         </div>



         <div className='mb-3'>
         <strong>Password</strong><input type="password" placeholder="Password" id="password" value={user.password} className='form-control-rounded-0 w-100' 
        onChange={(event)=>{
          handleChange(event)
        }}
        />
        </div>


         <button type="submit" className='btn btn-success w-100'onClick={submit} >Edit</button>
       
        </form>
        </div>
    </div>
  )
}

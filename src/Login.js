import React,{useEffect,useState} from 'react'
import axios from 'axios'


function  Login() {
    const[users,setUser]=useState([]);
   
    
    useEffect(()=>{
        getUsers();
    },[]);

  
   
    const getUsers=async()=>
    {
        const result=await axios.get("http://localhost:800/register");
        setUser(result.data)
    }
    const Delete = async (id) => {
        try {
          await axios.delete(`http://localhost:800/delete/${id}`);
          alert('Item deleted successfully');
        } catch (error) {
          console.error('Error deleting item:', error);
          alert('Error deleting item');
        }
      };
        
       


   


  return (
    <div className='home'>
        
    <table className='table'>
        <thead>
            <tr>
            <th>No</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone_No</th>
                <th>Action</th>
            </tr>
        </thead>
        {
            users.map((user,index)=>(
                <tr>
                  
                    <th scope='row' ket={index}>{index+1}</th>
                    <th>{user.userName}</th>
                    <th>{user.email}</th>
                    <th>{user.phone}</th>
                   
                    <button type="button"  onClick={()=>Delete(user.id)} className='btn btn-danger border'>Delete</button>
                    
                   
                </tr>
            ))
        }
    </table>
    </div>
  )
}

export default Login
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const [user,setUser]=useState({username:"",password:""})

    const navigate=useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        getTokenApi()
        
    }

   async function getTokenApi(){

        let response=await axios.post("http://127.0.0.1:8000/api/auth/login/",user)

        if(response.status >=200 && response.status<300){
            let token = response.data.token

            localStorage.setItem("token","Token "+token)
            // getItem(key)
            navigate("/issues-add")

        }
        
        

    }

  return (
      <div className='min-h-screen flex justify-center items-center bg-purple-500'>

            <form  onSubmit={handleSubmit} action="" className='border-2 border-purple-200 w-1/2 p-8 rounded-2xl bg-white'>
                <h3 className='text-purple-500 text-2xl font-bold text-center'>SignIn</h3>
                <div className="mb-3">
                    <label htmlFor="">Enter username</label>
                    <input
                        value={user.username}
                        onChange={(e)=>setUser({...user,username:e.target.value})}
                       
                        type="text" className='w-full p-2 rounded-md border-2 border-gray-400' />
                </div>

               
                <div className="mb-3">
                    <label htmlFor="">Enter password</label>
                    <input type="password"
                        value={user.password}
                        onChange={(e)=>setUser({...user,password:e.target.value})}
                      
                        className='w-full p-2 rounded-md border-2 border-gray-400' />
                </div>

              

                <div className='mb-3 text-center'>

                    <button type='submit' className='bg-purple-400 px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white'>Login</button>

                </div>
            </form>

        </div>
  )
}

export default SignIn

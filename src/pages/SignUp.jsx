import axios from 'axios';
import React, { use, useState } from 'react'

function SignUp() {

    const [user, setUser] = useState({ username: "", email: "", password1: "", password2: "" })

    function handleSubmit(event){
        event.preventDefault()
        // console.log(user);
        createUserApi()
        

    }

   async function createUserApi(){
        let response= await axios.post("http://127.0.0.1:8000/api/auth/register/",user)
        console.log(response.data);
        
    }


    return (
        <div className='min-h-screen flex justify-center items-center bg-purple-500'>

            <form onSubmit={handleSubmit} action="" className='border-2 border-purple-200 w-1/2 p-8 rounded-2xl bg-white'>
                <h3 className='text-purple-500 text-2xl font-bold text-center'>SignUp</h3>
                <div className="mb-3">
                    <label htmlFor="">Enter username</label>
                    <input
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        type="text" className='w-full p-2 rounded-md border-2 border-gray-400' />
                </div>

                <div className="mb-3">
                    <label htmlFor="">Enter Email</label>
                    <input
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        type="email" className='w-full p-2 rounded-md border-2 border-gray-400' />
                </div>

                <div className="mb-3">
                    <label htmlFor="">Enter password1</label>
                    <input type="password"
                        value={user.password1}
                        onChange={(e) => setUser({ ...user, password1: e.target.value })}
                        className='w-full p-2 rounded-md border-2 border-gray-400' />
                </div>

                <div className="mb-3">
                    <label htmlFor="">Enter password2</label>
                    <input
                        value={user.password2}
                        onChange={(e) => setUser({ ...user, password2: e.target.value })}
                        type="password" className='w-full p-2 rounded-md border-2 border-gray-400' />
                </div>

                <div className='mb-3 text-center'>

                    <button type='submit' className='bg-purple-400 px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white'>Register</button>

                </div>
            </form>

        </div>
    )
}

export default SignUp

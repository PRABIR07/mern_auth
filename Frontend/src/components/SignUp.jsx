import React, { useState } from 'react';

import {useNavigate} from "react-router-dom"

function SignUp() {
        
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name:"",email:"", phone: "", password: "",cpassword:""
  })
  
  let name, value
  const handleInputs = (e) =>{
      name = e.target.name
      value= e.target.value

      setUser({...user, [name]:value})
  }

  const PostData = async(e) =>{
       e.preventDefault();

       const { name,email,phone,password,cpassword } = user
  
       //USING FETCH API
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },                                           //server doesnt understand json thatswhy we convert it into string using stringify()
      body:JSON.stringify({
        name,email,phone,password,cpassword
      })
    });
      const data = await res.json();

          if(res.status === 422 || !data ){
            window.alert("Registration failed")
          }else{
            window.alert("registration Successful")

            navigate("/login")  
          }
  }

  return (
    <div class="w-1/2 mx-auto">
    <form method='POST' className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name='name' value={user.name} onChange={handleInputs} placeholder="Username"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' value={user.email} onChange={handleInputs} placeholder="Email"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="phone">
          PhoneNumber
        </label>
        <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name='phone' value={user.phone} onChange={handleInputs} placeholder="PhoneNo"/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input type="password" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' value={user.password} onChange={handleInputs} placeholder="******************"/>
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          ConfirmPassword
        </label>
        <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cpassword" name='cpassword' value={user.cpassword} onChange={handleInputs} placeholder="ConfirmPassword"/>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="register" onClick={PostData}>
          Sign Up
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
          Already register!
        </a>
      </div>
    </form>
    <p className="text-center text-gray-500 text-xs">
      &copy;2020 Prabir Corp. All rights reserved.
    </p>
  </div>
  )
}

export default SignUp
import React, { useState } from 'react';
import { API_URL } from '../../data/apiPath';



const Login1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");

  const loginHandler = async () =>
  {
        e.preventDefault()
  

  try {
      const response = await fetch(`${API_URL}/vendor/login`,
      
      {  method:'POST',
         headers:{
          'Content-Type':'application/json'
         },
         body :JSON.stringify({email,password})
      })

      const data = await response.json();
      if(response.ok)
      {
        alert('login success');
        localStorage.setItem('loginToken', data.token)
        
      }
    
  } 
  catch (error) {
    console.error(error);

  }
  }
  return (
    <div className='loginSection'>
 
        <form className = "authForm" onSubmit={loginHandler}>
        <h3>Vendor Login</h3><br/>
            <label>Email</label>
            <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/><br/>
            <label>Password</label>
            <input type ="text" name ='password' value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='enter your password'/><br/>
            <div className="btnSubmit">
              <button type= 'submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login1
import { useState } from 'react'
export default function Signup() {
    const [user, setUser ] = useState({userame: '', email: '', password: ''})

    async function registerUser(){
      const res = await fetch('http://127.0.0.1:5000/register', {
        method: "POST",
        headers: {'Content-Type': 'appliction/json'},
        body: JSON.stringify(user)
      })
      if(res.ok){
        const data = await res.json()
        console.log(data);
      }
    }

    function handleSubmit(e){
      e.preventDefault()
      registerUser()
      console.log(user, 'form submitted');
      setUser({username: "", email:"", password:""})
    }
    
  return (
    <>
    <h3>Sign Up</h3>
    <form action= "" onSubmit= {handleSubmit}>
      <label htmlFor="username">Username</label><br />
      <input type= "text" name= 'username' value={user.username} onChange={(e)=> setUser({...user, username : e.target.value})} required/><br />
      <label htmlFor="email">Email</label><br />
      <input type= "email" name= 'email' value={user.email} onChange= {(e)=> setUser({...user, email: e.target.value})} required/><br />
      <label htmlFor="password">Password</label><br />
      <input type= "password" name='password' value={user.password} onChange= {(e)=> setUser({...user, password: e.target.value})} required/><br />
      <input type="Submit" value={'Register'}/>
    </form>

    </>
  )
}

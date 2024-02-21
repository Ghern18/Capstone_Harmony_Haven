import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Users() {
    const [ users, setUser ]= useState()

    const getUsers = async () => {
        const res = await fetch('http://127.0.0.1:5000')
        if (res.ok){
            const data = await res.json()
            setUser(data);
        }
    }

    if(users.length === 0){
      return <Spinner />
    }
    
  return (
    <>
    { Users.map(user => {
        return <p key={user.id}>{user.username}</p>
    })}
    </>
  )
}

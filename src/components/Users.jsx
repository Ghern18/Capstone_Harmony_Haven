import React from 'react'

export default function Users() {
    const [ users, setUser ]= useState()

    const getUsers = async () => {
        const res = await fetch('http://127.0.0.1:5000/register')
        if (res.ok){
            const data = await res.json()
            setUser(data);
        }
    }
  return (
    <>
    { Users.map(user => {
        return <p key={user.id}>{user.username}</p>
    })}
    </>
  )
}

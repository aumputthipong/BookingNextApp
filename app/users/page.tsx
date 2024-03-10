'use client'
import { useSession,signIn,signOut } from 'next-auth/react';
import React from 'react'

interface User{
  id: number;
  name: string;
  email: string; 
}

const UsersPage = async () => {
                      
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
  {next:{revalidate:10}});
  const users: User[] = await res.json();
  return (
    // <div>UsersPage</div>
    <>
    <h1>Users </h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className='table table-bordered'>
     <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
     </thead>
     <tbody>
      {users.map(user=> <tr key={user.id}>
        <th>{user.name}</th>
        <th>{user.email}</th>
        </tr>)}
      </tbody> 
    </table>
    </>
  )
}

export default UsersPage
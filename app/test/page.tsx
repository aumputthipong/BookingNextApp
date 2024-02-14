import React from 'react'
import RoomCard from '../components/RoomCard';



interface Room {
    _id: string;
    name: string;
    description: string;
  }
// const getData = async ()=>{
//     const res = await fetch(`http://localhost:3000/api/room`)
//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }
//     return res.json;
// }
const Testpage = async () => {
    const res = await fetch('http://localhost:3000/api/room',
    {next:{revalidate:10}});
    const posts: Room[] = await res.json();
  return (
    <div>
        {posts.map((post:any)=>(
            <div key={post._id}>
            <RoomCard post={post}/>
                </div>  
        ))}
    </div>
  )
}

export default Testpage
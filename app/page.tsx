import Image from 'next/image'
import Link from 'next/link'
import RoomCard from './components/RoomCard'
import HeroTitle from './components/HeroTitle'
interface Room {
  __id: string;
  name: string;
  description: string;
}
export default async function Home() {
  const res = await fetch('http://34.226.202.95:3000/api/room',
  {next:{revalidate:10}});
  const posts: Room[] = await res.json();
  
  return (
    <main>
      <HeroTitle />
      <div className='flex flex-col items-center'>
        {/* <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box ">
          <li> <Link href="/users"> Users</Link></li>
          <li><Link href="/calendar"> Booking Calender</Link></li>
          <li><a>Item 3</a></li>
        </ul> */}
        <br></br>
        <div className='grid grid-cols-3 gap-4'>
        {posts.map((post:any)=>(
            <div key={post.__id}>
            <RoomCard post={post}/>
                </div>  
        ))}
        </div>
      </div>
    </main>
  )
}

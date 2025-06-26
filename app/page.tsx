import Image from 'next/image'
import Link from 'next/link'
import RoomCard from './components/RoomCard'
import HeroTitle from './components/HeroTitle'

interface Room {
  _id: string;
  index: number;
  name: string;
  description: string;
}




export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/room`, {
  next: { revalidate: 10 }
});

if (!res.ok) {
  console.error('Fetch failed with status:', res.status);
  throw new Error('Failed to fetch data');
}

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
      {posts.map((post: Room, index: number) => (
          <div key={post._id}>
            <RoomCard post={post} index={index} />
          </div>
        ))}
        </div>
      </div>
    </main>
  )
}

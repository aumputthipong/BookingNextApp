import Image from 'next/image'
import Link from 'next/link'
import RoomCard from './components/RoomCard'

export default function Home() {
  return (
   <main><h1>hello</h1>
   <Link href="/users"> Users</Link>
   <RoomCard/>
   </main>
  ) 
}

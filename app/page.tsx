import Image from 'next/image'
import Link from 'next/link'
import RoomCard from './components/RoomCard'
import Navbar from './components/Navbar'
export default function Home() {
  return (
   <main>
   <Navbar/>
   <Link href="/users"> Users</Link>
   <RoomCard/>
   </main>
  ) 
}

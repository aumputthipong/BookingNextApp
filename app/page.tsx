import Image from 'next/image'
import Link from 'next/link'
import RoomCard from './components/RoomCard'
import HeroTitle from './components/HeroTitle'

export default function Home() {
  return (
    <main>
      <HeroTitle />
      <div className='flex flex-col items-center'>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box ">
          <li> <Link href="/users"> Users</Link></li>
          <li><Link href="/calendar"> Booking Calender</Link></li>
          <li><a>Item 3</a></li>
        </ul>
        <div className='grid grid-cols-3 gap-4'>
        <RoomCard />
        </div>
      </div>
    </main>
  )
}

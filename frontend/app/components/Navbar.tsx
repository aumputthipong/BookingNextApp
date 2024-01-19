import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl" href='/'>Home</a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://media.discordapp.net/attachments/934024580450877480/934024631126470706/CE5DA0FC-2AD7-475A-819C-C38B56F60D35.png?ex=65b382b9&is=65a10db9&hm=f96d960d532ce5e4d2f868312ce4e7518ef6d4349c31ab58071a1a79e27a5cee&=&format=webp&quality=lossless&width=481&height=656" />
          </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  
  
  

  )
}

export default Navbar
import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center pt-5 px-9'>
      <p className='text-6xl font-bold'>GC.</p>
      <ul className='text-4xl flex gap-6'>
        <li className='hover'>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
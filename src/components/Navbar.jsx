import React from 'react'

function Navbar() {
  return (
    <nav>
      <p className='text-3xl font-bold'>gc.</p>
      <ul className='text-2xl flex gap-3'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
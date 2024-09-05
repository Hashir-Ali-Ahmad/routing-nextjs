import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-lime-300 flex justify-between items-center ps-10 pe-10 h-20 text-black font-extrabold'>
        <Link href="\">HOME</Link>
        <Link href="\about">ABOUT</Link>
        <Link href="\contact">CONTACT</Link>
        <Link href="\coming">COMING</Link>
    </div>
  )
}

export default Header
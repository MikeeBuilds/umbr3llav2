import Link from 'next/link'
import React from 'react'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        
]

const Navbar = () => {
  return (
    <div>
        <Link href="/">
            Umbr3lla
        </Link>
        <div>

        </div>
    </div>
  )
}

export default Navbar
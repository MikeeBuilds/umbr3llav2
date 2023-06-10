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
        url: "/blog"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    }
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
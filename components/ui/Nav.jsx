"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    }
]

const Nav = () => {
  return (
    <nav className="flex gap-8">{links.map((link, index)=> {
        return <Link href={link.path} key={index}>{link.name}</Link>
    })}</nav>
  )
}

export default Nav
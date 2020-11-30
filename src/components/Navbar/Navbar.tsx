import * as React from "react"
import NavbarLink from "./NavbarLink"

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="fixed top-0 flex flex-row justify-between w-screen py-3 px-3 border border-b-1 border-opacity-20 border-gray-600 bg-white mb-14 items-center z-10 ">
      <h1 className="text-2xl border-b-4 border-purple-600 border-opacity-75">
        Joshua Chisolm
      </h1>
      <div className="flex flex-row">
        <NavbarLink title="Home" section="" />
        <NavbarLink title="About" section="#aboutSection" />
        <NavbarLink title="Projects" section="#projects" />
        <NavbarLink title="Contact" section="#contact" />
      </div>
    </div>
  )
}

export default Navbar

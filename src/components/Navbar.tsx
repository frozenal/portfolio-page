import * as React from "react"
import NavbarLink from "./NavbarLink"

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="fixed top-0 flex flex-row justify-center w-screen py-3 px-3 border border-b-1 border-opacity-20 border-gray-600">
      <NavbarLink title="Home" />
      <NavbarLink title="About" />
      <NavbarLink title="Portfolio" />
      <NavbarLink title="Blog" />
    </div>
  )
}

export default Navbar

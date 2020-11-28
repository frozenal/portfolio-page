import * as React from "react"

interface Props {
  title: string
}

const NavbarLink = (props: Props) => {
  return (
    <div className="pl-3 text-xl" style={{ fontFamily: "Poppins" }}>
      {props.title}
    </div>
  )
}

export default NavbarLink

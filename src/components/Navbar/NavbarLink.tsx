import * as React from "react"

interface Props {
  title: string
  section: string
}

const NavbarLink = (props: Props) => {
  return (
    <div className="pl-3 text-xl" style={{ fontFamily: "Poppins" }}>
      <a href={props.section}>{props.title}</a>
    </div>
  )
}

export default NavbarLink

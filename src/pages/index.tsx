import * as React from "react"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import "../css/globals.css"

interface Props {}

const index = (props: Props) => {
  return (
    <div>
      <Navbar />
      <main className="mt-14 flex flex-row w-screen">
        <HeroSection />
      </main>
    </div>
  )
}

export default index

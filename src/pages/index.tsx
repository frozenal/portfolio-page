import * as React from "react"
import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import "../css/globals.css"

interface Props {}

const index = (props: Props) => {
  return (
    <div>
      <Navbar />
      <main className="mt-14 flex flex-col w-screen">
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  )
}

export default index

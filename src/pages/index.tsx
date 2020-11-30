import * as React from "react"
import ProjectSection from "../components/ProjectSection/ProjectSection"
import AboutSection from "../components/AboutSection/AboutSection"
import HeroSection from "../components/HeroSection/HeroSection"
import Navbar from "../components/Navbar/Navbar"
import "../css/globals.css"
import ContactSection from "../components/ContactSection/ContactSection"

interface Props {}

const index = (props: Props) => {
  return (
    <div>
      <Navbar />
      <main className="mt-14 flex flex-col w-screen">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </main>
      <footer>
        <ContactSection />
      </footer>
    </div>
  )
}

export default index

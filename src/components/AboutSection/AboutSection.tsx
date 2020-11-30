import * as React from "react"
import "./AboutSection.css"

interface Props {}

const AboutSection = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h2
        id="aboutSection"
        style={{ fontFamily: "Epilogue" }}
        className="text-3xl text-center rounded font-bold inline border-b-4 border-purple-600 border-opacity-75 py-0.5"
      >
        About Me
      </h2>
      <div
        className="pt-4 text-center md:w-5/12 sm:w-screen"
        style={{ fontFamily: "Epilogue" }}
      >
        I'm a high-school senior who loves to design and build applications for
        the web.
        <br />
        <br />
        Since I started self-teaching web development at the beginning of 2020,
        I have grown a passion for it. This website serves as a place for me to
        host my personal projects, and document my progress.
        <br />
        <br />
        <div className="font-bold">
          Here are some technologies I am skilled with:
        </div>
        <ul className="grid grid-cols-2 list-disc text-left w-7/12 mx-auto my-1">
          <li>React</li>
          <li>Javascript/Typescript/HTML/CSS</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutSection

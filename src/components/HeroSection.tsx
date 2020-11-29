import * as React from "react"

interface Props {}

const HeroSection = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center py-32">
      <h1 className="text-6xl font-bold ">
        Hi, I'm <span className="text-red-500">Joshua</span>
      </h1>
      <h2 className="pt-4 text-2xl">
        a <span className="text-purple-500">web development</span> enthusiast
      </h2>
    </div>
  )
}

export default HeroSection

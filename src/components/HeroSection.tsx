import * as React from "react"

interface Props {}

const HeroSection = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center py-32">
      <div className="text-6xl font-bold ">
        Hi, I'm <span className="text-red-500">Joshua</span>
      </div>
      <div className="pt-4 text-2xl">
        a <span className="text-purple-500">computer science</span> enthusiast
      </div>
    </div>
  )
}

export default HeroSection

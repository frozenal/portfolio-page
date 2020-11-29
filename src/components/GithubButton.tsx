import { FiGithub } from "@react-icons/all-files/fi/FiGithub"
import * as React from "react"

interface Props {
  githubLink: string
}

const GithubButton = (props: Props) => {
  return (
    <a
      href={props.githubLink}
      className="flex flex-row items-center justify-center p-2 border-2 border-black rounded hover:bg-black hover:text-white w-full md:w-auto"
    >
      <FiGithub />
      <span className="pl-2">Github</span>
    </a>
  )
}

export default GithubButton

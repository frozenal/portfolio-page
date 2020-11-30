import * as React from "react"
import { FiMail } from "@react-icons/all-files/fi/FiMail"
import { FiGithub } from "@react-icons/all-files/fi/FiGithub"

interface Props {}

const ContactSection = (props: Props) => {
  return (
    <div className="flex flex-col items-center w-full my-3">
      <h2
        id="contact"
        className="text-3xl rounded inline border-b-4 border-purple-600 border-opacity-75 py-0.5 text-center"
        style={{ fontFamily: "Epilogue" }}
      >
        Contact
      </h2>
      <div className="flex flex-row justify-center">
        <a
          href="mailto:georgiajosh22@gmail.com"
          className="border-4 rounded-full text-purple-500 border-purple-500 my-4 mx-2 hover:bg-purple-500 hover:text-white"
        >
          <FiMail className="text-5xl m-3" />
        </a>
        <a
          href="https://github.com/frozenal"
          className="border-4 rounded-full text-purple-500 border-purple-500 my-4 mx-2 hover:bg-purple-500 hover:text-white"
        >
          <FiGithub className="text-5xl m-3" />
        </a>
      </div>
    </div>
  )
}

export default ContactSection

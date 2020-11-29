import * as React from "react"
import ProjectCard from "./ProjectCard"

interface Props {}

const ProjectSection = (props: Props) => {
  return (
    <div id="projects" className="w-full text-center mt-8">
      <h2
        className="text-3xl text-green-600 underline"
        style={{ fontFamily: "Epilogue" }}
      >
        My Projects
      </h2>
      <div className="flex flex-row flex-wrap justify-center">
        <ProjectCard
          projectName="Portfolio Page"
          projectDescription="My personal portfolio for displaying my projects and skills. This website is also my first experience using the React framework Gatsby, and I quite enjoyed it."
          projectSkills={["React", "Gatsby", "Tailwind"]}
          hasImage={true}
          imagePath="portfolioPageThumbnail.png"
          portfolioPath="/projects/portfolio"
        />
      </div>
    </div>
  )
}

export default ProjectSection

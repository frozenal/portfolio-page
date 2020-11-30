import * as React from "react"
import ProjectCard from "../ProjectCard/ProjectCard"

interface Props {}

const ProjectSection = (props: Props) => {
  return (
    <div className="w-full text-center mt-8">
      <h2
        id="projects"
        className="text-3xl rounded font-bold inline border-b-4 border-purple-600 border-opacity-75 py-0.5"
        style={{ fontFamily: "Epilogue" }}
      >
        Projects
      </h2>
      <div className="flex flex-row flex-wrap justify-center">
        <ProjectCard
          projectName="Portfolio Page"
          projectDescription="My personal portfolio for displaying my projects and skills. This website is also my first experience using the React framework Gatsby, a framework for static site generation. I enjoyed the development experience, and the webpage is lightning fast."
          projectSkills={["React", "Gatsby", "Tailwind"]}
          hasImage={true}
          imagePath="portfolioPageThumbnail.png"
          githubPath="https://github.com/frozenal/portfolio-page"
        />
      </div>
    </div>
  )
}

export default ProjectSection

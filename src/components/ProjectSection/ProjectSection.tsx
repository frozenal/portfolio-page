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
      <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-center">
        <ProjectCard
          projectName="Portfolio Page"
          projectDescription="My personal portfolio for displaying my projects and skills. This website is also my first experience using the React framework Gatsby, a framework for static site generation. I enjoyed the development experience, and the webpage is lightning fast."
          projectSkills={["React", "Gatsby", "Tailwind"]}
          hasImage={true}
          imagePath="portfolioPageThumbnail.png"
          githubPath="https://github.com/frozenal/portfolio-page"
        />
        <ProjectCard
          projectName="Twitter Clone"
          projectDescription="A clone of the Twitter website using the PERN stack. Currently in the very early stages of the project. Right now I'm working on the backend."
          projectSkills={[
            "PostgreSQL",
            "ExpressJS",
            "NodeJS",
            "React",
            "NextJS",
            "GraphQL",
          ]}
          hasImage={false}
          githubPath="https://github.com/frozenal/twitter-clone"
        />
      </div>
    </div>
  )
}

export default ProjectSection

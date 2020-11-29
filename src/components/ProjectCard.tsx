import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import "./ProjectCard.css"

interface Props {
  projectName: string
  projectDescription: string
  projectSkills: string[]
  hasImage: boolean
  imagePath?: string
  portfolioPath: string
}

const ProjectCard = (props: Props) => {
  let fluid
  if (props.imagePath) {
    const thumbnails = useStaticQuery(graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
              gatsbyImageData
            }
          }
        }
      }
    `)
    for (const imageNode of thumbnails.allImageSharp.edges) {
      if (imageNode.node.fluid.originalName == props.imagePath) {
        fluid = imageNode.node.fluid
      }
    }
    console.log(fluid)
  }

  return (
    <div className="w-96 h-92 flex flex-col my-6 border border-black border-opacity-10 shadow-xl p-4">
      <Img fluid={fluid} className="my-2" />
      <div className="py-4 border-t-2 border-opacity-5">
        <h2 className="w-full text-left text-3xl font-semibold px-2">
          {props.projectName}
        </h2>
        <div className="flex flex-row">
          {props.projectSkills.map(skill => (
            <h3 className="pl-2 text-gray-400 text-xl font-normal">{skill}</h3>
          ))}
        </div>
        <div className="text-left px-2">{props.projectDescription}</div>
        <div className="text-sm text-right mt-4 opacity-50">
          <Link to={props.portfolioPath}>Read more about this project</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

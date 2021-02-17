import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {

  const { id, name, logo } = props
  
  return (
    <div className="project-card" id={ id }>
        <Link to='#'><img src={ logo } alt={ name } /><br/></Link>
    </div>
  )
}

export default ProjectCard

import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';


const ProjectsPage = (props) => {
    
    const projects = props.projects.projects

    return (
        <>
            <Modal isOpen={false}>
                <h1>
                    hello
                </h1>
            </Modal>
            <h1>Projects</h1>
            <h3>Take a look at some of my favorite creations!</h3><br/>
            <div className="project-cards">
                { projects.map(project => <ProjectCard key={ project.id } { ...project } />) }
            </div><br/><br/>
        </>
    )
}

const mapStateToProps = (state) => ({
    projects: state.projects
  })
  
  export default connect(mapStateToProps)(ProjectsPage)
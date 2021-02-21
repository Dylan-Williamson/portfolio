import React from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';


const ProjectsPage = () => {
    
    const projects = [

        {
            id: 1,
            name: "Lab Locator",
            logo: "https://i.ibb.co/Ykj9cZV/lab-Locator.jpg",
            description: "hi",
            github: "hi",
            demo: "hi",
            technologies: "react",
        },

        {

            id: 2,
            name: "LooKEY Monster",
            logo: "https://i.ibb.co/sRnxxv3/Lookey-Monster.jpg",
            description: "hi",
            github: "hi",
            demo: "hi",
            technologies: "react",

        },

        {

            id: 3,
            name: "MixMasters",
            logo: "https://i.ibb.co/GRKqnF0/mmlogo.png",
            description: "hi",
            github: "hi",
            demo: "hi",
            technologies: "react",

        }
    ]

    return (
        <>
            <h1>Projects</h1>
            <h3>Take a look at some of my favorite creations!</h3><br/>
            <div className="project-cards">
                { projects.map(project => <ProjectCard key={ project.id } { ...project } />) }
            </div><br/><br/>
        </>
    )
}
export default ProjectsPage;
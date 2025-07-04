import Project from "./Project";
import { useState } from "react";
import { projectsData } from '../../../data/projectsData.js';


export default function Projects() {

    const [showAll, setShowAll] = useState(false)


    return (
        <>   
            <h2 className="projects-h2">Latest Projects</h2>
            <div className="project-grid">
                {
                    projectsData.map((project, index) => {

                        if(showAll === false && index <= 2) {
                            return (
                                <Project
                                    key={index}
                                    img={project.img}
                                    title={project.title}
                                    stack={project.stack}
                                />
                            ) 
                        } else if (showAll) {
                            return (
                                <Project 
                                    key={index}
                                    img={project.img}
                                    title={project.title}
                                    stack={project.stack}
                                />
                            )
                        }
                    })  
                }
                
            </div>

            <button className="projects-btn" onClick={()=>setShowAll(prev => !prev)}>
                {`Show ${showAll ? 'Less' : 'More'} Projects`}</button>
        </>
    )
}
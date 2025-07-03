import Project from "./Project";
import { projectImages } from "./ProjectImages";
import { useState } from "react"

export default function Projects() {

    const [showAll, setShowAll] = useState(false)

    return (
        <>        
            <h2 className="projects-h2">Latest Projects</h2>
            <div className="project-grid">
                <Project img={projectImages.vanlife}
                    title="Example project"
                    stack={['Next.JS', 'React', 'PostgreSQL']}
                />
                <Project img={projectImages.vanlife}
                    title="VanLife - Van Renting"
                    stack={['React', 'React Router', 'Firebase']}
                />
                <Project img={projectImages.vanlife}
                    title="React Component Library"
                    stack={['React', 'React Router', 'Firebase']}
                />

                {showAll && 
                <>
                    <Project img={projectImages.vanlife}
                        title="Example project"
                        stack={['Next.JS', 'React', 'PostgreSQL']}
                    />
                    <Project img={projectImages.vanlife}
                        title="Example project"
                        stack={['Next.JS', 'React', 'PostgreSQL']}
                    />
                </>
                }
            </div>

            <button className="projects-btn" onClick={()=>setShowAll(prev => !prev)}>Show All Projects</button>
        </>
    )
}
import Project from "./Project";
import { projectImages } from "./ProjectImages";

export default function Projects() {


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
            </div>
        </>
    )
}
import Technology from "./Technology";
import { techIcons } from "./technologyIcons";

export default function TechStack() {


    return (
        <>
            <div className="techstack-container">
                <Technology name="React" icon={techIcons.react}/>
                <Technology name="Javascript" icon={techIcons.javascript}/>
                <Technology name="Typescript" icon={techIcons.typescript}/>
                <Technology name="HTML" icon={techIcons.html}/>
                <Technology name="CSS" icon={techIcons.css}/>
                <Technology name="Tailwind CSS" icon={techIcons.tailwind}/>
                <Technology name="Express.JS" icon={techIcons.express}/>
                <Technology name="Next.JS" icon={techIcons.next}/>
            </div>
            <p>TechStack section goes here</p>
        </>
    )
}
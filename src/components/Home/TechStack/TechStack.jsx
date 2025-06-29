import Technology from "./Technology";
import { techIcons } from "./technologyIcons";

export default function TechStack() {

    const techStack = [
    { name: "React", icon: techIcons.react },
    { name: "Javascript", icon: techIcons.javascript },
    { name: "Typescript", icon: techIcons.typescript },
    { name: "HTML", icon: techIcons.html },
    { name: "CSS", icon: techIcons.css },
    { name: "Tailwind", icon: techIcons.tailwind },
    { name: "Express.JS", icon: techIcons.express },
    { name: "Next.JS", icon: techIcons.next },
  ];

    return (
        <>
            <div className="techstack-container">
                <Technology name="React" icon={techIcons.react}/>
                <Technology name="Javascript" icon={techIcons.javascript}/>
                <Technology name="Typescript" icon={techIcons.typescript}/>
                <Technology name="HTML" icon={techIcons.html}/>
                <Technology name="CSS" icon={techIcons.css}/>
                <Technology name="Tailwind" icon={techIcons.tailwind}/>
                <Technology name="Express.JS" icon={techIcons.express}/>
                <Technology name="Next.JS" icon={techIcons.next}/>
            </div>
        </>
    )
}
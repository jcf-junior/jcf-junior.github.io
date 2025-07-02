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
                <Technology name="React" id={1} icon={techIcons.react}/>
                <Technology name="Javascript" id={2} icon={techIcons.javascript}/>
                <Technology name="Typescript" id={3} icon={techIcons.typescript}/>
                <Technology name="HTML" id={4} icon={techIcons.html}/>
                <Technology name="CSS" id={5} icon={techIcons.css}/>
                <Technology name="Tailwind" id={6} icon={techIcons.tailwind}/>
                <Technology name="Express.JS" id={7} invert={true} icon={techIcons.express}/>
                <Technology name="Next.JS" id={8} invert={true} icon={techIcons.next}/>
            </div>
        </>
    )
}
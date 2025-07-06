import AboutMe from "./About/AboutMe"
import Projects from "./Projects/Projects"
import Education from "./Education/Education"
import Experience from "./Experience/Experience"
import TechStack from "./TechStack/TechStack"
import Certifications from "./Certifications/Certifications"

export default function Home() {

    return (
    <>
        <main>
            <div className="home-container">
                <AboutMe />
                <br/>
                <TechStack />
                <Projects />
                <Certifications />
                <Experience />
                <Education />
            </div>

        </main>

        
    </>
    )
}
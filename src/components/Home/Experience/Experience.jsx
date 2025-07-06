import ExperienceCard from "./ExperienceCard.jsx";
import { experienceData } from "../../../data/experienceData.js";

export default function Experience() {


    return (
        <>
            <h2>Experience</h2>
            <div className="experience">
            {experienceData.map((item, index) =>{
                return(
                    <ExperienceCard 
                        key={index}
                        role={item.role}
                        company={item.company}
                        startDate={item.startDate}
                        endDate={item.endDate}
                    />
                )
            })}
            </div>
        </>
    )
}
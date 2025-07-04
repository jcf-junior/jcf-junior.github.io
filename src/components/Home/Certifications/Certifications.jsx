import Certification from "./Certification";
import { certificationsData } from "../../../data/certificationsData";

export default function Certifications() {

    return (
        <>
            <h2>Certifications</h2>
            <div className="certifications-container">
                {
                    certificationsData.map((cert, index) => {
                        return(
                            <Certification key={index} issuer={cert.issuer} title={cert.title} date={cert.date} link={cert.link}/>
                        )
                    })
                }
            </div>
        </>
    )
}
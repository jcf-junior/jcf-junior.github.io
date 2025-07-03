import Certification from "./Certification";

export default function Certifications() {
    return (
        <>
            <h2>Certifications</h2>
            <div className="certifications-container">
                <Certification title='FullStack Developer Path' date="2025"/>
                <Certification title='Frontend Developer Path' date="2025"/>
                <Certification title='CCNA: Routing & Security' date="2025"/>
            </div>
        </>
    )
}
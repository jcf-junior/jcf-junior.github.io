export default function ExperienceCard({role, company, startDate, endDate}) {

    return (
        <>
            <div className="experience-card hover-effect">
                <div className="experience-card-content">
                    <p className="company">{company}</p>
                    <p className="card-date">{startDate} - {endDate}</p>
                </div>
                    <p className="role">{role}</p>
            </div>
        </>
    )
}
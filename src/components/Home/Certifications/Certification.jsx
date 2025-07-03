export default function Certification({title, date, ...rest}) {

    return (
        <>
            <div className="certification">
                <p className="certification-title">{title}</p>
                <p className="certification-date">{date}</p>
            </div>
        </>
    )
}
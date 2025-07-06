export default function Certification({issuer, title, date, link, ...rest}) {

    return (
        <>  
            <a className="certification-effect-wrapper hover-effect" href={link} target='_blank'>
                <div className="certification">
                    <p className="certification-title"><span>{issuer}</span> - {title}</p>
                    <p className="certification-date">{date}</p>        
                </div>
            </a>
        </>
    )
}
export default function AboutMe() {
    const currentDate = new Date()
    const birthYear = new Date(2002, 1) 
    const age = currentDate.getFullYear() - birthYear.getFullYear()

    return (

        <>
            <div className="about-container">
                <h1>
                    FULLSTACK
                    <br/>
                    <span className="about-h1">DEVELOPER</span>
                </h1>
                <p className="description">Highly energetic {age}-year-old developer driven by curiosity and caffeine. 
                <br/>
                My experience includes testing enterprise-level apps as a freelancer and building web apps from scratch one coffee at a time. 
                </p>
            </div>
            
        </>
    )
}
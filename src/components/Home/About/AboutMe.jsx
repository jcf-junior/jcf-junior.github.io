export default function AboutMe() {
    const currentDate = new Date()
    const birthYear = new Date(2002, 1) 
    const age = currentDate.getFullYear() - birthYear.getFullYear()

    return (

        <>
            <div className="about-container">
                <h1>FULLSTACK DEVELOPER</h1>
                <p className="description">Hello! I am highly energetic {age}-year-old driven by curiosity and caffeine. I write code, and I overthink variable names. I’ve tested enterprise-level apps as a freelancer and built projects from scratch in Node.js. 
                
                Lately, I’ve been focused on building better systems, learning by doing, and refining the way I think about code—one deep dive (and coffee) at a time.</p>
            </div>
            
        </>
    )
}
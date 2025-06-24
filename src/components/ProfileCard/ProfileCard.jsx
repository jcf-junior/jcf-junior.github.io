
import React from "react"
import SocialIcon from "./SocialIcon.jsx"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import githubIcon from "../../assets/icons/github.svg"
import emailIcon from "../../assets/icons/email.svg"
 
export default function ProfileCard() {

    return (
        <>  
            <div className="profile-card-container">
                <img src="./src/assets/profileDemo.jpg" alt=""/>
                <div className="profile-card-text">
                    <h1>José Júnior</h1>
                    <p>Full Stack Developer</p>
                    <p>Viana do Castelo, Portugal</p>
                </div>
                <div className="profile-card-socials">
                    <SocialIcon icon={linkedinIcon} href="http://linkedin.com/in/jcfjunior/" alt="an image of LinkedIn's logo"/>
                    <SocialIcon icon={githubIcon} href="http://github.com/jcf-junior/" alt="an image of GitHub's logo"/>
                    {/* <SocialIcon icon={emailIcon} href='mailto:josecaldas34@gmail.com' alt="an image of an evelope"/> */}
                </div>
                
                <a href='mailto:josecaldas34@gmail.com'><button className="btn-grad" type="button">Contact</button></a>
            </div>
        </>
    )
}
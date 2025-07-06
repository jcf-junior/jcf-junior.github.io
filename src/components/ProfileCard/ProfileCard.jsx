
import React from "react"
import SocialIcon from "./SocialIcon.jsx"
import linkedinIcon from "../../assets/icons/Social/linkedin.svg"
import githubIcon from "../../assets/icons/Social/github.svg"
import emailIcon from "../../assets/icons/Social/email.svg"
import profilePic from '../../assets/profileDemo.jpg'
 
export default function ProfileCard() {

    return (
        <>  
            <div className="profile-card-container">
                <img src={profilePic} alt=""/>
                <div className="profile-card-text">
                    <p className="name">José Júnior</p>
                    <p>Full Stack Developer</p>
                    <p>Viana do Castelo, Portugal</p>
                </div>
                <div className="profile-card-socials">
                    <SocialIcon icon={linkedinIcon} href="http://linkedin.com/in/jcfjunior/" alt="an image of LinkedIn's logo"/>
                    <SocialIcon icon={githubIcon} href="http://github.com/jcf-junior/" alt="an image of GitHub's logo"/>
                </div>
                
                <a href='mailto:josecaldas34@gmail.com'><button className="profile-btn" type="button">Contact</button></a>
            </div>
        </>
    )
}
export default function SocialIcon({icon, color, alt, href, ...rest}) {

    const altText = alt ? alt : `An icon of ${icon}` 

    return (
        <a href={href} target="_blank">
            <img src={icon} alt={altText}/>
        </a>
    )
}
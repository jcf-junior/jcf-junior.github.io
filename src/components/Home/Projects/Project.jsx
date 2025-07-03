export default function Project({img, title, stack = [], ...rest}) {

    const stackEl = (stack && typeof stack === typeof []) ? stack.join(' / ') : [] 

    return (
        <div className="project-container">
            <img className="project-img" src={img} alt=""/>
            <div className="project-text">
                <p className="project-title">{title}</p>
                <p>{stackEl}</p>
            </div>
        </div>
    )
}
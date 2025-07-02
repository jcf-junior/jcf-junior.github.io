
export default function Technology({name, icon, id, invert, ...rest}) {

    return (
        <>
            <div className={`technology-square square-${id} ${invert ? "invert-color" : ""}`}>
                <img className="technology-img" src={icon} alt={`logo of ${name}`} />
            </div>
        </>
    )

}
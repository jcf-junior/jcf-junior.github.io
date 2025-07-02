
export default function Technology({name, icon, id, ...rest}) {

    return (
        <>
            <div className={`technology-square square-${id}`}>
                <img className="technology-img" src={icon} alt={`logo of ${name}`} />
                {/* <p>{name}</p> */}

            </div>
        </>
    )

}
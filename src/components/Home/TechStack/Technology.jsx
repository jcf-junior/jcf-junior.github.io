
export default function Technology({name, icon, ...rest}) {

    return (
        <>
            <div className="technology-square">
                <img className="technology-img" src={icon} alt={`logo of ${name}`} />
                <p>{name}</p>

            </div>
        </>
    )

}
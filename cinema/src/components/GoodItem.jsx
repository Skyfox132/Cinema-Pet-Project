
function GoodItem(props) {
    const {
        id,
        name,
        descripton,
        price,
        full_background,
    } = props
    return (

        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title left">{name}</span>

                <p>{descripton}</p>
            </div>
            <div className="card-action">
                <button className="btn purple darken-3">Buy now</button>
                <span className='right'>{price}</span>

            </div>
      </div>



    )
}

export {GoodItem}


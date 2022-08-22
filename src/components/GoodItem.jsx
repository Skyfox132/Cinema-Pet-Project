
function GoodItem(props) {
    const {
        id,
        name,
        descripton,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props
    return (

        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>

            </div>
            <div className="card-action bottom">
                <p>{descripton}</p>

                <button className="btn blue accent-3" onClick={()=> addToBasket({
                    id,
                    name,
                    price
                })}>Buy now</button>
                <span className='right'>{price} coins</span>

            </div>
      </div>



    )
}

export {GoodItem}


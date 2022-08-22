function BasketItem(props) {
    const {id, name, price, quantity,
        removeFromBasket = Function.prototype,
        changeCount = Function.prototype,
    } = props
    return (
        <li className="collection-item cart-item">{name}  price: {price} coins
            <span className="btn-count" onClick={()=> {changeCount(id, "increment")}}>+</span>
            x {quantity}
            <span className="btn-count" onClick={()=> {changeCount(id, "decrement")}}>-</span>
            
            <span className="secondary-content delete-item" onClick={()=> removeFromBasket(id)}>
                <i className="material-icons closeIcon">delete</i>
            </span>
        </li>
    )
}


export {BasketItem}
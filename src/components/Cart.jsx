function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props
    return <div className="cart blue darken-1" onClick={handleBasketShow}>
        <i className="material-icons cart-icon">shopping_cart</i>
        {quantity ? <span className="quantity">{quantity}</span> : null}
    </div>
}
export {Cart}
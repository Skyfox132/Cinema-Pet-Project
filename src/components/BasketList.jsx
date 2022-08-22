import {BasketItem} from './BasketItem'


function BasketList(props) {
    const { order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        changeCount,

    } = props
    const totalPrice = order.reduce((sum, el)=> {
        return sum + el.price  * el.quantity
    }, 0)

    return(
    <ul className="collection backet-list">
            <li className="collection-item active red darken-4 basketholder">Корзина
                <span className="secondary-content close-tab" onClick={handleBasketShow}>
                    <i className="material-icons close-basket">clear</i>
                </span>
            </li>
            {
                    order.length ? (order.map((item) => <BasketItem key={item.id} 
                    removeFromBasket={removeFromBasket}
                    changeCount={changeCount}
                    {...item}
                     />))
                    : (<li className="collection-item">Добавте товары</li>)
            }
            <li className="collection-item active red darken-4">Общая стоимось: {totalPrice} Coins</li>
    </ul>
    )   
}

export{BasketList}
import {API_KEY, API_URL} from '../config'
import { React, useState, useEffect } from 'react';
import {GoodList} from './GoodList'
import {Preloader} from './Preloader'
import {Cart} from './Cart'
import {BasketList} from './BasketList'






function Main() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)


    // show/close basket inventory
    const handleBasketShow = ()=> {
            setBasketShow(!isBasketShow)
    }


    const changeCount = (itemID, marker) => {
        const newOrder = order.map((el) => {
            if (el.id === itemID && marker === "increment") {

                const newQuantityInc = el.quantity + 1

                return {
                    ...el,
                    quantity: newQuantityInc,
                }
            } else if (el.id === itemID && marker === "decrement") {
                const newQuantityDec = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantityDec >=0 ? newQuantityDec : 0
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }
    //
    // const changeCount = (itemID, marker) => {
    //     const newOrder = order.map((el) => {
    //         if(el.id === itemID) {
    //             if(marker === "increment") {
    //                 const newQuantity = el.quantity + 1;
    //                 return {
    //                     ...el,
    //                     quantity: newQuantity,
    //                 }
    //             } else if (marker === "decrement") {
    //                 const newQuantity = el.quantity - 1
    //                 return {
    //                     ...el,
    //                     quantity: newQuantity >= 0 ? newQuantity : 0,
    //                 }
    //             } 
    //         } else {
    //             return el
    //         }
    //         console.log(newOrder)
    //         setOrder(newOrder)
    //     })
    // }

    // remove from basket f-on
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId)
        setOrder(newOrder)
    }

    // function to add good to cart 
    function addToBasket(item) {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }



    }


    useEffect(function getGoods() {
        if (!loading) {
            return
        }
        // console.log(API_KEY, API_URL)
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            data.featured && setGoods(data.featured)
            setLoading(false)
        })
        .catch(err => console.log(err)) 
    })




    return (<div className="main">
        <main>
            {
                isBasketShow && <BasketList
                order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                changeCount={changeCount}
                />
            }
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Preloader /> : <GoodList goods={goods} addToBasket={addToBasket}/>}

        </main>
    </div>
    )
}
export {Main}
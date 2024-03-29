import {API_KEY, API_URL} from '../config'
import { React, useState, useEffect } from 'react';
import {GoodList} from './GoodList'
import {Preloader} from './Preloader'






function Main() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(function getGoods() {
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
            {loading ? <Preloader /> : <GoodList goods={goods} />}
        </main>
    </div>
    )
}
export {Main}
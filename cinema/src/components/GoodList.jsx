import {GoodItem} from './GoodItem'


function GoodList(props) {
    const {goods = []} = props

    if(!goods.length) {
       return  (<h3>Nothing found</h3>)
    }

    return (
        <div className="goods">
            {
                goods.map(item => (
                    <GoodItem key={item.id} {...item} />
                ))
            }
        </div>
    )
}

export {GoodList}
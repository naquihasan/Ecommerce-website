import React from 'react'
import './Popular.css'
import Items from '../Items/Items'
import data_product from '../../assets/data'

const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className='popular-items'>
            {data_product.map((items, i) => {
                    return <Items  key={i} id={items.id} name={items.name} image={items.image}  new_price={items.new_price} old_price={items.old_price}/>
            } )}
            </div>
        </div>
    )
}

export default Popular
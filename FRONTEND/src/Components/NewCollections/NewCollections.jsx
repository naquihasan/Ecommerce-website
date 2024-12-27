import React from 'react'
import './NewCollections.css'
import Items from '../Items/Items'
import new_collections from '../../assets/new_collections'


const NewCollections = () => {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className='new-collection-item'>
            {new_collections.map((items , i)=>{
                return <Items key={i} id={items.id} name={items.name} image={items.image}  new_price={items.new_price} old_price={items.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections
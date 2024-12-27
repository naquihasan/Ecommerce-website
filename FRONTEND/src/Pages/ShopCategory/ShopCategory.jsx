import React, {useContext} from 'react'
import './ShopCategory.css'
import Items from '../../Components/Items/Items'
import { ShopContext } from '../../Contexts/shopContext'

const ShopCategory = (props) => {

  const all_product = useContext(ShopContext);

  console.log(all_product , 'all_product');

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className='shopCategory-container'>
        {
          
          all_product.map((item,i)=>{ 
            if(props.category===item.category){
              return  <Items key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price} />
            }
          })
        }
      </div>
    </div>
  )
}

export default ShopCategory
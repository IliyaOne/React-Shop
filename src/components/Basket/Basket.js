import React from 'react';
import ProductCard from '../ProductCards/Card/Card';
import clasess from './Basket.scss';
import EmptyBasket from './EmptyBasket/EmptyBasket';



const Basket = (props) => {

  let basket;

  if(props.basket.length < 1){
     basket = <EmptyBasket />
  }else{
    basket = props.basket.map( (item, index) => {  
     return <ProductCard product={ item } key={ item.key } id={ index } addProductBasket={ props.addProductBasket } />
    })
  }
  
  return (
    <div className={ clasess.Container }>
      <div className={ clasess.Inner_Container }>
        <div className={ clasess.Container_Title }>
          <h1>Корзина</h1>
        </div>
         { basket }
      </div>
    </div>
  )
}

export default Basket;

import React from 'react';
import CardShop from '../Card/Card';
import { Button } from 'antd';
import clasess from './Basket.scss'

const Empty = () =>{
  return ( 
    <div className={ clasess.Containe_Empty }>
     <div className={ clasess.Containe_Empty_Inner }>
      <div className={ clasess.Containe_Empty_Title }>В вашей корзине пусто? Это не страшно!</div>
      <p>Если Вы зарегистрированы у нас на сайте и в вашей корзине были товары, то чтобы их увидеть необходимо авторизоваться</p>
      <Button type="primary">Перейти к покупкам</Button>
     </div>
    </div>
  );
}

const Basket = (props) => {

  let basket;

  if(props.basket.length < 1){
     basket = <Empty />
  }else{
    basket = props.basket.map( (item, index) => {  
     return <CardShop product={ item } key={ item.key } id={ index } addProductBasket={ props.addProductBasket } />
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

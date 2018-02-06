import React from 'react';
import clasess from './EmptyBasket.scss';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


const Empty = () => {
    return ( 
      <div className={ clasess.Container }>
       <div className={ clasess.Inner_Container }>
        <div className={ clasess.Title }>В вашей корзине пусто? Это не страшно!</div>
        <p>Если Вы зарегистрированы у нас на сайте и в вашей корзине были товары, то чтобы их увидеть необходимо авторизоваться</p>
        <Button type="primary"><Link to={'/'}>Перейти к покупкам</Link></Button>
       </div>
      </div>
    );
  }
  
  export default Empty;
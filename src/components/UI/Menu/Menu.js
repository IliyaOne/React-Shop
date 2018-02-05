import React from 'react';
import { Link } from 'react-router-dom';

import clasess from './Menu.scss';

const Menu = (props) => {
  return (
    <nav className={clasess.Container}>
       <ul>
         <li>
           <Link to='/'>Главная</Link>
         </li>
         <li>
           <Link to='/admin'>Редактировать</Link>
         </li>
       </ul>
        <ul>
          <li>
           <Link to='/cart'>Корзина <span>({ props.counter })</span></Link>
          </li>
        </ul>
    </nav>
  )
}

export default Menu;

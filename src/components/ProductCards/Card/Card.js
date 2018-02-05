
import React from 'react';
import classes from './Card.scss';

const Card = (props) => {

  return (
    <div className={ classes.Column }>
      <div className={ classes.Container }>
        <div className={ classes.Product_Image }>
          <img src={ props.product.img } alt=""/>
        </div>
        <div className={ classes.Info }>
          <p className={ classes.Company }>{ props.product.company }</p>
          <p className={ classes.Model }>{ props.product.model }</p>
          <p className={ classes.Price }>{ props.product.price } руб.</p>
        </div>
        <div  onClick={ () => props.addProductBasket( props.product.key )  } 
              className={ props.product.clicked ? [classes.ButtonAdd, classes.Active].join(" ") : classes.ButtonAdd } >
          { props.product.textAdd }
        </div>
      </div>
    </div>
  )
}

export default Card;



import React from 'react';
import Card  from './Card/Card';
import classes from './Cards.scss';


const  Cards  = (props) =>  {

  let cards = [];
    if(props.listProducts){
      cards = props.listProducts.map( product => {
           return <Card product = { product } key = { product.key } addProductBasket = { props.addProductBasket }/>
       })
    }

    return (
      <div>
        <div className={classes.Container}>
          { cards }
        </div> 
      </div> 
    )

}

export default Cards;
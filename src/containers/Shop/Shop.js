import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { notification } from 'antd';
import  'antd/dist/antd.css';
import base from '../../api/base';
import Header from '../../components/UI/Header/Header';
import Menu from '../../components/UI/Menu/Menu';
import Cards from '../../components/ProductCards/Cards';
import Admin from '../../components/Admin/Admin';
import Basket from '../../components/Basket/Basket';



class Shop extends Component {

  state = {
    counter: 0,
    phones: null,
    basket:[]
  }


  componentDidMount () {
    this.fetchProduct();
  }


  fetchProduct = () =>{
    let phones = {};
    base.fetch('phones', {
      context: this,
      state: 'phones',
      then( data )  {
        for(let key in data){
          phones[key] = { ...data[key], ...{ key:key, clicked:false, textAdd: "Добавить" } }
        }
        this.setState({ phones: phones });
      },
      catch(error)  {
      }
    })
  }


  deleteProduct = (key) => {
    base.remove('phones/' + key).then((data) => {
      this.fetchProduct("");
      notification['success']({
        message: "Продукт успешно удален!"
      });
    }).catch(error => {
      
    });
  }

  addProductBasket = (id) => {
   let phones = this.state.phones,
       counter = 0,
       basket = this.state.basket;


   phones[id].clicked = !phones[id].clicked;
   phones[id].textAdd = phones[id].clicked ? 'Удалить' : 'Добавить';

   counter = phones[id].clicked ? this.state.counter + 1 : this.state.counter - 1;

   if(phones[id].clicked){
     basket.push(phones[id])
   }else{
     basket.map( (phone,index) => {
       if(phone.key === phones[id].key){ 
           basket.splice(index, 1);
       }
     })
     
   }

   this.setState({ counter: counter, phones: phones, basket: basket })
  }




  render() {

    let listProducts = [];

    if(this.state.phones){
      listProducts = Object.keys(this.state.phones).map( (key) => {
        return this.state.phones[key];
      })
    }

    return (
      <div>
        <Header>
          <Menu counter={ this.state.counter } />
        </Header>
       <Switch>
          <Route path = "/" exact render =  { () =>  <Cards addProductBasket = { this.addProductBasket }  listProducts = { listProducts } /> } />
          <Route path = "/admin"   render = { () =>  <Admin listProducts  =  { listProducts }  
                                                            deleteProduct = { this.deleteProduct }
                                                            fetchProduct  = { this.fetchProduct } 
                                                            dataPhones = { this.state.phones } /> } />
          <Route path = "/cart"   render =  { () =>  <Basket basket = { this.state.basket } addProductBasket = { this.addProductBasket } /> } />
       </Switch>
      </div>
    )
  }
}

export default Shop;
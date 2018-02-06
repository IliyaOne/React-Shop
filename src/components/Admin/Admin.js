import React from 'react';
import { Button} from 'antd';
import { Route, Link, Switch } from 'react-router-dom';
import classes from './Admin.scss';
import ProductForm from '../Admin/ProductForm/ProductForm';

import ProductList from '../Admin/ProductList/ProductList';


let  Admin = (props) =>{

  let listProducts = props.listProducts;
  let dataPhones = props.dataPhones;
  let fetchProduct = props.fetchProduct;

  return (
    <div className={ classes.Container }>
      <div className={ classes.Inner_Container }>
        <div className={ classes.Container_Button }>
              <Button><Link to='/admin'>Список телефонов</Link></Button>
              <Button><Link to='/admin/new-product'>Добавить телефон</Link></Button>
        </div>
          <Switch>
              <Route exact path='/admin'  render = { () =>  <ProductList listProducts = { props.listProducts } 
                                                                         deleteProduct = { props.deleteProduct } /> } />
              <Route path='/admin/new-product'  render = { props =>  <ProductForm  { ...props } fetchProduct = { fetchProduct } 
              listProducts = { listProducts } /> } />

              <Route path='/admin/edit/:number' render = { props =>  <ProductForm dataPhones = { dataPhones } { ...props } 
                                                                                  fetchProduct = { fetchProduct } /> } />
          </Switch>
        </div>
    </div>
  )
}

export default Admin;
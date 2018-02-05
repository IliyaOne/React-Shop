import React from 'react';
import { Table, Divider } from 'antd';
import { Link } from 'react-router-dom';
import clasess from './ProductList.scss';
import Auxy from '../../../Hoc/Auxy';





const ProductList  = (props) =>{

  const columns = [{
    title: 'Модель',
    dataIndex: 'model',
    key: 'model'
  }, {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price'   
  }, {
    title: 'Бренд',
    dataIndex: 'company',
    key: 'company'
  },
  {
    title: 'Редактирование',
    key: 'editing',
    render: (text, record, index) => (
    <span>
        <Link to={ "/admin" } onClick={ () => props.deleteProduct(record.key) } > Удалить </Link>
        <Divider type="vertical" />
        <Link to={ "/admin/edit/" + record.key } > Редактировать </Link>
    </span>
    )
  }
  ]
  
  return (
    <Auxy>
      <Table columns={ columns } dataSource={ props.listProducts }  pagination={ false } className={ clasess.Container }/>
    </Auxy>
  )
}


export default ProductList;

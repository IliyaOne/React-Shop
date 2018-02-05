import React, { Component } from 'react'
import { Form, Input, Button, notification } from 'antd';
import clasess from './ProductForm.scss'
import base from '../../../base';

const FormItem = Form.Item;


class ProductForm extends Component {

  handleSubmit = (e, typeForm) => {
    let url = this.props.match.params.number;    

    e.preventDefault();
    
    if(typeForm === "update"){
      this.updateInfoProduct(url);
    }else{
      this.addNewProduct(url);
    }
  }

  
  updateInfoProduct (idProduct){
    this.props.form.validateFields((err, values) => {
     base.update('phones/' + idProduct, {
       data: values
     }).then((response) => {
      notification['success']({
        message: "Информация успешно обновлена!"
      });
      this.props.fetchProduct("");
     }).catch(err => {
   
     });

   });
  }

  addNewProduct = (idProduct) => {
    this.props.form.validateFields((err, values) => {
      base.push('phones', {
        data: values
      }).then((response) => {
        this.props.fetchProduct("");
        notification['success']({
          message: "Продукт успешно добавлен!"
        });
      }).catch(err => {
      });

    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    let buttonFormText = "",
        actionForm = ""; 

    if(this.props.match.params.number){
      buttonFormText =   "Обновить информацию"
      actionForm = 'update';
    }else{
      buttonFormText =   "Добавить товар";
      actionForm = 'add_product';
    }


    return (
      <Form onSubmit={ e => this.handleSubmit(e, actionForm) } className={ clasess.Container }>
        <FormItem label="Модель" style={{ marginBottom:'0px'}}>
          {getFieldDecorator('model', {
            rules: [{ required: true, message: 'Вы забыли указать цену модель телефона!' }],
          })(
            <Input  placeholder="Модель телефона" />
          )}
        </FormItem>
        <FormItem label="Цена" style={{ marginBottom:'0px'}}>
          {getFieldDecorator('price', {
            rules: [{ required: true, message: 'Вы забыли указать цену!' }]
          })(
            <Input  placeholder="Цена теелефона" />
          )}
        </FormItem>
        <FormItem label="Бренд" style={{ marginBottom:'0px'}}>
          {getFieldDecorator('company', {
            rules: [{ required: true, message: 'Вы забыли указать бренд!' }],
          })(
            <Input  placeholder="Бренд телефона" />
          )}
        </FormItem>
        <FormItem label="Картинка">
          {getFieldDecorator('img', {
            rules: [{ required: true, message: 'Вы забыли указать изоброжение!' }],
          })(
            <Input  placeholder="Url картинки" />
          )}
        </FormItem>
        <Button type="primary" htmlType="submit" >
          { buttonFormText }
        </Button>
      </Form>
    )
  }
}  

const WrappedNormalLoginForm = Form.create({ 

  mapPropsToFields(props) {
    let idProduct  = props.match.params.number;
    if(props.match.path === "/admin/new-product" || props.dataPhones === null ){
      return
    }

    return {
      model: Form.createFormField({
       value: props.dataPhones[idProduct].model,
      }),
      price: Form.createFormField({
        value: props.dataPhones[idProduct].price,
      }),
      company: Form.createFormField({
        value: props.dataPhones[idProduct].company,
      }),
      img: Form.createFormField({
        value: props.dataPhones[idProduct].img,
      }),
    };
  },})(ProductForm);

export default WrappedNormalLoginForm;
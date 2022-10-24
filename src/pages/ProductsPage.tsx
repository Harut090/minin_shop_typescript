import React from 'react';
import {Products} from "../hooks/Products";
import axios from 'axios';
import {CreateProduct} from "../components/CreateProduct";
import {Modal} from "../components/Modal";
import {IProduct} from "../models";
import { AddNewProduct } from './AddNewProduct';
import {CreateContext} from "../components/CreateContext";
import { useContext } from 'react';

export function ProductsPage(){
    const {products,error,addProduct} =Products();
    const {modal,open,close}=useContext(CreateContext);
    console.log(products)
    const onCreate=(product:IProduct)=>{
        close();
        addProduct(product);
       
    }
    

    return(<div className="container max-w-2xl mx-auto">
        {products.length?products.map((product)=>{
            return (<CreateProduct key={product.id} product={product}/>)
        }):"Loading..."}
        {modal && <Modal title={"Add new produc in the list"} close={close}>
            <AddNewProduct onCreate={onCreate}/>
        </Modal>}
        <button className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white px-4 py-2 text-2xl" onClick={open}>+</button>
    </div>)
}
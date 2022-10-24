import React from 'react';
import { useState } from 'react';
import { IProduct } from '../models';
import axios from 'axios';

const product:IProduct ={
    title:'',
    price:42,
    description:"lorem ipsum",
    image:"https://i.pravatar.cc",
    rating: {
      rate:100,
      count:12,
    }
}
interface IAddProduct{
    onCreate:(product:IProduct)=> void;
}
export function AddNewProduct({onCreate}:IAddProduct){
const [title,setTitle]=useState('');
const [error,setError]=useState("");

const change=(e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setTitle(e.target.value);
}
product.title=title;

const submit= async(ev:React.FormEvent)=>{
    console.log("ok")
    ev.preventDefault();
    setError('')
    if (!title.trim()) {
       setError("Sorry the input  field requires a simbol")
    }
   
        if (title.trim()) {
            const response=await axios.post("https://fakestoreapi.com/products?limit",product);
        onCreate(response.data);
        }
    
}
return(
    <form onSubmit={submit} className="bg-red-300">
       <div className="flex mx-0.3 my-0.3 items-center"> 
        <input type="text" placeholder="add product name" value={title} onChange={change} className="w-[150px] rounded mx-5 my-5 "/>
        <span>{error}</span></div>
        <button className=" mx-5 bg-black text-white rounded">Add Product</button>
    </form>
)
}

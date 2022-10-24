import React from 'react';
import  {useEffect,useState} from "react";
import {IProduct} from "../models"
import axios, {AxiosError} from "axios"


export function Products(){
    const [products,setProducts]=useState<IProduct[]>([]);
    const [error,setError]=useState("");

    const addProduct=(product:IProduct)=>{
        setProducts(prev=>[...prev,product])
    }
   async  function   fetchProductd (){
        try{
            const response=await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
            setProducts(response.data);
           
        }
        catch(error:unknown){
            setError("There is a problem with tj=he address");
        }
    }
   
    useEffect(()=>{
        fetchProductd();
    },[])
    return {products,error,addProduct};
}
import React from 'react';
import {IProduct} from "../models";
import {useState} from "react";

interface IProductProps{
    product: IProduct
}

export function CreateProduct({product}:IProductProps) {
    const [showRate,setShowRate] = useState(false);
    const btnBgClassName = showRate ? 'bg-yellow-400' : 'bg-blue-400';
  const btnClasses = ['py-2 px-4 border', btnBgClassName];
    return(
        <div  className="border w-3/5  m-32 py-2 px-4 my-8 mx-8 rounded flex flex-col items-center top-5 left-1/2">
            <img src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>{product?.rating?.count}</p>
            <button onClick={() => setShowRate(prev=>!prev)} className={btnClasses.join(" ")}>{showRate ?"Hide Rate":"Show Rate"}</button>
            {showRate ?<div>
                <p>{product?.rating?.rate}</p>
                <p>{product.description}</p>
                </div>:""}
        </div>
        
    )
}

// id?:number,
//     title: string,
//     price:number,
//     description:string,
//     image: string,
//     rating: {
//       rate:number,
//       count:number,
//     }
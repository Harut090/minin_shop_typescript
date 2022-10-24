import React from 'react';
import { createContext,useState } from 'react';

interface IContext{
    modal:boolean,
    open:()=>void,
    close:()=>void
}
export const CreateContext=createContext<IContext>({
modal:false,
open:()=>{},
close:()=>{}

});

export function ModalState({children}:{children:React.ReactNode}){
    const [modal,setModal] = useState(false);
    const open=()=>setModal(true);
    const close=()=>setModal(false)
   return(
    <CreateContext.Provider value={{modal,open,close}}>
    {children}
    </CreateContext.Provider>
   )
}
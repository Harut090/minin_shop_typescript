import React from 'react';
interface IModal {
    children: React.ReactNode,
    title: string,
    close: () => void,

}

export function Modal({ children, title, close }: IModal) {

    return (
        <div>
        <div className="bg-black bg-opacity-90 fixed top-0 left-0 right-0 bottom-0" onClick={close}></div>
            <div className="w-[500px] h-[100px] fixed top-15 bg-white  top-1 left-1/2 right-1/2 -translate-x-1/2">
                <h3 className="text-center">{title}</h3>
                {children}
            </div>
        </div>
    )
}
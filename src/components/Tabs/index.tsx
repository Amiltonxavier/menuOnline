import React, { ComponentProps } from 'react'


interface TabsPrps extends ComponentProps<'button'>{
    index: number; 
}




export function Tabs({ index = 0, ...props}: TabsPrps) {
    
    return (
        <div className='flex justify-center'>
            <button {...props} className={` text-white p-2 text-base ${index ? "bg-orange-500" : "border border-orange-500"}`} />         
        </div>
    )
}

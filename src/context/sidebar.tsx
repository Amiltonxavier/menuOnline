import React, { createContext, ReactNode, useContext, useState } from 'react'

type SidebarTypes = {
    isOpen: boolean,
    handleOpenAndCloseSIdebar: () => void
}
interface SidebarProviderProps {
  children: ReactNode;
}


const SidebarContext = createContext({} as SidebarTypes)


export  function SidebarProvider({children}: SidebarProviderProps) {
    const [isOpen, setOpen] = useState(false);

    function handleOpenAndCloseSIdebar(){
        setOpen(!isOpen)
    }

  return (
    <SidebarContext.Provider value={{isOpen, handleOpenAndCloseSIdebar}}>
        {children}
    </SidebarContext.Provider>
  )
}

export const useSiderbarContext = () => useContext(SidebarContext);

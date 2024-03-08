import { useState, createContext } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ( { children } ) => {
  
  const [ isSidebarOpen, setIsSidebarOpen ] = useState( false );
  
  const handleClose = () => {
    setIsSidebarOpen( false )
    console.log( isSidebarOpen )
    
  }

  return <SidebarContext.Provider value={{isSidebarOpen,setIsSidebarOpen,handleClose}}>{ children }</SidebarContext.Provider>

}
export default SidebarProvider
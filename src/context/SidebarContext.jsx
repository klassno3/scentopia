import { useState, createContext } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ( { children } ) => {
  
  const [ isCartOpen, setIsCartOpen ] = useState( false );
  const [ isFavOpen, setIsFavOpen ] = useState( false );
  
  const handleCartClose = () => {
    setIsCartOpen( false )
    
  }
  const handleFavClose = () => {
    setIsFavOpen( false )
    
  }

  return <SidebarContext.Provider
  
    value={ {
      isCartOpen,
      isFavOpen,
      setIsFavOpen,
      setIsCartOpen,
      handleCartClose,
      handleFavClose
    } }>
    { children }</SidebarContext.Provider>

}
export default SidebarProvider
import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ( { children } ) => {
  const [ cart, setCart ] = useState( [] );
  const [ itemAmount, setItemAmount ] = useState( 0 );
  const [ total, setTotal ] = useState( 0 );
  
  useEffect( () => {
    if ( cart ) {
      const amount = cart.reduce( ( accumulatar, currentItem ) => {
        return accumulatar + currentItem.amount;

      }, 0 );
      setItemAmount( amount )
    }

  }, [ cart ] );
  

  useEffect( () => {
    const total = cart.reduce( ( accumulatar, currentItem ) => {
      return accumulatar + currentItem.price * currentItem.amount;

    }, 0 );
    setTotal( total )



  },[cart] );
  
  const addToCart = ( product, id ) => {
   
  const newItem = { ...product, amount: 1 };
    // check if item is already in the cart

    const cartItem = cart.find( ( item ) => {
      return item.id === id;
    } );

    // if item is already in the cart
    if ( cartItem ) {
      const newCart = [ ...cart ].map( ( item ) => {
        if ( item.id === id ) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item;

        }
      } );
      setCart( newCart );
    } else {
      setCart( [ ...cart, newItem ] )
    }

  };
  const removeFromCart = (id) => {
    const newCart = cart.filter( ( item ) => {
      return item.id !== id;
      
    } );
    setCart(newCart)
  }
  const clearCart = () => {
    setCart( [] );
  }
  const increaseAmount = ( id ) => {
    const CartItem = cart.find( ( item ) =>  item.id === id );
    addToCart( CartItem, id );
  }
  const decreaseAmount = ( id ) => {
    const cartItem = cart.find( ( item ) => {
      return item.id === id;

    } )
    if ( cartItem ) {
      const newCart = cart.map( ( item ) => {
        if ( item.id === id ) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
          
        };

      } );
      setCart(newCart)
    } 
      if ( cartItem.amount < 2 ) {
        removeFromCart( id );
      
      
    }
  }

  return <CartContext.Provider value=
    { {
    cart,
    itemAmount,
    total,
    clearCart,
    addToCart,
    removeFromCart,
    increaseAmount,
    decreaseAmount
    } }>
    { children }
  </CartContext.Provider>
}
export default CartProvider
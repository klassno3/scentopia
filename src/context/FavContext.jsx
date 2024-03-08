import { useState, createContext, useEffect } from "react";

export const  FavContext = createContext();

const  FavProvider = ( { children } ) => {
  const [ fav, setFav ] = useState( [] );
  console.log(fav)
  const [  favItemAmount, setFavItemAmount ] = useState( 0 );
  const [ total, setTotal ] = useState( 0 );
  
  useEffect( () => {
    if (  fav ) {
      const amount =  fav.reduce( ( accumulatar, currentItem ) => {
        return accumulatar + currentItem.amount;

      }, 0 );
      setFavItemAmount( amount )
    }

  }, [  fav ] );
  

  useEffect( () => {
    const total =  fav.reduce( ( accumulatar, currentItem ) => {
      return accumulatar + currentItem.price * currentItem.amount;

    }, 0 );
    setTotal( total )



  },[ fav] );
  
  const addToFav = ( product, id ) => {
   
  const newItem = { ...product, amount: 1 };
    // check if item is already in the  fav

    const  favItem =  fav.find( ( item ) => {
      return item.id === id;
    } );

    // if item is already in the  fav
    if (  favItem ) {
      const newFav = [ ...fav ].map( ( item ) => {
        if ( item.id === id ) {
          return { ...item, amount:  favItem.amount + 1 }
        } else {
          return item;

        }
      } );
      setFav( newFav );
    } else {
      setFav( [ ...fav, newItem ] )
    }

  };
  const removeFromFav = (id) => {
    const newFav =  fav.filter( ( item ) => {
      return item.id !== id;
      
    } );
    setFav(newFav)
  }
  const clearFav = () => {
    setFav( [] );
  }
  const increaseAmount = ( id ) => {
    const  favItem =  fav.find( ( item ) =>  item.id === id );
    addToFav(  favItem, id );
  }
  const decreaseAmount = ( id ) => {
    const  favItem =  fav.find( ( item ) => {
      return item.id === id;

    } )
    if (  favItem ) {
      const newFav =  fav.map( ( item ) => {
        if ( item.id === id ) {
          return { ...item, amount:  favItem.amount - 1 }
        } else {
          return item
          
        };

      } );
      setFav(newFav)
    } 
      if (  favItem.amount < 2 ) {
        removeFromFav( id );
      
      
    }
  }

  
  return <FavContext.Provider value=
    { {
    fav,
    favItemAmount,
    total,
    clearFav,
    addToFav,
    removeFromFav,
    increaseAmount,
    decreaseAmount
    } }>
    { children }
  </FavContext.Provider>
}
export default  FavProvider
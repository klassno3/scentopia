import React,{useContext} from 'react'
// import { Link } from 'react-router-dom'
import { IoMdArrowForward } from "react-icons/io"
import { FiTrash2 } from "react-icons/fi"
import FavoriteItem from './FavoriteItem'
import { SidebarContext } from "../../context/SidebarContext"
import { FavContext } from "../../context/FavContext"
const FavoriteSidebar = () => {

  const { isFavOpen, handleFavClose } = useContext( SidebarContext );
  const { fav, clearFav, total, favItemAmount } = useContext( FavContext );
  
  const renderedCart = fav.map( ( item ) => {
    return <FavoriteItem key={ item.id } item={ item } />
  } );

  return (
    <div  className={` ${isFavOpen ? "right-0" : "z-50 -right-full"} w-full bg-white fixed top-0 h-full shadow-2xl 
    md:w-[35vw] xl:max-w-[30vw] font-inter transition-all duration-300 z-50 px-4 lg:px-[35px]` }>
      
      <div className="flex  items-center justify-between font-inter py-6 border-b">
        <div className="uppercase text-xm font-semibold">
         My Favorite Perfume ({favItemAmount})

        </div>
        <div onClick={ handleFavClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowForward/>
        </div>


      </div>
      <div>
        {  fav.length < 0  ? <div className='capitalize font-inter flex justify-center items-center'>your cart is empty</div> :renderedCart}
      </div>
      <div>
        <div className=' flex w-full justify-between items-center '>
          <div className='upppercase font-semibold text-tertiary-200'>
              
            <span className='mr-2'>Total: </span>
            $ {parseFloat(total).toFixed(2)}
          </div>

          <div  onClick={()=>clearFav()}  className=' bg-accentPink-dark cursor-pointer py-4 text-white w-12 h-12 flex justify-center items-center text-xl  hover:bg-accentPink-medium transition-all duration-300'>
            <FiTrash2/>
          </div>
        </div>
 
      </div>
    </div>
  )
}

export default FavoriteSidebar

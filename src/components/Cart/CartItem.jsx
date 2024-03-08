import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io"
import { CartContext } from '../../context/CartContext'


const CartItem = ( { item } ) => {
  const { id, title, image, price, amount } = item;
    const {removeFromCart,increaseAmount,decreaseAmount } = useContext( CartContext );

  return (
    <div className='flex gap-4 py-2 lg:px-6 border-b w-full font-light font-inter'>
     
      <div className=" w-full min-h-[150px] flex items-center gap-x-4">
           

        <Link to={ `/product/${ id }` }>
          <img src={ image } alt="prduct" className='max-w-[80px]' />
        </Link>
        <div className='w-full flex flex-col ml-3'>
          
       
            <div className="flex justify-between mb-2 ">

          <Link to={ `/product/${ id }` } className="text-sm font-medium max-w-[240px] text-primary-200 hover:underline" >
            {title}
        </Link>
            <div onClick={ () => removeFromCart(id) } className="text-xl cursor-pointer">
          <IoMdClose className='text-tertiary-200 hover:text-red-700  transition-all duration-300' />
          
        </div>
            </div> 
 

      <div className='flex justify-between my-4 items-center'>
        <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary-200 font-medium gap-2text-sm'>
          <div onClick={ ( ) => decreaseAmount(id) }  className='h-full flex flex-1 items-center cursor-pointer  justify-center '>
          <IoMdRemove />
          </div>
          <div className='h-full flex justify-center items-center px-2 py-2'>
            { amount }
          </div>
              <div onClick={ ( ) => increaseAmount(id) } className='h-full flex flex-1 items-center cursor-pointer  justify-center '>
          <IoMdAdd />
          </div>
        </div>
        <div>${ price }</div>
        <div>$</div>
          </div>
             </div>
    
</div>
</div>
        
  

  )
}

export default CartItem

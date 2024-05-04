import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from '../utils/cartSlice'

const Cart = () => {

    // const [cartNumber, setCartNumber] = useState(0)
    const dispatch = useDispatch()

    const addingToCart = () => {
        // setCartNumber((prev) => prev + 1)
        dispatch(addToCart());
    }

    // console.log("cart number: ", cartNumber);

    return (
        <div>
            <button 
                className='bg-green-800 p-[16px] text-white text-[24px] mt-[10px] border-none outline-none cursor-pointer'
                onClick={addingToCart}
            >
                Add to cart 0
            </button>
        </div>
    )
}

export default Cart
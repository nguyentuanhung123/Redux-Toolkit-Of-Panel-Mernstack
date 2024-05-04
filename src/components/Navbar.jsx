import React from 'react'
import {useSelector} from 'react-redux'

const Navbar = () => {

  const k = useSelector(store => store.cart.k)
  // console.log("K: ",k);

  return (
    <div className='bg-red-500 p-[16px]'>
        <h1>Cart <span>{k}</span></h1>
    </div>
  )
}

export default Navbar
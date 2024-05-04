import React from 'react'
import { useSelector } from 'react-redux'

const Test = () => {

    const k = useSelector(store => store.cart.k)

    return (
        <div>Test {k}</div>
    )
}

export default Test
import React, { createContext, useState } from 'react'

export const cartContext = createContext()

const useProvideCart = () => {

    const [cart, setCart] = useState([])

    const addItem = (product) => {
        const exist = cart.find(item => item.id === product.id)
        if(exist){
            setCart(cart.map(item => item.id === product.id ? {...item, quantity: exist.quantity + 1} : item))
        }
        else{
            const [...c] = cart
            c.push(product)
            setCart(c)
        }
    }

    return {cart, addItem}
}

export const ProvideCart = ({children}) => {
    const cart = useProvideCart()
    return(
        <cartContext.Provider value={cart}>
            {children}
        </cartContext.Provider>
    )
}
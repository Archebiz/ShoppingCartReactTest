import React from 'react'
import { NavBarComponent } from './components/NavBarComponent'

import ProductsPages from './pages/ProductsPages'
import CartPage from './pages/CartPage'
import { Navigate, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'


export const CarritoApp = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <NavBarComponent />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<ProductsPages />}></Route>
                        <Route path='/carrito' element={<CartPage />}></Route>
                        <Route path='/*' element={<Navigate to='/' />} ></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductProvider>
    )
}

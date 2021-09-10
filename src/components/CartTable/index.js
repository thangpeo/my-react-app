import React, { useContext } from 'react'
import './style.css'
import { cartContext } from '../useCart'

export const CartTable = () => {
    const useCart = useContext(cartContext)
    return (
        <table className="cart__table">
            <thead>
                <tr className="cart__table__row">
                    <th className="cart__table__header">STT</th>
                    <th className="cart__table__header">Tên sản phẩm</th>
                    <th className="cart__table__header">Số lượng</th>
                    <th className="cart__table__header">Size</th>
                    <th className="cart__table__header">Chức năng</th>
                </tr>
            </thead>
            <tbody>
            {
                useCart.cart.map((product, index) =>    
                    <tr key={product.id} className="cart__table__row">
                        <td className="cart__table__col">{index + 1}</td>
                        <td className="cart__table__col">{product.name}</td>
                        <td className="cart__table__col">{product.quantity}</td>
                        <td className="cart__table__col" style={{textTransform: 'uppercase'}}>{product.size}</td>
                        <td className="cart__table__col">
                            <button className="cart__button danger">
                                Xóa sản phẩm
                            </button>
                        </td>
                    </tr>
                )
            }
            </tbody>
            <tfoot>
                <tr className="cart__table__row">
                    <td className="cart__table__col" colSpan={5}>
                        <div className="cart__controls">
                            <button className="cart__button danger">Hủy tất cả sản phẩm</button>
                            <button className="cart__button">Thamnh Toámn</button>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function ProductCard({name='',price=0,img,discount = 0,isnew=false, id = 0}) {
    return (
        <Link to={`/productdetail/${id}`} className="product__card">            
            <span className="product__label">
                {discount !== 0 && <span className="product__discount">{discount}%</span>}
                {isnew && <span className="product__new">Mới</span>}
            </span>
            <img className="product__img" src={img} alt={name}/>
            <div className="product__name">{name}</div>
            <div className="product__price">
                <span className="product__price-new">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                <span className="product__price-old">{(price - discount/100*price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
        </Link>
    )
}

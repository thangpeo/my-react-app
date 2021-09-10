import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Col, Row } from '../Grid'
import { cartContext } from '../useCart'
import './style.css'


const ProductView = ({ product }) => {

    const [imageView, setImageView] = useState(product.img1)
    const [isOpenDescription, setIsOpenDescription] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const [chosenSize, setChosenSize] = useState()
    const [chosenColor, setChosenColor] = useState()
    const history =  useHistory() 
    const useCart = useContext(cartContext)

    const chooseColor = (color)=>{
        setChosenColor(color)
    }
    const chooseSize = (size) =>{
        setChosenSize(size)
    }

    const imageClick = (image) => {
        setImageView(image)
    }
    const check = ()=>{
        if(chosenSize === undefined){
            alert('Bạn chưa chọn size')
            return false
        }
        if(chosenColor === undefined){
            alert('Bạn chưa chọn màu')
            return false
        }
        return true
    }
    const addToCart = () => {
        if(check()){
            useCart.addItem({...product, quantity, color:chosenColor, size: chosenSize})
        }
    }
    const goToCart = ()=>{
        addToCart()
        history.push('/cart')
    }

    const xemThemClick= () => {
        setIsOpenDescription(!isOpenDescription)
    }
    useEffect(() => {
        setImageView(product.img1)
        setQuantity(1)
        setChosenColor(undefined)
        setChosenSize(undefined)
    }, [product])

    return (
        <div className="product__detail__container">
            <Row>
                <Col sm={12} md={12} lg={6}>
                    <div className="product__detail__image">
                        <div className="product__detail__image__list">
                            <img
                                className="product__detail__image__item" 
                                src={product.img1} 
                                alt={`hinh anh ${product.name}`}
                                onClick={()=>imageClick(product.img1)}
                                />
                            <img
                                className="product__detail__image__item" 
                                src={product.img2} 
                                alt={`hinh anh ${product.name}`}
                                onClick={()=>imageClick(product.img2)}
                                />
                        </div>
                        <div className="product__detail__image__view">
                            <img src={imageView} alt={`hinh anh ${product.name}`}/>
                        </div>
                    </div>
                    <div className="product__detail__description" style={{height: `${isOpenDescription ?'auto': 100 + 'px'}`, marginBottom: `${isOpenDescription ?'0': -30 + 'px'}`}}>
                        <p className="product__detail__title">Chi tiết sản phẩm</p>
                        <div dangerouslySetInnerHTML={{__html: product.description}}></div>
                    </div>
                    <button className="product__detail__button" onClick={xemThemClick}>{isOpenDescription ?'Ẩn bớt':'Xem thêm'}</button>
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <div className="product__detail__info">
                        <div className="product__detail__name">{product.name}</div>
                        <div className="product__detail__price">
                            <div className="product__detail__price">{product.price}</div>
                            <div className="product__detail__price__discount">{product.price - 10/100*product.price}</div>
                        </div>
                        <div className="product__detail__color">
                            <div className="product__detail__title">Màu sắc</div>
                            <div className="product__detail__color__list">
                                {
                                    product.colors.map((color, index)=>
                                        <span
                                        key={index}
                                        className={`product__detail__color__item ${color === chosenColor?'active':''}`}
                                        style={{backgroundColor:color}}
                                        onClick={()=>chooseColor(color)}
                                        ></span>
                                    )
                                }
                            </div>
                        </div>
                        <div className="product__detail__size">
                            <div className="product__detail__title">Kích cỡ</div>
                            <div className="product__detail__size__list">
                            {
                                product.sizes.map((size, index) =>
                                    <span
                                    key={index}
                                    className={`product__detail__size__item ${size === chosenSize?'active':''}`}
                                    onClick={()=>chooseSize(size)}
                                    >
                                        {size}
                                    </span>
                                )
                            }
                            </div>
                        </div>
                        <div className="product__detail__title">Số lượng</div>
                        <div className="product__detail__quantity">
                            <button className="product__detail__button" onClick={()=>setQuantity(quantity - 1 <= 0 ? 1 : quantity - 1)}>-</button>
                            <span className="product__detail__quantity__input">{quantity}</span>
                            <button className="product__detail__button" onClick={()=>setQuantity(quantity + 1)}>+</button>
                        </div>
                        <div className="product__detail__control">
                            <button onClick={()=>goToCart()} style={{backgroundColor: 'var(--fourth)'}} className="product__detail__button" >Mua ngay</button>
                            <button onClick={()=>addToCart()} className="product__detail__button">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductView
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


export default function HeroImage({image,title,description}) {
    return (    
        <div className="hero__image">
            <div className="hero__text">
                <h1 className="hero__title">
                    {title}
                </h1>
                <p className="hero__desc">
                    {description}
                </p>
                <Link to='/product' className="hero__button">
                    Chi tiết
                </Link>
            </div>
            <div className="hero__img">
                <div className="shape"></div>
                <img src={`${image}`} alt='img'></img>
            </div>
        </div>
    )
}

import React from 'react'
import './style.css'


export default function CategoryList({title,children}) {
    return (
        <div className="category__list">
            <div className="category__title">
                {title}
            </div>
            {children}
        </div>
    )
}

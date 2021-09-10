import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Banner({image}) {
    return (
        <Link to='/' className="banner">
            <img src={image} alt="banner"/>
        </Link>
    )
}

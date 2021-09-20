import React, { useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import './style.css'
import logo from '../../assets/images/Logo-2.png'
import { Col, Row } from '../Grid'

const navItems = [
    {
        display: 'Home',
        path:'/my-react-app',
    },
    {
        display: 'Products',
        path:'/my-react-app/products',
    },
    {
        display: 'About',
        path:'/my-react-app/about',
    },
]


export default function Header() {


    const { pathname } = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const activeNav = navItems.findIndex(item=> item.path === pathname)

    return (
            <header>
                <div className="container">
                    <Row>
                        <Col sm={1} md={0} lg={0}>
                            <span className="header__nav__mobile-open c-12 m-0" onClick={()=>{setIsOpen(true)}}>
                                <i className="bx bx-menu-alt-left bx-sm"></i>
                            </span>
                            <div className={`header__nav__mobile c-12 m-0 ` + (isOpen?'show':'')} onClick={()=>{setIsOpen(false)}}>
                                <span className="header__nav__mobile-close" >
                                    <box-icon type='solid' name='left-arrow'></box-icon>
                                    <i className="bx bx-left-arrow bx-sm"></i>
                                </span>
                                {
                                    navItems.map((item,index)=>
                                    <Link key={index} className="header__nav__mobile__item" to={item.path}>{item.display}</Link>)
                                }
                            </div>
                        </Col>
                        <Col sm={0} md={4} lg={4}>
                            <div className="header__nav__pc">
                            {
                                navItems.map((item,index)=>
                                    <Link key={index} 
                                    className= {index===activeNav?"header__nav__pc__item active":"header__nav__pc__item"} 
                                    to={item.path}>
                                        {item.display}
                                    </Link>
                                    
                                )
                            }
                            </div>
                        </Col>
                        <Col sm={7} md={4} lg={4}>
                            <Link to='/' className="header__logo">
                                <img src={logo} alt="logo"/>
                            </Link>

                        </Col>
                        <Col sm={4} md={4} lg={4}>
                            <div className="header__menu">
                                <Link className="header__nav__pc__item" to="/cart">
                                    <i className='bx bx-search-alt bx-sm'></i>
                                </Link>
                                <Link  className="header__nav__pc__item" to="/cart">
                                    <i className='bx bxs-cart-alt bx-sm'></i>
                                </Link>
                                <Link className="header__nav__pc__item" to="/login">
                                    <i className='bx bx-user bx-sm'></i>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
            
    )
}

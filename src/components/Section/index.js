import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export const Section = ({children}) => {
    return (
        <section className="section">
            {children}
        </section>
    )
}

export const SectionTitle = ({children}) => {
    return (
        <h2 className="section__title">
            {children}
        </h2>
    )
}
export const SectionBody = ({children}) => {
    return (
        <div className="section__body">
            {children}
        </div>
    )
}

export const SectionDescription = ({children}) => {
    return (
        <p className="section__description">
            {children}
        </p>
    )
}

export const SectionLink = ({children,href})=>{
    return (
        <div className="section__link">
            <Link to={href} className="section__link">
                {children}
            </Link>
        </div>
    )
}
export const SectionTabItem = ({children,active = false,onClick}, )=>{
    const ref = useRef(null)
    const onTabClick = () =>{
        const parentElement = ref.current.parentElement
        const elementActive = parentElement.querySelector(`.active`)
        if(elementActive){
            elementActive.classList.remove('active')
        }
        ref.current.classList.add('active');
        if(onClick){
            onClick(ref.current)
        }
    }

    return (
        <span ref={ref} className={`section__tab-item ${active?'active':''}`} onClick={onTabClick}>
            {children}
        </span>
    )
}
export const SectionTabs = ({children})=>{
    return (
        <div className="section__tabs">
                {children}
        </div>
    )
}



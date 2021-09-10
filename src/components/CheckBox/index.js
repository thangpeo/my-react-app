import React, { useRef } from 'react'
import './style.css'

export const CheckBox = ({children, onClick = null, checked = false}) => {
    const checkboxRef = useRef(null);
    return (
        <label className="checkbox__label">
            <input type="checkbox" ref={checkboxRef} onClick={()=>onClick(checkboxRef)} className="checkbox__input"/>
            {children}
        </label>
    )
}

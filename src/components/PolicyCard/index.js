import React from 'react'
import './style.css'

export default function PolicyCard({title, body, icon}) {
    return (
        <div className="policycard__container">
            <div className="policycard__icon" >
                <i className={`bx bx-lg ${icon}`}></i>
            </div>
            <div className="policycard__info">
                <div className="policycard__title">
                    {title}
                </div>
                <div className="policycard__body">
                    {body}
                </div>
            </div>
        </div>
    )
}

import React, { useCallback, useEffect, useState } from 'react'
import './style.css'



export default function SlideShow({items}) {

    const length = items.length
    const [curSlideIndex, setCurSlideIndex] = useState(0)

    const showSlide = useCallback(
        () => {
            const index = curSlideIndex + 1 === length ? 0 : curSlideIndex + 1
            setCurSlideIndex(index)
        },
        [curSlideIndex,length]
    )

    const nextSlide = () => {
        const index = curSlideIndex + 1 >= length ? 0 : curSlideIndex + 1
        setCurSlideIndex(index)
    }
    const prevSlide = () => {
        const index = curSlideIndex - 1 < 0 ? length - 1 : curSlideIndex - 1
        setCurSlideIndex(index)
    }

    useEffect(() => {
        const show = setInterval(() => {
            showSlide(curSlideIndex);
        }, 5000);
        return () => {
            clearInterval(show);
        }
    }, [showSlide,curSlideIndex])
    return (
        <div className="slide__container">
            {
                items.map((item, index) =>
                    <div key={index} className={`slide__item fade ${index===curSlideIndex?'active':''}`}>
                        {item}
                    </div>
                )
            }
            <div className="slide__control">
                <i className="slide__control__icon bx bx-chevron-left" onClick={prevSlide}></i>
                    <span className="slide__number">{curSlideIndex + 1 }/{length}</span>
                <i className="slide__control__icon bx bx-chevron-right" onClick={nextSlide}></i>
            </div>
        </div>
    )
}

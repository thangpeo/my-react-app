import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import img from '../../assets/images/Logo.png'
import {Row, Col} from '../Grid'


export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <Row> 
                    <Col sm={12} md={6} lg={3}>
                        <h4 className="footer__title">Tổng đài hỗ trợ</h4>
                        <p className="footer__item">Liên hệ đặt hàng: <b>0123546789</b></p>
                        <p className="footer__item">Thắc mắc đơn hàng: <b>01234126356</b></p>
                        <p className="footer__item">Góp ý khiếu nại: <b>0912384756</b></p>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h4 className="footer__title">Về Yozo</h4>
                        <p className="footer__item"><Link className="footer__link" to="/about">Giới thiệu</Link></p>
                        <p className="footer__item"><Link className="footer__link" to="/about">Liên hệ</Link></p>
                        <p className="footer__item"><Link className="footer__link" to="/about">Tuyển dụng</Link></p>
                        <p className="footer__item"><Link className="footer__link" to="/about">Tin tức</Link></p>
                        <p className="footer__item"><Link className="footer__link" to="/about">Hệ thống cửa hàng</Link></p>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h4 className="footer__title">Chăm sóc khách hàng</h4>
                        <p className="footer__item"><Link className="footer__link" to="/policy">Chính sách đổi trả</Link></p>
                        <p className="footer__item"><Link className="footer__link" to="/about">Chính sách bảo hành</Link></p>
                        <p className="footer__item"><Link className="footer__link" to="/about">Chính sách hoàn tiền</Link></p>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <img className="footer__img" src={img} alt="logo"/>
                        <p className="footer__item">"Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ và hành động của mình" 
                            là sứ mệnh, là triết lý, chiến lược.. 
                            luôn cùng YODY tiến bước</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

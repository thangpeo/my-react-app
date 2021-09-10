import React from 'react'
import { useParams } from 'react-router-dom'
import ProductView from '../components/ProductView'
import products from '../FakeData/products'
import { Section, SectionBody, SectionTitle } from '../components/Section'
import ProductCard from '../components/ProductCard'
import { Col, Row } from '../components/Grid'

export default function ProductDetailPage() {
    const { id } = useParams()
    const product = products.find(p=>p.id === Number(id))
    return (
        <div className="container">
            {product && <ProductView product={product}/>}
            <Section>
                <SectionTitle>Khám phá thêm</SectionTitle>
                <SectionBody>
                    <Row>
                    {
                        products.slice(0,8).map((p, index)=>
                            <Col key={index} sm={6} md={4} lg={3}>
                                <ProductCard
                                name={p.name}
                                price={p.price}
                                img={p.img1}
                                id = {p.id}
                                />
                            </Col>
                        )
                    }
                    </Row>
                </SectionBody>
            </Section>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import HeroImage from '../components/HeroImage'
import heroSlider from '../FakeData/hero-slider'
import SlideShow from '../components/SlideShow'
import Banner from '../components/Banner'
import bannerImg from '../assets/images/banner.png'
import {Row,Col} from '../components/Grid'
import PolicyCard from '../components/PolicyCard'
import ProductCard from '../components/ProductCard'
import products from '../FakeData/products'
import 
{ 
    Section, 
    SectionBody, 
    SectionDescription, 
    SectionLink, 
    SectionTabItem, 
    SectionTabs, 
    SectionTitle 
} from '../components/Section'


const policyCards = [
    {
        icon: 'bx-credit-card',
        title: 'Miễn phí giao hàng',
        body: 'Miễn phí giao hàng với đơn hàng >290k',
    },
    {
        icon: 'bx-credit-card',
        title: 'Thanh toán COD',
        body: 'Thanh toán khi nhận hàng',
    },
    {
        icon: 'bx-credit-card',
        title: 'Khách hàng VIP',
        body: 'Ưu đãi dành cho khách hàng VIP',
    },
    {
        icon: 'bx-credit-card',
        title: 'Hỗ trợ bảo hành',
        body: 'Đổi, trả, sửa tại tất cả store',
    },
]

export default function HomePage() {
    const [Data, setData] = useState([])
    
    const onTabItemClick = (e) => {
        setData(products.slice(4, 8))
    }
    

    useEffect(() => {    
        setData(products.slice(0,4));
    }, [])

    
    return (
        <div className="container">
            <SlideShow items={heroSlider.map(item=><HeroImage image={item.img} title={item.title} description={item.description}></HeroImage>)}></SlideShow>
            <Row>
                {
                    policyCards.map((item,index)=>
                        <Col key={index} sm={12} md={6} lg={3}>
                            <PolicyCard title={item.title} icon={item.icon} body={item.body}></PolicyCard>
                        </Col>
                    )
                }
                
            </Row>
            
            <Banner image={bannerImg}/>
            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy
                </SectionTitle>
                <SectionDescription>
                Thời trang nam Yody mang lại sự hòa hợp về cá tính, 
                đem lại cảm giác thoải mái từ bên trong và tư tin ở bên ngoài
                 với các sản phẩm thời trang quốc dân như áo polo, áo thun, áo sơ mi, 
                 quần âu, quần jean và giày nam.
                </SectionDescription>
                
                <SectionTabs>
                    <SectionTabItem active={true} onClick={onTabItemClick}>
                        Tất cả
                    </SectionTabItem>
                    <SectionTabItem onClick={onTabItemClick}>
                        Nam
                    </SectionTabItem>
                    <SectionTabItem onClick={onTabItemClick}>
                        Nữ
                    </SectionTabItem>
                    <SectionTabItem onClick={onTabItemClick}>
                        Trẻ em
                    </SectionTabItem>
                </SectionTabs>
                <SectionBody>
                    
                    <Row>
                        {
                            Data.slice(0,4).map((item,index)=>
                                <Col key={index} sm={12} md={4} lg={3}>
                                    <ProductCard
                                    id={item.id} 
                                    isnew={true} 
                                    discount={10} 
                                    name={item.name} 
                                    price={item.price} 
                                    img={item.img1} />
                                </Col>
                            )
                        }
                    </Row>
                </SectionBody>
                <SectionLink href={'/about'}>
                    Xem tất cả
                </SectionLink>
            </Section>
            <Section>
                <SectionTitle>
                    thời trang nữ
                </SectionTitle>
                <SectionDescription>
                Thời trang nữ Yody mang lại sự hòa hợp về cá tính, 
                đem lại cảm giác thoải mái từ bên trong và tư tin ở bên ngoài
                 với các sản phẩm thời trang quốc dân như áo polo, áo thun, áo sơ mi, 
                 quần âu, quần jean và giày nam.
                </SectionDescription>
                
                <SectionTabs>
                    <SectionTabItem active={true} onClick={onTabItemClick}>
                        Áo nữ
                    </SectionTabItem>
                    <SectionTabItem onClick={onTabItemClick}>
                        Quần nữ
                    </SectionTabItem>
                    <SectionTabItem onClick={onTabItemClick}>
                        Váy nữ
                    </SectionTabItem>
                    <SectionTabItem onClick={onTabItemClick}>
                        Đồ mặc nhà nữ
                    </SectionTabItem>
                    <SectionTabItem onClick={onTabItemClick}>
                        Đồ mặc trong nữ
                    </SectionTabItem>
                    <SectionTabItem onClick={onTabItemClick}>
                        Phụ kiện nữ
                    </SectionTabItem>
                </SectionTabs>
                <SectionBody>
                    <Row>
                        {
                            Data.slice(0,4).map((item,index)=>
                                <Col key={index} sm={12} md={4} lg={3}>
                                    <ProductCard id={item.id} isnew={true} discount={10} name={item.name} price={item.price} img={item.img1}></ProductCard>
                                </Col>
                            )
                        }
                    </Row>
                </SectionBody>
                <SectionLink href={'/about'}>
                    Xem tất cả
                </SectionLink>
            </Section>
            
            {/* <ProductsList title={} items={}/> */}
            {/* <ProductsList /> */}
            {/* <ProductsList /> */}
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import CategoryList from '../components/CategoryList'
import { CheckBox } from '../components/CheckBox'
import {Row, Col} from '../components/Grid'
import ProductCard from '../components/ProductCard'
import CategoryData from '../FakeData/category'
import SizeData from '../FakeData/product-size'
import ColorData from '../FakeData/product-color'
import productData from '../FakeData/products'
import { Pagination } from '../components/Pagination'
import { useHistory, useLocation } from 'react-router-dom'
import './style.css'


export default function ProductsPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const history = useHistory()
    const [data, setData] = useState({
        items: [] ,
        totalItems: 0,
    })
    const { search, pathname } = useLocation()
    const pageSize = 12 
    const skip = (currentPage - 1) * pageSize

    const [dataFilter, setDataFilter] = useState({
        colors: [],
        sizes: [],
        category: [],
    })

    const filterProduct = (isCheck, filterItem, type) => {
        switch (type) {
            case 'color':
                const {colors} = dataFilter
                if(isCheck){
                    colors.push(filterItem)
                    setDataFilter({...dataFilter, colors: colors})
                }
                else{
                    const index = colors.indexOf(filterItem)
                    colors.splice(index, 1)
                    setDataFilter({...dataFilter, colors: colors})
                }
                break
            case 'category':
                const {category} = dataFilter
                if(isCheck){
                    category.push(filterItem)
                    setDataFilter({...dataFilter, category: category})
                }
                else{
                    const index = category.indexOf(filterItem)
                    category.splice(index,1)
                    setDataFilter({...dataFilter, category: category})
                }
                break
            case 'size':
                const {sizes} = dataFilter
                if(isCheck){
                    sizes.push(filterItem)
                    setDataFilter({...dataFilter, sizes: sizes})
                }
                else{
                    const index = sizes.indexOf(filterItem) 
                    sizes.splice(index,1)                   
                    setDataFilter({...dataFilter, sizes: sizes})
                }
                break
            default:
                break
        }
        setCurrentPage(1)
        history.push(pathname)
    }
    useEffect(() => {
        const params = new URLSearchParams(search)
        setCurrentPage(params.get('page') || 1)
        const { category, colors, sizes } = dataFilter
        const products = productData.filter(product => 
            (category.length > 0 ? category.every(cate => cate === product.category) : true )
            && (colors.length > 0 ? colors.every(color => product.colors.includes(color)) : true )
            && (sizes.length > 0 ? sizes.every(size => product.sizes.includes(size)) : true )
        )
        setData({
            items: products.slice(skip ,currentPage * pageSize),
            totalItems: products.length,
        })
    }, [currentPage, search, skip, dataFilter])
    return (
        <div className="container">
            <div className="productsPage">
                <Row>
                    <Col sm={0} md={3} lg={3}>
                        <CategoryList title="Danh mục sản phẩm">
                            {
                                CategoryData.map((item, index)=>
                                    <CheckBox 
                                     key={index} 
                                     onClick={(e)=>filterProduct(e.current.checked,item.categorySlug,'category')}
                                    >
                                        {item.display}
                                    </CheckBox>
                                )
                            }
                        </CategoryList>
                        <CategoryList title="Kích cỡ">
                            {
                                SizeData.map((item, index)=>
                                    <CheckBox 
                                     key={index} 
                                     onClick={(e)=>filterProduct(e.current.checked,item.size,'size')}
                                    >
                                        {item.display}
                                    </CheckBox>
                                )
                            }
                        </CategoryList>
                        <CategoryList title="Màu sắc">
                            {
                                ColorData.map((item, index)=>
                                    <CheckBox 
                                     key={index} 
                                     onClick={(e)=>filterProduct(e.current.checked,item.color,'color')}
                                    >
                                        {item.display}
                                    </CheckBox>
                                )
                            }
                        </CategoryList>
                    </Col>
                    <Col sm={12} md={9} lg={9}>
                        <Row>
                            {
                                data.totalItems === 0? 
                                (<div style={{textAlign:'center',width:100 + '%'}}>Hiện không có sản phẩm nào</div>)
                                : (data.items.map((item,index)=>
                                    <Col key={index} sm={6} md={4} lg={3}>
                                        <ProductCard id={item.id} img={item.img1} name={item.name} price={item.price}/>
                                    </Col>
                                ))
                            }
                        </Row>
                        <Pagination 
                          PageSize={pageSize} 
                          TotalItems={data.totalItems} 
                          PageLocation={'products'}
                          CurrentPage={currentPage}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

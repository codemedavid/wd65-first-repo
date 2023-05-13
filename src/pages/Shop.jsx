import React, {useState} from 'react'
import CommonSection from '../components/Ul/CommonSection'
import Helmet from "../components/Helmet/Helmet"
import { Container, Row, Col } from 'reactstrap'

import '../styles/shop.css'
import products from '../assets/data/products'
import ProductList from '../components/Ul/ProductList'
const Shop = () => {
  
  const [productData, setProductData] = useState(products)
  const handleFilter = (e) =>{
    const filterValue = e.target.value

    if(filterValue == 'one-piece'){
      const filteredProducts = products.filter(item => item.
        category == 'one-piece') 
        setProductData(filteredProducts)


    }
    if(filterValue == 'thumblers'){
      const filteredProducts = products.filter(item => item.
        category == 'thumblers') 
        setProductData(filteredProducts)

    }
    if(filterValue == 'naruto'){
      const filteredProducts = products.filter(item => item.
        category == 'naruto') 
        setProductData(filteredProducts)

    }
    if(filterValue == 'demon-slayer'){
      const filteredProducts = products.filter(item => item.
        category == 'demonSlayer') 
        setProductData(filteredProducts)

    }
    if(filterValue == 'dragon-ball-z'){
      const filteredProducts = products.filter(item => item.
        category == 'dragonBallZ') 
        setProductData(filteredProducts)

    }
  }

  const handleSearch = (e) =>{
    const searchTerm = e.target.value.toLowerCase()

    const searchedProducts = products.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );  


    setProductData(searchedProducts)
   
  }

  return <Helmet title="Shop">
  <CommonSection title='Products'/>

  <section>
    <Container>
      <Row>
        <Col lg='3' md='6'>
          <div className="filter__widget">
            <select onChange={handleFilter}>
            <option>Filter by Category</option>
              <option value="thumblers">Thumblers</option>
              <option value="one-piece">One Piece</option>
              <option value="demon-slayer">Demon Slayer</option>
              <option value="naruto">Naruto</option>
              <option value="dragon-ball-z">Dragon Ball Z</option>
            </select>
          </div>
        </Col>
        <Col lg='3' md='6' >
        <div className="filter__widget">
            <select>
            <option>Sort by</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </Col>
        <Col lg='6' md='12'>
          <div className="search__box">
            <input type="text" placeholder='Search.....' onChange={handleSearch}/>
            <span>
              <i class='ri-search-line'></i>
            </span>
          </div>
        </Col>

      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row >
      {
        productData.length === 0? (<h1 className='text-center fs-4'>No products are found!</h1>) : (<ProductList data={productData}/>
        )}
      </Row>
    </Container>
  </section>

  </Helmet>
  
}

export default Shop
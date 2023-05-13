import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/final-hero.jpg'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import Clock from '../components/Ul/Clock'
import products from '../assets/data/products'
import Services from '../services/Services'
import ProductList from '../components/Ul/ProductList'
import counterImg from '../assets/images/hero-chopp.png'
const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [thumblerProducts, setThumblerProducts] = useState([])
  const [onepieceProducts, setOnePieceProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const year = new Date().getFullYear();

useEffect(() => {
  const filteredTrendingProduct = products.filter(item => item.category === 'naruto')
  const filteredBestSalesProduct = products.filter(item => item.category === 'dragonBallZ')
  const filteredThumblerProduct = products.filter(item => item.category === 'thumbler')
  const filteredOnePieceProduct = products.filter(item => item.category === 'one-piece')
  const filteredPopularProduct = products.filter(item => item.category === 'demonSlayer')
  setTrendingProducts(filteredTrendingProduct)
  setBestSalesProducts(filteredBestSalesProduct)
  setThumblerProducts( filteredThumblerProduct)
  setOnePieceProducts(filteredOnePieceProduct)
  setPopularProducts(filteredPopularProduct)
}, [])

  return (<Helmet title={'Home'}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='9'>
          <div className="hero__content">
          <p className="hero__subtitle text-white">Trending product in {year}</p>
          <h2 className='text-white'>Bring your favorite anime characters to life</h2>
          <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Veritatis natus asperiores non adipisci explicabo sequi 
           commodi mollitia inventore perferendis totam.</p>
           <motion.button whileTap={{scale:1.2}} className='buy__btn'><Link to='/shop'>SHOP NOW!</Link></motion.button>
          </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src='' alt="" />
            </div>
          </Col>


        </Row>
      </Container>
    </section>

    <Services/>
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title mb-5">Naruto Figures</h2>
          </Col>
          <ProductList data={trendingProducts}/>
        </Row>
      </Container>
    </section>
    <section className='best__sales'>
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section__title'>Best Sales</h2>
          </Col>
        <ProductList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>
          <div className="clock__top-content">
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-5 mb-3'>Quality Action Figures</h3>
          </div>
          <Clock />

          <motion.button whileTap={{scale: 1.2}} className="buy__btn store__btn"><Link to='/shop'>Visit Store</Link></motion.button >
           </Col>
          <Col lg='6' md='12' className='text-end counter__img'> 
          <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="new__arrivals">
  <Container>
    <Row>
    <Col lg="12" className='text-center'>
            <h2 className='section__title mb-5'>New Arrival</h2>
          </Col>
     
          <ProductList   data={onepieceProducts} />
    </Row>
  </Container>
</section>
<section className="popular__category ">
<Container>
    <Row>
    <Col lg="12" className='text-center'>
            <h2 className='section__title mb-5'>Popular in Category</h2>
          </Col>
          <ProductList   data={popularProducts} />
          
    </Row>
  </Container>
</section>
<section className="thumblers">
<Container>
    <Row>
    <Col lg="12" className='text-center'>
            <h2 className='section__title mb-5'>Customized Thumblers</h2>
          </Col>
          <ProductList   data={thumblerProducts} />
          
    </Row>
  </Container>
</section>


  </Helmet>
  )
}

export default Home
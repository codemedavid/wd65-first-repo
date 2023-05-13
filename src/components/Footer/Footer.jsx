import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/luffy-og.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year =  new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4'>
        <div className='logo'>
            <img  src={logo} alt='logo'/>
            <div>
              <h1 className='text-white'>Oniichan Collections</h1>
            </div>
          </div>
          <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam doloremque impedit, modi vitae cum expedita autem consequuntur esse exercitationem. Modi!
            </p>
         </Col>
        <Col lg='3'>
        <div className="footer__quick-links">
          <h4 className="quick__links-title">Top Categories</h4>
         <ListGroup>
         <ListGroupItem className='ps-0 border-0'>
            <Link to='#'>Action Figures</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
            <Link to='#'>Thumblers</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
            <Link to='#'>One Piece</Link>
            </ListGroupItem>
            
            <ListGroupItem className='ps-0 border-0'>
            <Link to='#'>FunkoPop</Link>
            </ListGroupItem>

         </ListGroup>
        </div>
         </Col>
        <Col lg='2'>
        
        <div className="footer__quick-links">
          <h4 className="quick__links-title">Useful Links</h4>
         <ListGroup>
         <ListGroupItem className='ps-0 border-0'>
            <Link to='/shop'>Shop</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
            <Link to='/cart'>Cart</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
            <Link to='/login'>Login</Link>
            </ListGroupItem>
            
            <ListGroupItem className='ps-0 border-0'>
            <Link to='#'>Privacy Policy</Link>
            </ListGroupItem>

         </ListGroup>
        </div>

         </Col>
        <Col lg='3'>
        
        <div className="footer__quick-links">
          <h4 className="quick__links-title">Contact</h4>
         <ListGroup className='footer__contact'>
         <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
         <span><i class="ri-facebook-fill"></i></span>
       <p>  <a href="https://www.facebook.com/souvenirmagnetsph">Oniichan Collections</a></p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
            <span><i class="ri-phone-line"></i></span>
            <p>+639928214519</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
            <span><i class="ri-mail-line"></i></span>
            <p>oniichancollections@gmail.com</p>
            </ListGroupItem>

         </ListGroup>
        </div>

         </Col>

         <Col lg='12'>
          <p className='footer__copyright'>Copyright  {year} Developed by ICT201P Group 2.
          All rights reserved
          </p>
         </Col>
      </Row>
    </Container>
  </footer>
  
}

export default Footer
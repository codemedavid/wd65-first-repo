import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import useAuth from '../custom-hooks/useAuth'
import '../styles/admin-nav.css'

const AdminNav = () => {

  const {currentUser} = useAuth()

  return <>
  
  <header className="admin__header">
    <div className="admin__nav-top">
      <Container>
        <Row>
          <div className="admin__nav-wrapper-top">
            <div className="logo">
              <h2>Oniichan</h2>
            </div>
            <div className="search__box">
              <input type="text" placeholder='Search.......'/>
              <span><i class="ri-search-line"></i></span>
            </div>
            <div className="admin__nav-top-right">
              <span><i className="ri-notification-3-line"></i></span>
              <span><i className="ri-settings-2-line"></i></span>
              <img src={currentUser.photoURL} alt="" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  </header>
  <section className="admin__menu">
    <Container>
      <Row>
        <div className="admin__navigation"></div>
        <ul className='admin__menu-list'></ul>
      </Row>
    </Container>
  </section>
  </>
}

export default AdminNav
import React, {useState} from 'react'
import { Form, FormGroup, Container, Row, Col } from 'reactstrap'
const AddProducts = () => {

const [enterTitle, setEnterTitle] = useState()
const [enterShortDescription, setEnterShortDescription] = useState()
const [enterDescription, setEnterDescription] = useState()
const [enterPrice, setEnterPrice] = useState()
const [enterCategory, setEnterCategory] = useState()
const [enterProductImg, setEnterProductImg] = useState()


  return <section>
    <Container>
      <Row>
        <Col lg='12'>
          <h4 className='mb-5'>Add Product</h4>
          <Form>
            <FormGroup className="form__group">
              <span>Product title</span>
              <input type="text" placeholder='Your Anime' value={enterTitle} 
              onChange={e => setEnterTitle(e.target.value)}/>
            </FormGroup>
            <FormGroup className="form__group">
              <span>Short Description</span>
              <input type="text" placeholder='short description...' value={enterShortDescription} 
              onChange={e => setEnterShortDescription(e.target.value)}/>
            </FormGroup>
            <FormGroup className="form__group">
              <span>Description</span>
              <input type="text" placeholder='Description...' value={enterDescription} 
              onChange={e => setEnterDescription(e.target.value)}/>
            </FormGroup>

            <div className='d-flex align-items-center justify-content-between gap-5'>
            <FormGroup className="form__group w-50">
              <span>Price</span>
              <input type="number" placeholder='P90,000' value={enterPrice} 
              onChange={e => setEnterPrice(e.target.value)}/>
            </FormGroup>

            <FormGroup className="form__group w-50">
              <span>Category</span>
             <select className='w-100 p-2' value={enterCategory} 
              onChange={e => setEnterCategory(e.target.value)}>
              <option value="one-piece">One Piece</option>
              <option value="demon-slayer">Demon Slayer</option>
              <option value="thumblers">Thumblers</option>
              <option value="dragin-ball-z">Dragon Balls</option>
             </select>
            </FormGroup>
            </div>

            <div>
            <FormGroup className="form__group">
              <span>Product Image</span>
              <input type="file" value={enterProductImg} 
              onChange={e => setEnterProductImg(e.target.value)}/>
            </FormGroup>
            </div>

            <button className="buy__btn btn">Add Product</button>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
}

export default AddProducts
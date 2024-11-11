import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import carasoulimage1 from "../../image/carasoulimage1.jpg"
import carasoulimage2 from "../../image/carasoulimage2.jpg"
import carasoulimage3 from "../../image/carasoulimage3.jpg"
import './carasoul.css'
import { Col, Row} from 'antd';

const Carasoulfunction = () => {
  return (
    <div>

     
    {/* <Row>
    <MDBCarousel showControls showIndicators>
    <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
      <Col xs={8} sm={8} md={8} lg={8} xxl={8} >
      <MDBCarouselItem itemId={1}>
        <img src={carasoulimage1} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      </Col>
      <Col xs={6} sm={6} md={6} lg={6} xxl={6} >
      <MDBCarouselItem itemId={2}>
        <img src={carasoulimage2} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      </Col>
      <Col xs={8} sm={8} md={8} lg={8} xxl={8} >
      <MDBCarouselItem itemId={3}>
        <img src={carasoulimage3} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      </Col>
      <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
    </MDBCarousel>
    </Row> */}

    <MDBCarousel showControls>
    <MDBCarouselItem itemId={1}>
        <img src={carasoulimage1} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={carasoulimage2} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={carasoulimage3} className='d-block w-100' alt='...' />
      </MDBCarouselItem> 
    </MDBCarousel>


    </div>
  )
}

export default Carasoulfunction

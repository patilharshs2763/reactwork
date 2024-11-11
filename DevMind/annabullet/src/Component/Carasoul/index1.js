import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import picture1 from "../../image/bike1.jpg";
import picture2 from "../../image/bike2.jpg"
import picture3 from "../../image/bike2017.jpg"
import './carasoul.css'



const Indexcarasoul = () => {
  return (
    <div>
      <MDBCarousel showControls fade>
        <MDBCarouselItem itemId={1}>
          <img src={picture1} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src={picture2} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src={picture3} className='d-block w-100' alt='...' />
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  )
}

export default Indexcarasoul

import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import picture1 from "../../Component/Anna Bullet/bike1.jpg"
import picture2 from "../../Component/Anna Bullet/bike2.jpg"
import picture3 from "../../Component/Anna Bullet/bike1.jpg"
import './carasoul.css'



const Indexcarasoul = () => {
  return (
    <div>
      <MDBCarousel showControls fade>
        <MDBCarouselItem itemId={1}>
          {/* <img src={picture1} className='d-block w-100' alt='...' /> */}
          <div className="image-slide">
            <img src={picture1} alt="Bike" style={{ width: '100%', height: '85vh', position: 'relative' }} />
            <div className="text-overlay carasouldivstyle">
              <h1 className='carasoulheading'> Vanquish Comp Carbon</h1>
              <p><span style={{ textDecoration: 'line-through' }}>$32356.90</span><span className='spandegit'>$1189.00</span></p>
              <p className='carasoulsubheading'>You can also include forms inside the
                navigation include forms inside the navigation bar You can also include forms inside the navigation.</p>
              <button className='carasoulbutton'>SHOP NOW</button>
              <button className='carasoulbuttontwo'>EXPLORE PRODUCTS</button>
            </div>
          </div>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          {/* <img src={picture2} className='d-block w-100' alt='...' /> */}
          <div className="image-slide">
            <img src={picture2} alt="slideImg 2" style={{ width: '100%', height: '85vh' }} />
            <div className="text-overlay carasouldivstyle2" >
              <h1 className='carasoulheading2'>The Next Genration Of Bikes</h1>
              <p><span className='carasoulsubheading2'><span></span>Save $150 with order over $1500</span></p>
              <button className='carasoulbuttonthree'>EXPLORE PRODUCTS</button>
            </div>
          </div>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          {/* <img src={picture3} className='d-block w-100' alt='...' /> */}
          <div className="image-slide">
            <img src={picture3} alt="slideImg 3" style={{ width: '100%', height: '85vh' }} />
            <div className="text-overlay carasouldivstyle3">
              <h1 className='carasoulheading3'>Sporty Ride Or Speedy Computer</h1>
              <p className='carasoulsubheading2'>Find out where to buy Bullet products</p>
              <button className='carasoulbuttonthree'>LOCATE CLOSET DEALER</button>
            </div>
          </div>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
  )
}

export default Indexcarasoul

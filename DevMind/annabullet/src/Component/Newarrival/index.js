import React from 'react'
import { Col, Row} from 'antd';
import './newarrival.css'
import BlockDivWrap from "../BlockDivWrap";
import newarrivalimage1 from "../../image/newarrival1.jpg"
const Newarrival = ({children}) => {
  return (
    <div className='devmind-desktop-newarrival mt-2'>
     <BlockDivWrap>
        <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12} xxl={12} className='mt-2'>
        <img src={newarrivalimage1} className='newarrival-image'/>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xxl={12} className='mt-2'>
        <img src={newarrivalimage1} className='newarrival-image' /></Col>

        </Row>
     </BlockDivWrap>
    </div>
  )
}

export default Newarrival

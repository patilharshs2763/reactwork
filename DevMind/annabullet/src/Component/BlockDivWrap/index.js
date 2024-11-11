import React from 'react'
import { Col, Row} from 'antd';
const BlockDivWrap = ({children}) => {
  return (
    <div>
       <Row>
      <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
      <Col xs={22} sm={22} md={22} lg={22} xxl={22}>{children}</Col>
      <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
    </Row>
    </div>
  )
}

export default BlockDivWrap

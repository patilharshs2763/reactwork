import React from 'react'
import BlockDivWrap from "../BlockDivWrap";
import {Col,Row,Card,Divider, List, Typography,Button} from 'antd';
import categoryimage from "../../image/multicard1.jpg"
import './shopbycategory.css';
import DataShopbycategory from "../../Serverdata/DataShopbycategory"
import { RxDotFilled } from "react-icons/rx";

const { Title } = Typography;
const data = [
  'Tires',
  'Tires Accessories',
  'Tire Chains',
  'Wheels',
  'Wheels Accessories',
];
const ShopByCategory = () => {
  console.log("DataShopbycategory", DataShopbycategory)
  return (
    <div className='devmind-destop-shopbycategory mt-5'>
      <div>
        <Title level={5} className='shopbycategory-card-text'>TOP FEATURED COLLECTIONS</Title>
        <Title level={2} className='shopbycategory-card-heading'>
          <RxDotFilled className='shopbycategory-card-heading-icon' />SHOP BY CATEGORIES<RxDotFilled className='product-card-heading-icon' /></Title>
      </div>
      <BlockDivWrap>
      <Row gutter={[16, 16]}>
      {DataShopbycategory && DataShopbycategory.length>0 && DataShopbycategory.map((e,index ) => {
        return(
          <Col xs={24} sm={24} md={12} lg={8} xxl={8}>
              <div>
              <Card hoverable className='shopbycategory-card'>
              <Row>
                  <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
                  <img src={e.img} className='shopbyctegory-image'/>

                  
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
                  <Title level={5} className='shopcategory-heading'>{e.Heading}</Title>
                  <List  className='shopbycategory-list' dataSource={e.subParts}  renderItem={(item) => (<List.Item className='custom-list-item'> {item}
                 </List.Item>)}/>
                  
                  </Col>

                  <div className='flex-container'>
                  <Button className='shopcategory-button hvr-view-demo'>View More</Button>
                </div>
                
              </Row>
              </Card>
              </div>
          </Col>
        );
      })}
          
          {/* <Col xs={24} sm={24} md={12} lg={8} xxl={8}>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xxl={8}>
          </Col> */}
     </Row>
      </BlockDivWrap>
    </div>
  )
}

export default ShopByCategory

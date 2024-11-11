import React from 'react'
import Upperheader from "../Upperheader/index"
import Desktopheader from "../Desktopheader/index"
import CategoriesNavbar from "../CategoriesNavbar/index"
import Upperfooter from "../Upperfooter/index"
import Lowerfooter from "../Lowerfooter/index"
import FooterNewsletter from "../FooterNewsletter/index"
import { Image, Col, Row } from 'antd';
import BlockDivWrap from "../BlockDivWrap";
import './gallary.css';
import Datagallary from "../../Serverdata/Datagallary"
import Mobileheader from "../Mobileheader"

// for image show in map
const imageItems = Datagallary.map(item => item.gallaryimg);

const Gallaryfunction = () => {
  console.log("Datagallary", Datagallary);
  return (
    <div className='devmind-desktop-gallary mt-2 mt-lg-5'>
     <Mobileheader/>
     <Upperheader/>
     <Desktopheader/>
     <CategoriesNavbar/>
    <BlockDivWrap>
    <div>
    <Image.PreviewGroup items={imageItems}
        // items={[
        // 'https://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/5d1946d46b8fbf4ec4fba35b4a1f4d64/b/l/bluetooth_v4.2_radio_adapter_1.jpg',
        // 'https://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/5d1946d46b8fbf4ec4fba35b4a1f4d64/m/i/michelin_ltx_ms2_alloz.jpg',
        // 'https://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/5d1946d46b8fbf4ec4fba35b4a1f4d64/d/i/discount_starter_and_alternator_1.jpg',
        // 'https://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/5d1946d46b8fbf4ec4fba35b4a1f4d64/2/2/22.5_hole_aluminum_wheel_1.jpg',
        // 'https://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/5d1946d46b8fbf4ec4fba35b4a1f4d64/e/v/evolution_brake_kit_with_drilled.jpg',
        // 'https://magento2.magentech.com/themes/sm_autostore/pub/media/catalog/product/cache/5d1946d46b8fbf4ec4fba35b4a1f4d64/f/m/fm_radio_adapter_car_hands-free.jpg',
        // ]} 
        >

      <Row gutter={16}>
      {Datagallary && Datagallary.length > 0 && Datagallary.map((e,index) =>{
        return(
          <Col xs={24} sm={24} md={12} lg={6} xxl={6} className='mt-3'>
          <div className='gallary-image-block'>
          <Image className='devmind-gallary-image' src={e.gallaryimg}/>
          </div>
      </Col>
        );
      }) }
    </Row>
    </Image.PreviewGroup>
    </div>
    
    </BlockDivWrap>
    <Upperfooter/>
    <Lowerfooter/>
    <FooterNewsletter/>
    </div>
  )
}

export default Gallaryfunction

import React from 'react'
import { Menu,Col, Row} from 'antd';
import { CaretDownOutlined,MenuOutlined} from '@ant-design/icons';
import './navbar.css'
import Drawerfunction from "./Drawerfunction"
const Navbarfunction = () => {
  return (
    <div>
            <Row >
            {/* <Drawerfunction/> */}
                <Col span={24}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className='unorderlist navbarmediastyle'>
                  <Menu.SubMenu key="sub0" title={<span className='navbaritem mx-3 allcategoristyle'>All Categories <MenuOutlined  className='mx-3' /></span>}>
                    <Menu.Item key="0-1" className='navbaritem'>Category 1</Menu.Item>
                    <Menu.Item key="0-2" className='navbaritem'>Category 2</Menu.Item>
                    <Menu.Item key="0-3" className='navbaritem'>Category 3</Menu.Item>
                  </Menu.SubMenu>
                  
                    <Menu.Item key="2" className='navbaritem mx-3' style={{color:'black'}}>Home </Menu.Item>
                    <Menu.Item key="3" className='navbaritem mx-3' style={{color:'black'}}>Shop</Menu.Item>
                    <Menu.SubMenu key="sub1" title={<span className='navbaritem' style={{color:'black'}}>Parts <CaretDownOutlined /> </span>}>
                        <Menu.Item key="4-1" className='navbaritem'>About</Menu.Item>
                        <Menu.Item key="4-2" className='navbaritem'>Our Team</Menu.Item>
                        <Menu.Item key="4-3" className='navbaritem'>Faq</Menu.Item>
                        <Menu.Item key="4-4" className='navbaritem'>404</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="5" className='navbaritem' style={{color:'black'}}>Blog</Menu.Item>
                    <Menu.Item key="6" className='navbaritem' style={{color:'black'}}>Contact</Menu.Item>
                    <Menu.Item key="6" className='navbaritem' style={{color:'black'}}>New Arravals</Menu.Item>

                    </Menu>
                </Col>
           </Row>
    </div>
  )
}

export default Navbarfunction

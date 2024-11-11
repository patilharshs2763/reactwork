import React, { useState } from 'react';
import { Button, Drawer,Menu,SubMenu} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './navbar.css'

const Drawerfunction = () => {
  const [open, setOpen] = useState(false);
  // const [size, setSize] = useState('small');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" size="small" className='drawerbuttonstyle' style={{ }} onClick={showDrawer}>
      <MenuOutlined className='drawericonbutton'/>
      </Button>
      <Drawer width={270} title="अण्णा बुलेट" onClose={onClose} open={open}>
      <Menu  defaultSelectedKeys={['1']}>
            <Menu.Item key="1" style={{fontSize:'18px'}}>Home</Menu.Item>
            <Menu.Item key="2" style={{fontSize:'18px'}}>Shop</Menu.Item>
            {/* <Menu.Item key="3" style={{fontSize:'18px'}}>Pages</Menu.Item> */}
            <Menu.SubMenu key="sub1" title={<span style={{fontSize:'18px'}}>Pages</span>}>
                <Menu.Item key="3-1" style={{fontSize:'18px'}}>About</Menu.Item>
                <Menu.Item key="3-2" style={{fontSize:'18px'}}>Our Team</Menu.Item>
                <Menu.Item key="3-3" style={{fontSize:'18px'}}>Faq</Menu.Item>
                <Menu.Item key="3-3" style={{fontSize:'18px'}}>404</Menu.Item>
              </Menu.SubMenu>
            <Menu.Item key="4" style={{fontSize:'18px'}}>Blog</Menu.Item>
            <Menu.Item key="5" style={{fontSize:'18px'}}>Contact</Menu.Item>
          </Menu>
      </Drawer>
    </>
  );
};
export default Drawerfunction;

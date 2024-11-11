import React from 'react';
import "./Lower.css"
import { Col, Row, Typography, Input, Space, Button } from 'antd';
import { HeartOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;

const LowerHeader = () => {
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                    <div className="logo mt-3">
                        <Title level={2} className='logofontstyle'>अण्णा बुलेट</Title>
                    </div>
                </div>
                <div class="col-8 col-sm-8 col-md-8 col-lg-6 col-xl-6">
                    <div class="btn-group mt-3 devmindDropSearch" role="group">
                        <div class="input-group">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                All Categories
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Wheels</a></li>
                                <li><a class="dropdown-item" href="#">Oils</a></li>
                                <li><a class="dropdown-item" href="#">Silencers</a></li>
                            </ul>
                            <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
                            <button type="button" class="btn btn-outline-primary"><SearchOutlined /></button>
                        </div>
                    </div>
                    {/* <Space className='mt-3 lowerheadermediastyle'>
                        <Search addonBefore="All Categories" placeholder="Search Product" allowClear />
                    </Space> */}
                </div>
                <div class="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-3 devmind-rightButtons">
                    {/* <Button type="primary" icon={<HeartOutlined />} className='buttonstyle' /> */}
                    {/* <div className='mt-3'> */}

                    <button type="button" class="btn btn-outline-secondary heartButton"><HeartOutlined /></button>
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-primary"><ShoppingCartOutlined /></button>
                        <button type="button" class="btn btn-outline-primary cartData">My Cart: $0.00</button>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default LowerHeader;

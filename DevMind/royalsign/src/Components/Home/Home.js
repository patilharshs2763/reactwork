import React from 'react';
import './Home.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import SimpleMap from '../GoogleMap/SimpleMap';
const Home = () => {

    return (
        <>
            <SimpleMap />
            <div className='container-fluid devmind-home'>
                <div className='devmind-home-data'>
                    <div className='devmind-royalsign'>
                        <h1 className='devmind-royal'>ROYAL<span className='devmind-sign'>Sign</span></h1>
                    </div>
                    <div className='devmind-royaltext'>
                        <h3> we are create<br />
                            connection through<br />
                            outdoor advertising</h3>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home

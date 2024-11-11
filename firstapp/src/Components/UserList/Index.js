import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Space, Table, Tag } from 'antd';

const UserList = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetchUserList();
    }, [])
    const fetchUserList = () => {
        axios.get('http://localhost:3000/user')
            .then(function (response) {
                // handle success
                console.log(response.data.rows);
                setUserData(response.data.rows);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {

            });
    }


    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID',
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'Roll',
            dataIndex: 'Rollnumber',
            key: 'Rollnumber',
        },
        {
            title: 'Address',
            dataIndex: 'City',
            key: 'City',
        },
    ];

    return (
        <div>
            <h1>User List</h1>
            <Table dataSource={userData} columns={columns} />;
        </div>
    )
}

export default UserList

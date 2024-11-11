import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Space, Table, message } from 'antd';
import AddUser from '../AddUser/index'; // Import the AddUser component

const UserList = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updatedUserId, setUpdateUserId] = useState();

    useEffect(() => {
        fetchUserList();
    }, []);

    const fetchUserList = () => {
        setLoading(true);
        axios.get('http://localhost:3000/getusers')
            .then((response) => {
                setUserData(response.data.rows);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                message.error('Failed to load user data.');
                setLoading(false);
            });
    };
    const deleteUser = (id) => {
        axios.delete('http://localhost:3000/deleteuser/' + id)
            .then((response) => {
                let newData = userData.filter((e) => e.id != id);
                setUserData([...newData]);
            })
            .catch((error) => {
            });
    };


    const columns = [
        {
            title: 'Employee ID',
            dataIndex: 'eid',
            key: 'eid',
            sorter: (a, b) => a.eid - b.eid,
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Employee Name',
            dataIndex: 'ename',
            key: 'ename',
            sorter: (a, b) => a.ename - b.ename,

        },
        {
            title: 'Mobile',
            dataIndex: 'emobile',
            key: 'emobile',
        },
        {
            title: 'Salary',
            dataIndex: 'esalary',
            key: 'esalary',
        },
        {
            title: 'Address',
            dataIndex: 'eaddress',
            key: 'eaddress',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button type="button" onClick={() => {
                        setUpdateUserId(record.id)
                    }}>edit</button>
                    <button type="button" onClick={() => {
                        deleteUser(record.id)
                    }}>Delete</button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            {/* Pass the fetchUserList function as a prop to AddUser */}
            {/* <Button >Add User</Button> */}
            <AddUser refreshUserList={fetchUserList} updatedUserId={updatedUserId}
                setUpdateUserId={setUpdateUserId} />
            <h2>User List</h2>
            <Table
                columns={columns}
                dataSource={userData}
                loading={loading}
                rowKey="eid" // Ensure each row has a unique key
                pagination={{ pageSize: 5 }} // Limit to 10 records per page
            />
        </div>
    );
};

export default UserList;

import React, { useEffect, useRef, useState } from 'react';
import './Table.css';
import { EditOutlined, SearchOutlined, UserAddOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Input, message, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const DisplayUsers = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);

    // Fetch users on component mount
    useEffect(() => {
        fetchUsersList();
    }, []);

    // Function to fetch user data
    const fetchUsersList = () => {
        axios.get('http://localhost:5000/users')
            .then((response) => {
                setUserData(response.data.students);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                message.error("Failed to fetch the users data");
            });
    };

    // Handle search functionality
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters, confirm) => {
        clearFilters();
        setSearchText('');
        confirm();
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters, confirm)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    // Delete user function
    const deleteUser = (id) => {
        if (!id) {
            console.error("User ID is not provided.");
            return;
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/users/${id}`)
                    .then(() => {
                        setUserData((prevData) => prevData.filter(user => user.id !== id));
                        Swal.fire('Deleted!', 'User has been deleted.', 'success');
                    })
                    .catch((error) => {
                        console.error("Error deleting user:", error);
                        Swal.fire('Error!', 'There was an error deleting the user.', 'error');
                    });
            }
        });
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            ...getColumnSearchProps('name'),
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
            width: '20%',
            ...getColumnSearchProps('mobile'),
            sorter: (a, b) => a.mobile - b.mobile,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
            ...getColumnSearchProps('department'),
            sorter: (a, b) => a.department.length - b.department.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Address',
            dataIndex: 'city',
            key: 'city',
            ...getColumnSearchProps('city'),
            sorter: (a, b) => a.city.length - b.city.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined
                        onClick={() => {
                            navigate(`/update-user/${record.id}`);
                        }}
                    />
                    <DeleteOutlined
                        onClick={() => deleteUser(record.id)}
                    />
                </Space>
            ),
        },
    ];

    return (
        <>
            <div className='user-data-table'>
                <Button
                    type="primary"
                    shape="round"
                    className='add-user-btn'
                    onClick={() => navigate('/add-user')}
                >
                    Add user <UserAddOutlined />
                </Button>
                <Table
                    columns={columns}
                    dataSource={userData}
                    rowKey='id'  // Use 'id' to uniquely identify rows
                    pagination={{ pageSize: 10 }}
                />
            </div>
        </>
    );
};

export default DisplayUsers;

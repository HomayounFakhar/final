import React from 'react';
import { Table } from 'antd';

const columns = [
    {
     
      title: 'Product Code',
      dataIndex: 'productcode',
      sorter: (a, b) => a.productcode - b.productcode,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Name',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  
  const data = [
    {
      key: '1',
      productcode: 1,
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      productcode: 10,
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      productcode: 100,
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      productcode: 1001,
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  
  function onClick(event) {
    
    console.log("event");
   
    console.log(event);
   
  }

function BuyNow() {

  return (
    <div>
    <Table columns={columns} dataSource={data}  
    
    onRow={(record, rowIndex) => {
      return {
        onClick: event => {console.log(record)}, // click row
        onDoubleClick: event => {}, // double click row
        onContextMenu: event => {}, // right button click row
        onMouseEnter: event => {}, // mouse enter row
        onMouseLeave: event => {}, // mouse leave row
      };
    }}

    />
    </div>
  )};

  export default BuyNow;


  



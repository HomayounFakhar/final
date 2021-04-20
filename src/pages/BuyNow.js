import React from 'react';
import { Table ,Typography} from 'antd';
import { Image } from 'antd';
import Online from './../img/Online.png'
  
const { Text } = Typography;

const columns = [
    {
     
      title: 'Product Code',
      dataIndex: 'productcode',
      sorter: (a, b) => a.productcode - b.productcode,
      sortDirections: ['descend', 'ascend'],
      render: text => <Text type="warning">{text}</Text>,
      
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      sorter: (a, b) => a.productName.length - b.productName.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Old Price',
      dataIndex: 'OldPrice',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.Price - b.Price,
      render: text => <Text delete>{text}</Text>,      
    },        
    {
      title: 'Price',
      dataIndex: 'Price',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.Price - b.Price,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: (a, b) => a.description.length - b.description.length,
      sortDirections: ['descend', 'ascend'],  
    },
  ];

  const data = [
    {
      key: '1',
      productcode: 1,
      Price: 101,
      OldPrice : 150,
      productName: 'Shoe',
      description : 'Aldo Shoes for men',
    },
    {
      key: '2',
      productcode: 10,
      Price: 202,
      OldPrice : 250,      
      productName: 'T-Shirt',
      description : 'T-Shirt Nike for Teen',      
    },
    {
      key: '3',
      productcode: 100,
      Price: 303,
      OldPrice : 310,      
      productName: 'Jacket',
      description : 'H&M Jacket for men',      
    },
    {
      key: '4',
      productcode: 1001,
      Price: 404,
      OldPrice : 480,            
      productName: 'jewelry',
      description : 'Dior jewelry for Women',      
    },
  ];
  
function BuyNow() {

  return (
    <div>
    
    <Image width={200} src={Online} />

    <Table columns={columns} dataSource={data}      
    onRow={(record, rowIndex) => {
      return {
        onClick: event => {
          console.log(record)
        }, // click row

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


  



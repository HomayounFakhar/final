import React , { useState } from 'react';
import { Table ,Typography  , Divider , Layout ,Space,Card ,Button} from 'antd';
import { Image } from 'antd';
import Online from './../img/Online.png'
import firebase from './firebase'
  
const { Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const columns = [
  {
   
    title: 'Product Code',
    dataIndex: 'ProductCode',
    sorter: (a, b) => a.productcode - b.productcode,
    sortDirections: ['descend', 'ascend'],
    render: text => <Text type="warning">{text}</Text>,
    
  },
  {
    title: 'Product Name',
    dataIndex: 'ProductName',
    sorter: (a, b) => a.productName.length - b.productName.length,
    sortDirections: ['descend', 'ascend'],
  },   
  {
    title: 'Price',
    dataIndex: 'Price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.Price - b.Price,
  },
  {
    title: 'Old Price',
    dataIndex: 'OldPrice',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.Price - b.Price,
    render: text => <Text delete>{text}</Text>,      
  },       
  {
    title: 'Description',
    dataIndex: 'Description',
    sorter: (a, b) => a.description.length - b.description.length,
    sortDirections: ['descend', 'ascend'],  
  },
  {
    title: 'id',
    dataIndex: 'id',
    sorter: (a, b) => a.id.length - b.id.length,
    sortDirections: ['descend', 'ascend'],  
  },

];


  
function BuyNow() {
  const [ProductName , SetProductName] = useState("----");  

  // Get Data From Firebase 
  const [Product, setProduct] = React.useState([])
  React.useEffect(() => {
     const fetchData = async () => {
        const data = await firebase.firestore().collection("Products").where("Price", ">", 0).get()
        setProduct(data.docs.map(doc => ({ ...doc.data(),id: doc.id})))    
    }
    fetchData()
  } , [] )

 
 // SetProductName("event.item.props.names");    
  return (
    <div>

        <Divider orientation="left">{ProductName}</Divider>
        <Button type="primary">Add To Shopping Cart</Button>                                       
          <Space>

        <Card title="Click on img to see larger !" style={{ width: 300 }}> 
          <Image width={150} src={Online} />  

         </Card>       

         <Card title="Over View" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>          
          <p>Card content</p>                                     
         </Card>              

         <Card title="Detail ..." style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>   
          <p>Card content</p>                     
         </Card>                                    
  </Space>

           

    <Divider>Click on your product to see more deatil</Divider>


<Table columns={columns} dataSource={Product}
   onRow={(record, rowIndex) => {
    return {
      onClick: event => {
        SetProductName(record.ProductName);   
        console.log(record.ProductName);
      }, // click row

      onDoubleClick: event => {
     
      }, // double click row
      onContextMenu: event => {}, // right button click row
      onMouseEnter: event => {}, // mouse enter row
      onMouseLeave: event => {}, // mouse leave row
    };
  }}

  pagination={{ pageSize: 5 }}/>


    </div>
  )};

  export default BuyNow;


  



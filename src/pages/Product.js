import React from 'react';
import axios from 'axios'
import firebase from './firebase'
import { Table ,Typography , Space , Button , Divider} from 'antd';
import { Image } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link ,
  useParams 
} from "react-router-dom";

const { Text } = Typography;
const columns = [
  {
   
    title: 'Product Code',
    dataIndex: 'ProductCode',
    sorter: (a, b) => a.ProductCode - b.ProductCode,
    sortDirections: ['descend', 'ascend'],
    render: text => <Text type="warning">{text}</Text>,
    
  },
  {
    title: 'Product Name',
    dataIndex: 'ProductName',
    sorter: (a, b) => a.ProductName.length - b.ProductName.length,
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
    sorter: (a, b) => a.OldPrice - b.OldPrice,
    render: text => <Text delete>{text}</Text>,      
  },       
  {
    title: 'Description',
    dataIndex: 'Description',
    sorter: (a, b) => a.Description.length - b.Description.length,
    sortDirections: ['descend', 'ascend'],  
  },
  {
    title: 'id',
    dataIndex: 'id',
    sorter: (a, b) => a.id.length - b.id.length,
    sortDirections: ['descend', 'ascend'],  
  },

];


function Product() {

  // Get Data From Firebase 
  const [Product, setProduct] = React.useState([])
  React.useEffect(() => {
     const fetchData = async () => {
        const data = await firebase.firestore().collection("ShoppingCart").where("Price", ">", 0).get()
        setProduct(data.docs.map(doc => ({ ...doc.data(),id: doc.id})))    
    }
    fetchData()
  } , [] )
  // ------------------------------------
 
return(

  <>   
  
  <Button href="/Product" type="primary">Refresh</Button>
  
  <Divider orientation="left">Double Click To remove from your cart</Divider>    
  <Table columns={columns} dataSource={Product}
   onRow={(record, rowIndex) => {
    return {
      onClick: event => {
        firebase.firestore().collection("ShoppingCart").doc(record.id).delete()
        
      }, // click row

      onDoubleClick: event => {
     
      }, // double click row
      onContextMenu: event => {}, // right button click row
      onMouseEnter: event => {}, // mouse enter row
      onMouseLeave: event => {}, // mouse leave row
    };
  }}

  pagination={{ pageSize: 5 }}/>

  </>
    
  );


}
  
  
  export default Product;


  



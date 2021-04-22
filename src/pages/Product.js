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
        const data = await firebase.firestore().collection("Products").where("Price", ">", 0).get()
        setProduct(data.docs.map(doc => ({ ...doc.data(),id: doc.id})))    
    }
    fetchData()
  } , [] )
  // ------------------------------------
 
  // Add To Database
  const OnAdd = () => 
  {
  firebase.firestore().collection("Products").add ({
    ProductCode : 21 ,
    ProductName : "Sea HAT",
    Price : 89 ,     
    OldPrice : 99 ,
    Description : "Cowboy HAT Made in Italy" ,   
    Group : "HAT" ,
    Utilized : "Men" ,
    SizeAvailabliy : "40 cm" ,
  })
  }

  const OnAdd2 = () => 
  {
  firebase.firestore().collection("Products").add ({
    ProductCode : 5 ,
    ProductName : "Dior perfume",
    Price : 650 ,     
    OldPrice : 600 ,
    Description : "This perfume is used by women" ,   
    Group : "perfume" ,
    Utilized : "women" ,
    SizeAvailabliy : "25ml 50ml 100ml" ,
  })
  }

return(

  <>   
  
  <Button href="/Product" type="primary">Refresh</Button>
  
  <Divider orientation="left">Double Click To remove from your cart</Divider>    
  <Table columns={columns} dataSource={Product}
   onRow={(record, rowIndex) => {
    return {
      onClick: event => {
        firebase.firestore().collection("Products").doc(record.id).delete()
        
      }, // click row

      onDoubleClick: event => {
     
      }, // double click row
      onContextMenu: event => {}, // right button click row
      onMouseEnter: event => {}, // mouse enter row
      onMouseLeave: event => {}, // mouse leave row
    };
  }}

  pagination={{ pageSize: 5 }}/>

<button onClick={OnAdd}>OnAdd</button>
<button onClick={OnAdd2}>OnAdd2</button>
  </>
    
  );


}
  
  
  export default Product;


  



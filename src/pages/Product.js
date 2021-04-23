import React , { useState , useContext , useEffect} from 'react';
import firebase from './firebase'
import { Table ,Typography , Button , Divider} from 'antd';
import { Context } from '../context/Storage'

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

 //Global 
 const [state, setState] = useContext(Context);

  // Get Data From Firebase 
  const [Product, setProduct] = useState([])
  useEffect(() => {
     const fetchData = async () => {
        const data = await firebase.firestore().collection("ShoppingCart").where("UserName", "==", state.Username).get()
        setProduct(data.docs.map(doc => ({ ...doc.data(),id: doc.id})))    
    }
    fetchData()
  } , [] )
  // ------------------------------------
 
return(

  <>
  <h1>You are login as : {state.Username}</h1>
  <br></br>
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


  



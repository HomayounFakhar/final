import React , { useState , useContext , useEffect} from 'react';
import {Input, Image, Table ,Typography  , Divider , Layout ,Space,Card ,Button} from 'antd';
import firebase from './firebase'
import { Context } from '../context/Storage'
import { ContextFilter } from '../context/Filtering'

const { Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;

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
    title: 'WebStore Code',
    dataIndex: 'id',
    sortDirections: ['descend', 'ascend'],  
    visibleMenuSettings: false,

  },

];

function BuyNow() {


 //Global 
 const [state, setState] = useContext(Context);
 const [filter, setFilter] = useContext(ContextFilter); 
 
 // Add To ShoppingCart
 const OnAdd = () => 
 {

 firebase.firestore().collection("ShoppingCart").add ({
   ProductCode : state.ProductCode ,
   ProductName : state.ProductName,
   Price : state.Price,     
   OldPrice : state.OldPrice,
   Description : state.Description,  
   Group : state.Group,
   SizeAvailabliy : state.SizeAvailabliy,
   UserName : state.Username
 })
 }

  // Showing Data
  const [ProductName , SetProductName] = useState("");  
  const [ProductCode , SetProductCode] = useState("");  
  const [OldPrice , SetOldPrice] = useState("");  
  const [Price , SetPrice] = useState("");  
  const [Description , SetPDescription] = useState("");  
  const [Group , SetGroup] = useState("");  
  const [SizeAvailabliy , SetSizeAvailabliy] = useState("");                

    // Gobal Values
    function ChangeGlobalValues () {
      const initalState = {
        ProductCode : ProductCode ,
        ProductName : ProductName,
        Price : Price,     
        OldPrice : OldPrice,    
        Description : Description ,
        Group : Group, 
        SizeAvailabliy : SizeAvailabliy,
        Username : state.Username
        };      
        setState(initalState);
        //////////////////////
    }
    
  ////

  // Get Data From Firebase
    const [Product, setProduct] = useState([])

    useEffect(() => {
      const fetchData = async () => {
          const data = await firebase.firestore().collection("Products").where("Price", ">=", filter.MinPrice).where("Price", "<=", filter.MaxPrice).get()
          setProduct(data.docs.map(doc => ({ ...doc.data(),id: doc.id})))    
      }
      fetchData()
    } , [] )

  return (
    <>
    <Button onClick={OnAdd} type="primary">Add ( {ProductName} ) Shopping Cart +</Button>  

<Table columns={columns} dataSource={Product}
   onRow={(record, rowIndex) => {
    return {
      onClick: event => {
              SetProductName(record.ProductName);   
              SetProductCode(record.ProductCode);           
              SetOldPrice(record.OldPrice);                   
              SetPrice(record.Price);      
              SetPDescription(record.Description);      
              SetGroup(record.Group);      
              SetSizeAvailabliy(record.SizeAvailabliy);   

              ChangeGlobalValues ()
           
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
  )};

  export default BuyNow;


  



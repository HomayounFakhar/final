import React , { useState , useContext} from 'react';
import {Image, Table ,Typography  , Divider , Layout ,Space,Card ,Button} from 'antd';
import firebase from './firebase'
import { Context } from '../context/Storage'

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

 // Add To ShoppingCart
 const OnAdd = () => 
 {

 firebase.firestore().collection("ShoppingCart").add ({
   ProductCode : ProductCode ,
   ProductName : ProductName,
   Price : Price,     
   OldPrice : OldPrice,
   Description : Description,  
   Group : Group,
   SizeAvailabliy : SizeAvailabliy,
   UserName : state.Username
 })
 }

  const [ProductName , SetProductName] = useState("");  
  const [ProductCode , SetProductCode] = useState("");  
  const [OldPrice , SetOldPrice] = useState("");  
  const [Price , SetPrice] = useState("");  
  const [Description , SetPDescription] = useState("");  
  const [Group , SetGroup] = useState("");  
  const [SizeAvailabliy , SetSizeAvailabliy] = useState("");                

  // Get Data From Firebase
  const [Product, setProduct] = React.useState([])
  React.useEffect(() => {
     const fetchData = async () => {
        const data = await firebase.firestore().collection("Products").where("Price", ">", 0).get()
        setProduct(data.docs.map(doc => ({ ...doc.data(),id: doc.id})))    
    }
    fetchData()
  } , [] )
  
  return (
    <div>
  <h1>You are login as : {state.Username}</h1>
  <br></br>
        <Divider orientation="left">{ProductName}</Divider>
        <Button onClick={OnAdd} type="primary">Add To Shopping Cart</Button>                                       
          <Space>

        <Card title="Click on img to see larger !" style={{ width: 300 }}> 
          <Image width={150} src={"http://sarafan.today/img/"+ProductCode+".png"} />  
          
         </Card>       

         <Card title="Over View" style={{ width: 300 }}>
          <p>ProductCode : {ProductCode}</p>
          <p>OldPrice : {OldPrice}</p>
          <p>Price : {Price} </p>          
          <p>You Save : {Price-OldPrice}</p>                                     
         </Card>              

         <Card title="Detail ..." style={{ width: 300 }}>
          <p>Group : {Group}</p>
          <p>Size : {SizeAvailabliy}</p>
          <p>Description : {Description}</p>                     
         </Card>                                    
  </Space>

    <Divider>Click on your product to see more deatil</Divider>


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


  



import React from 'react';
import axios from 'axios'
import firebase from './firebase'

import { Table ,Typography} from 'antd';
import { Image } from 'antd';

const { Text } = Typography;
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


// Get Data From Firebase 
function Product() {
  const [spells, setSpells] = React.useState([])
  
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("Products").get()
      setSpells(data.docs.map(doc => ({ ...doc.data(),id: doc.id})))    
    }
    fetchData()
  } , [] )

  const OnAdd = () => 
  {
  firebase.firestore().collection("Products").add ({
    ProductCode : 4 ,
    ProductName : "Shoe",
    OldPrice : 4000 ,
    Price : 2500 , 
    Description : "Aldo For men------"
  })
  }

return(
  
  <> 
  <button onClick={OnAdd}>OnAdd</button>
  <Table columns={columns} dataSource={spells}
   onRow={(record, rowIndex) => {
    return {
      onClick: event => {
        //console.log(record.ProductCode)
        const db = firebase.firestore()
        db.collection("Products").doc(record.id).delete()
        //console.log(" spells.ProductCode  = "+record.ProductCode)        
        
        //console.log(record);
        console.log(spells);        

        //console.log(spells)            
        //console.log("Delete")           
      }, // click row

      onDoubleClick: event => {
     
      }, // double click row
      onContextMenu: event => {}, // right button click row
      onMouseEnter: event => {}, // mouse enter row
      onMouseLeave: event => {}, // mouse leave row
    };
  }}

  />
  </>
    
  );


}
  
  
  export default Product;


  



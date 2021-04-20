import React from 'react';
import axios from 'axios'
import firebase from './firebase'

import { Table ,Typography} from 'antd';
import { Image } from 'antd';
import Online from './../img/Online.png'
  
const { Text } = Typography;

const columns = [
  {
   
    title: 'ProductName',
    dataIndex: 'ProductName',
    sorter: (a, b) => a.productcode - b.productcode,
    sortDirections: ['descend', 'ascend'],
    render: text => <Text type="warning">{text}</Text>,
    
  },
];

const data = [
  {
    key: '1',
    productcode: 1,
    Price: 101,
    OldPrice : 150,
    ProductName: 'Shoe',
    description : 'Aldo Shoes for men',
  },
];

  // Test Firebase 
function Product() {
  const [spells, setSpells] = React.useState([])
  
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("Products").get()
      setSpells(data.docs.map(doc => doc.data()))
    }
    fetchData()
  } , [] )

return(
  
  <> 
  <Table columns={columns} dataSource={spells}/>
  </>
    
    );

  }
  
  
  export default Product;


  



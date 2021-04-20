import React from 'react';
import axios from 'axios'
import firebase from './firebase'

import { Table ,Typography} from 'antd';
import { Image } from 'antd';
import Online from './../img/Online.png'
  
const { Text } = Typography;

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
  <ul>
  {spells.map(spell => (
  <li>{spell.ProductName}</li>
))}
</ul>
    );

  }
  
  export default Product;


  



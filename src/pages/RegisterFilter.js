import React , { useContext, useState } from 'react';
import { ContextFilter } from '../context/Filtering'
import { Divider ,Card , Button , Input} from 'antd';

const RegisterFilter = () => {

 //Filtering
 const [filter, setFilter] = useContext(ContextFilter); 

 const [MinPrice , SetMinPrice] = useState();    
 const [MaxPrice , SetMaxPrice] = useState();
 const [FilterProductName , SetFilterProductName] = useState();

  function ChangeFiltering () {
    const initalState = {
      MinPrice : parseInt(MinPrice),
      MaxPrice : parseInt(MaxPrice),
      FilterProductName : FilterProductName,    
      };      
      setFilter(initalState);
      console.log("ChangeGlobalValues")
      //////////////////////
  }

    return (
    <>

          <Card title="" style={{ width: 200 }}> 
            <p>Min Price</p>
            <Input placeholder={filter.MinPrice} onChange={event => SetMinPrice(event.target.value)} />
              <Divider>To</Divider>
            <Input placeholder={filter.MaxPrice} onChange={event => SetMaxPrice(event.target.value)}/>   
              <Divider></Divider>
            <p>Product Name</p>
            <Input placeholder={filter.FilterProductName} onChange={event => SetFilterProductName(event.target.value)} />            
            <Divider></Divider>                
            <Button onClick={ChangeFiltering}>Regiter Filter</Button>               
         </Card>           

    </>


  )
};

  export default RegisterFilter;


  



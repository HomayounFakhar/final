import React , { useContext, useState } from 'react';
import { ContextFilter } from '../context/Filtering'
import { Divider ,Card , Button , Input} from 'antd';

const RegisterFilter = () => {

 //Filtering
 const [filter, setFilter] = useContext(ContextFilter); 

 const [MinPrice , SetMinPrice] = useState();    
 const [MaxPrice , SetMaxPrice] = useState();    

  function ChangeFiltering () {
    const initalState = {
      MinPrice : MinPrice,
      MaxPrice : MaxPrice
      };      
      setFilter(initalState);
      console.log("ChangeGlobalValues")
      //////////////////////
  }


    return (
    <>

          <Card title="" style={{ width: 200 }}> 
            <p>Min Price</p>
            <Input onChange={event => SetMinPrice(parseInt(event.target.value))} />
              <Divider>To</Divider>
            <Input onChange={event => SetMaxPrice(parseInt(event.target.value))}/>   
              <Divider></Divider>                  
            <Button onClick={ChangeFiltering}>Click to Register Filter</Button>   
         </Card>  

    </>


  )
};

  export default RegisterFilter;


  



import React from 'react';
import { Typography ,Button} from 'antd';
import { Image } from 'antd';
import Online from './../img/Online.png'



const { Text ,Title}  = Typography;



function Page404() {


  return (
    <div>
         <Image
      width={200}
      src={Online}
    />
    <Title level={2}>Welcome To Homayoun Store</Title>
    <Button type="primary" >Start shopping</Button>   
    <p></p> 
    </div>
  )};

  export default Page404;


  



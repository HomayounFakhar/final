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
    
    <Title level={2}>Welcome To Web Store !</Title>
    <Button href="/BuyNow" type="primary" >Start shopping</Button>
    <br/>
    <br/>
    <Button href="/Product" type="primary" >Shopping Cart</Button>          

    </div>
  )};

  export default Page404;


  



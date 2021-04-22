import React from 'react';
import { Typography } from 'antd';
import { Image } from 'antd';
import Online from './../img/Online.png'


const { Title}  = Typography;



function Page404() {

  return (
    <>
         <Image
      width={200}
      src={Online}
    />
    
    <Title level={2}>Welcome To Store</Title>
    <Title level={2}>Login to Start Shopping</Title>
    </>
  )};

  export default Page404;


  



import React from 'react';
import { Typography ,Button , Image} from 'antd';
import page404 from './../img/404.png'

const { Title}  = Typography;

function Page404() {

  return (
    <div>
         <Image width={200}src={page404}/>
         <Title level={2}>Page Not Found</Title>
         <br></br>
         <Button href="/" type="primary">Go To  HomePage</Button>
    </div>
  )};

  export default Page404;


  



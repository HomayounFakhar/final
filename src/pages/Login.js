import React , { useContext, useState } from 'react';
import { Context } from '../context/Storage'
import { Input , Card ,Divider , Button } from 'antd';


const Login = () => {

   const [state, setState] = useContext(Context);
    
   const [Username, SetUsername] = useState('')


   ///
   const initalState = {
    Username : Username,
    passworld: '12345'
    };
    
    function test () {
     console.log("------");
    setState(initalState);
    ////

}

    return (
    <>

<Card title="Enter your username to have your own Cart !" style={{ width: 500 }}>

<Input Key="Username" addonBefore="Username " onChange={event => SetUsername(event.target.value)} />
<Divider></Divider>
<Input Key="Password" addonBefore="Password  " />
<Divider></Divider>
<Button onClick={test} type="primary">Login To Store</Button>    

</Card>    
         
        <h1 >LOGIN LOGIN LOGIN LOGIN LOGIN</h1>
        <p>{state.Username}</p>
        <p>{state.passworld}</p> 
       
    </>


  )
};

  export default Login;


  



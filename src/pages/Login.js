import React , { useContext, useState } from 'react';
import { Context } from '../context/Storage'
import { Input , Card ,Divider , Button } from 'antd';


const Login = () => {

   const [state, setState] = useContext(Context);
    
   const [Username, SetUsername] = useState('')
   const [Password, Setpassword] = useState('')   
   

   /// Change Value Global
  
    function ChangeGlobalValues () {
      const initalState = {
        Username : Username,
        Password: Password
        };      
        setState(initalState);
        console.log(state.Password)
        //////////////////////
    }

    return (
    <>

<Card title="Enter your username to have your own Cart !" style={{ width: 500 }}>
      <Input Key="Username" addonBefore="Username " defaultValue={state.Username} onChange={event => SetUsername(event.target.value)} />
          <Divider></Divider> 
      <Input Key="Password" addonBefore="Password  " onChange={event => Setpassword(event.target.value)} />
          <Divider></Divider>
      <Button onClick={ChangeGlobalValues} type="primary">Login To Store</Button>
</Card>    
 
    </>

  )
};

  export default Login;


  



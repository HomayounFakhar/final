import React , { useContext } from 'react';
import { Context } from './../context/Storage'

const AboutMe = () => {

   const [state, setState] = useContext(Context);

    return (
    <>

        <h1>Welcome To Web Store</h1>
        <p>You are login as {state.Username}</p>
        <p>We are here as a clothing store to help you make your online purchases</p> 
       
    </>


  )
};

  export default AboutMe;


  



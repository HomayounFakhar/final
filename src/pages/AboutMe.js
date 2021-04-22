import React , { useContext, useState } from 'react';
import { Context } from './../context/Storage'

import {Button} from 'antd';


const AboutMe = () => {

   const [state, setState] = useContext(Context);
    
   const initalState = {
    name : 'Change Global Variable',
    passworld: '12345'
    };   

   function test () {
    console.log("------");
    setState(initalState);

}

    return (
    <>
         <button onClick={test}  >mmmmmmmmmmmmmmmmmm</button>
        <h1 >Welcome</h1>
        <p>{state.name}</p>
        <p>{state.passworld}</p> 
       
    </>


  )
};

  export default AboutMe;


  



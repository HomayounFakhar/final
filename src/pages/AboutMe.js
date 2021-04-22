import React , { useContext, useState } from 'react';
import { Context } from './../context/Storage'

const AboutMe = () => {

   const [state, setState] = useContext(Context);
    
   ///
   const initalState = {
    Username : 'Homayoun',
    passworld: '12345'
    };
   function test () {
    console.log("------");
    setState(initalState);
    ////

}

    return (
    <>
        <button onClick={test}  >mmmmmmmmmmmmmmmmmm</button>
        <h1>Welcome</h1>
        <p>{state.Username}</p>
        <p>{state.passworld}</p> 
       
    </>


  )
};

  export default AboutMe;


  



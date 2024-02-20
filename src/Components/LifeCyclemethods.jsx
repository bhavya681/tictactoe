// import React, { Component, useEffect } from 'react'

// const LifeCyclemethods = () => {

// useEffect(() => {
//   This code will run after the component has mounted
//     You can perform any side effects here
//     console.log('Component has mounted');

//     For example, you can fetch data from an API
//     Make sure to clean up any resources in the return function if necessary
//     This can act as componentWillUnmount
//     return () => {
//       console.log('Component will unmount');
//       Clean up resources or cancel any ongoing tasks here
//     };
// }, [])


//     return (
//     <div>
//       <h1>Hello There</h1>
//     </div>
//   )
// }

// export default LifeCyclemethods

// React Life Cycle Component 
// componentDidMount
// render
// componentDidUpdate

//Parent
import React, { useState } from 'react'
import Hook from './Hook';

const LifeCyclemethods = () => {
  const [counter1, setcounter1] = useState(1);
  const [counter2,setcounter2]=useState([]);
  const gh=()=>{
    console.log("Hello Thee ")
  }
  return (
    <div>
      <Hook count2={counter2} func2={gh}/> 
      {/* This should run only one time */}   
      <button onClick={() => { setcounter1(counter1 + 1) }}>{counter1}</button>
    </div>
  )
}

export default LifeCyclemethods

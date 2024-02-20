import React from 'react'
import "../App.css";

const Block = ({value,onClick}) => {

  return (
    <div className='block' onClick={onClick}>
      <h1>{value}</h1>
    </div>
  )
  
}

export default Block;


























/*
import React from 'react';
import "../App.css";

const Block = ({value,onClick}) => {
  
  return (
    <div onClick={onClick} className='block'>
      <h1>{value}</h1>
    </div>
  )
}

export default Block;
*/
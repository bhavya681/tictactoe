//useRef create a mutable variable which will not re-render the components now we can access dom directly using useRef dom access
//return object useref and currvalue 0 and obj return
import React, { useEffect, useRef, useState } from 'react'

/*Problem 
const useRefhooks = () => {
    const [myData, setMyData] = useState("");
    const [count, setCount] = useState();
useEffect(()=>{
    setCount(count+1)
},[]) solution array dependencies so run only first time only there*/

const useRefhooks = () => {
    const [myData, setMyData] = useState("");
    // const [count, setCount] = useState();

const count=useRef(0);

    useEffect(() => {
        // setCount(count + 1)
        count.current=count.current+1//craete mutable varable to avoid rerendering
    }, [])


const inputElem=useRef("");
   const changeStyle=()=>{
console.log(inputElem.current)
   } 
    return (
        <div>
            <input ref={inputElem} type='text' value={myData} onChange={(e) => { setMyData(e.target.value) }} />
            <p>{count}</p>
        <button onClick={changeStyle}>Submit</button>
        </div>
    )
}

export default useRefhooks;



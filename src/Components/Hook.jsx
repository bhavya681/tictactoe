/*useMemo hook in react js -it used to solve problem of slowness of rendering data for target function and other unrequired function also
useMemo is generally use to optimize performance of application dependency update then work similar use memo return memorize value and use callbackfunction return memoraize function

import React, { useMemo, useState } from 'react'

const Hook = () => {
    const [counter1,setcounter1]=useState(1);
    const [counter2,setcounter2]=useState(2);
    //this function effect for both function counter1,counter slowness

  Problem
    const isEven=()=>{
        console.warn(".....")
        let i=0;
        while(i<20000)i++;
        return counter1%2===0
    }
     /*Solution
    const isEven=useMemo(()=>{
        console.warn(".....")
        let i=0;
        while(i<20000)i++;
        return counter1%2===0
    },[counter1])
  return (
    <div>
      <button onClick={()=>{setcounter1(counter1+1)}}>{counter1}</button>
      <span>{isEven?"Even":"Odd"}</span>
      <button onClick={()=>{{setcounter2(counter2+2)}}}>{counter2}</button>
    </div>
  )
}

export default Hook;
*/



/*useCallback hook in react js -it used to solve problem of rerendering to improve performance and this function store function and return function*/
/*react component always render first time but it will render second time if  changes occur's no unwanted second render we want using usecallback hook */

//Child
import React, { memo } from 'react'

const Hook = ({count2,func2}) => {
    console.log("Child Component render")
    return (
        <div>
            {count2}
            <h1 onClick={func2}>Child Component</h1>
        </div>
    )
}

export default memo(Hook);//No re render a component if no change occur's


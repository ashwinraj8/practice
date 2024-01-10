import React, { useEffect, useState } from 'react'

export const Stopwatch = () => {
    const [sec,setSec] = useState(0);
    const [min,setMin] = useState(0);

    useEffect(()=>{
     const interval = setInterval(()=>{
        // setSec(prevSec=>prevSec+1)
        // if(sec==59)
        // {
        //     setMin(prevMin => prevMin + 1);
        //     setSec(0);
        // }
        setSec((prevSec) => {
            if (prevSec === 59) {
              setMin((prevMin) => prevMin + 1);
              return 0;
            } else {
              return prevSec + 1;
            }
          });
     },100);
     return ()=> clearInterval(interval);
    });
  return (
    <div>{min<10?'0'+min:min%60}:{sec<10?'0'+sec : sec%60}</div>  //need to do %60 to start to 0 again
  )
}

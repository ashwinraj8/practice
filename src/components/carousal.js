import React, { useEffect, useState } from 'react'
const data = ['https://plus.unsplash.com/premium_photo-1672280727393-ab6f0b26f527?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fHww'
, 'https://images.unsplash.com/photo-1616531770192-6eaea74c2456?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25saW5lfGVufDB8fDB8fHww',
'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ubGluZXxlbnwwfHwwfHx8MA%3D%3D'
]

export const Carousal = () => {
    const [imageIndex,setImageIndex] = useState(0);
    const handlePre = ()=>{
       setImageIndex(
        !imageIndex ? data.length - 1:imageIndex -1
       )
    }
    const handleNext = ()=>{
        setImageIndex((imageIndex + 1)%data.length)
    }

    useEffect(()=>{
     const t = setInterval(()=>{
        handleNext();
     },2000);  

     return () => clearInterval(t);
    })
  return (
    <>
        <div>Carousal</div>
        <button onClick={handlePre}>Prev</button>
        {data.map((url,i)=>(
                <img 
                key={i}
                 src={url}
                //  className={(imageIndex === i ? "block":"hidden")}
                className={imageIndex === i ? "visible" : "hidden"}
                 alt='yoo'
                />
            ))}
        {/* <img src= {data[imageIndex]} /> */}
        <button onClick={handleNext}>Next</button>
    </>
    
  )
}

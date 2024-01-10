import React, { useState } from 'react'

export const Interview1 = () => {

 const [name,setName] = useState('');

  const handleName = (e)=>{
    e.preventDefault();
    setName(e.target.value);
    console.log(name)
  }
  const handleFirstLetter = ()=>{
    
    let fname = name.split(' ');
    for(let f of fname)
    {
        console.log('Output-->  ',f[0])
    }
    // console.log(fname)
  }
  return (
    <>
        <div>interview1</div>
        <input onChange={handleName} placeholder='name' />
        <button onClick={handleFirstLetter}>Click</button>
    </>
  
  )
}

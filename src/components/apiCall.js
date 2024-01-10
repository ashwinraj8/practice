// MyLazyImageComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = () => {
    const [images,setImages] = useState([]);
  const apiUrl = 'https://dummyjson.com/products/1';
  const fetchData = async ()=>{
    try {
        const res = await axios.get(apiUrl)
        console.log(res.data.images);
        setImages(res.data.images)
    } catch (error) {
        console.log(error);
    }
   }
//  --------------------------------------
   // .then and .catch sytax below 
//    const fetchData = () => {
//     axios.get(apiUrl)
//       .then((res) => {
//         console.log(res.data.images);
//         setImages(res.data.images);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   ----------------------------------------
  useEffect(()=>{
   fetchData();
  },[])
  return (
    <div>
      Hello
      {images.map((image,index)=> 
        <div key={index}>
            {image}
            <img src={image} />
        </div>
      )}
    </div>
  );
};

export default ApiCall;

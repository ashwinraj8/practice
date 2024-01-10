// MyLazyImageComponent.js
import React from 'react';

const MyLazyImageComponent = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Lazy Loaded Image" />
    </div>
  );
};

export default MyLazyImageComponent;

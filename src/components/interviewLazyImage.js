// App.js
import React, { lazy, Suspense } from 'react';

// Import the image component lazily
const MyLazyImageComponent = lazy(() => import('./MyLazyImageComponent'));

const LazyLoadImages = () => {
  // Sample array of image URLs
  const imageUrls = ['https://plus.unsplash.com/premium_photo-1672280727393-ab6f0b26f527?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lfGVufDB8fDB8fHww'
, 'https://images.unsplash.com/photo-1616531770192-6eaea74c2456?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25saW5lfGVufDB8fDB8fHww',
'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ubGluZXxlbnwwfHwwfHx8MA%3D%3D'
]


  return (
    <div>
      <h1>My App</h1>

      {/* Use Suspense to handle the loading state */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render the lazily loaded image component */}
        {imageUrls.map((url, index) => (
          <MyLazyImageComponent key={index} imageUrl={url} />
        ))}
      </Suspense>
    </div>
  );
};

export default LazyLoadImages;

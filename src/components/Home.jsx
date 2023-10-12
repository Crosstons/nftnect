import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function Home() {
  const images = [
    'https://via.placeholder.com/150/FFC0CB',
    'https://via.placeholder.com/150/FFD700',
    'https://via.placeholder.com/150/ADFF2F',
    'https://via.placeholder.com/150/ADD8E6'
    // Add more URLs as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div {...handlers} className="w-64 p-4 bg-white rounded-lg shadow-md">
        <img
          src={images[currentIndex]}
          alt="Swipeable Content"
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold mt-2">Post {currentIndex + 1}</h2>
        <p className="text-gray-600">Swipe left or right</p>
      </div>
    </div>
  );
}

export default Home;

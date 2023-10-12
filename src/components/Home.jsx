import React from 'react';
import '../components/button.css'
const images = [
  'https://via.placeholder.com/150/FFC0CB',
  'https://via.placeholder.com/150/FFD700',
  'https://via.placeholder.com/150/ADFF2F',
  'https://via.placeholder.com/150/ADD8E6'
];

function Home() {
  const handleLike = (img) => {
    console.log(`Liked: ${img}`);
  };

  const handleDislike = (img) => {
    console.log(`Disliked: ${img}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-pink-600 text-4xl mb-4">Home Feed</h1>
      <div className="space-y-4">
        {images.map((img, index) => (
          <div key={index} className="border-2 border-pink-100 p-4 rounded-lg">
            <div className="h-96 w-64 mx-auto mb-4 overflow-hidden rounded-lg">
              <img src={img} alt={`img-${index}`} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-around">
            <div class="heart-container" title="Like">
            <input type="checkbox" class="checkbox" id="Give-It-An-Id"/>
            <div class="svg-container">
                <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                </svg>
                <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                </svg>
                <svg class="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20"></polygon>
                    <polygon points="10,50 20,50"></polygon>
                    <polygon points="20,80 30,70"></polygon>
                    <polygon points="90,10 80,20"></polygon>
                    <polygon points="90,50 80,50"></polygon>
                    <polygon points="80,80 70,70"></polygon>
                </svg>
            </div>
        </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

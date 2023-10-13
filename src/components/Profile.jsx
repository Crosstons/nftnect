import React, { useState } from 'react';

function Profile() {
  const [activeTab, setActiveTab] = useState('Your Posts');

  const yourPosts = new Array(9).fill(null).map((_, i) => `https://via.placeholder.com/300x600?text=Your+Post+${i + 1}`);
  const likedPosts = new Array(9).fill(null).map((_, i) => `https://via.placeholder.com/300x600?text=Liked+Post+${i + 1}`);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const renderPosts = (posts) => (
    <div className="grid grid-cols-3 gap-16">
      {posts.map((post, idx) => (
        <div key={idx} className="h-96 w-64 border-2 border-pink-600 rounded-lg overflow-hidden">
          <img src={post} alt={`Post ${idx + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white min-h-screen p-4 flex flex-col items-center">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-pink-600">
        <img src="https://via.placeholder.com/128" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-pink-600 text-3xl mb-4">Profile Name</h1>
      <div className="mb-4">
        <button
          onClick={() => handleTabChange('Your Posts')}
          className={`px-4 py-2 mr-2 rounded-md border-pink-600 border-2 ${activeTab === 'Your Posts' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'} hover:bg-pink-500 hover:text-white transition-all duration-300`}
        >
          Your Posts
        </button>
        <button
          onClick={() => handleTabChange('Liked Posts')}
          className={`px-4 py-2 rounded-md border-pink-600 border-2 ${activeTab === 'Liked Posts' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'} hover:bg-pink-500 hover:text-white transition-all duration-300`}
        >
          Liked Posts
        </button>
      </div>
      {activeTab === 'Your Posts' ? renderPosts(yourPosts) : renderPosts(likedPosts)}
    </div>
  );
}

export default Profile;

import React, { useState } from 'react';

function Profile() {
  const [activeTab, setActiveTab] = useState('Your Posts');

  const yourPosts = new Array(9).fill(null).map((_, i) => `https://images.unsplash.com/photo-1513269762479-12fa9962d31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80${i + 1}`);
  const likedPosts = new Array(9).fill(null).map((_, i) => `https://images.unsplash.com/photo-1575540325855-4b5d285a3845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80${i + 1}`);

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
    <div className="bg-white min-h-screen p-4 flex flex-col items-center mt-20">
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-pink-600">
        <img src="https://static.vecteezy.com/system/resources/previews/011/490/381/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-pink-600 text-3xl mb-4">Crostons</h1>
      <div className="mb-4">
        <button
          onClick={() => handleTabChange('Your Posts')}
          className={`px-4 py-2 mr-2 rounded-3xl border-pink-600 border-2 ${activeTab === 'Your Posts' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'} hover:bg-pink-500 hover:text-white transition-all duration-300`}
        >
          Your Posts
        </button>
        <button
          onClick={() => handleTabChange('Liked Posts')}
          className={`px-4 py-2 rounded-3xl border-pink-600 border-2 ${activeTab === 'Liked Posts' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'} hover:bg-pink-500 hover:text-white transition-all duration-300`}
        >
          Liked Posts
        </button>
      </div>
      {activeTab === 'Your Posts' ? renderPosts(yourPosts) : renderPosts(likedPosts)}
    </div>
  );
}

export default Profile;

import React, { useState } from 'react';

function Upload() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    
    reader.onloadend = () => {
      setImage(file);
      setPreviewUrl(reader.result);
    };
    
    if(file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    console.log('Image Uploaded:', image);
    // Here you would typically handle the upload to a server...
  };

  return (
    <div className="bg-white min-h-screen p-4 flex flex-col items-center justify-center">
      <h1 className="text-pink-600 text-4xl mb-4">Upload Your Image</h1>
      <div className="border-2 border-pink-600 p-4 rounded-lg mb-4 flex flex-col items-center w-full">
        `
<div class="flex items-center justify-center w-56 p-4">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-pink-100">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span></p>
            <p class="text-xs text-gray-500"></p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" onChange={handleImageChange} />
    </label>
</div> 
`
        <div className="w-64 h-96 border-2 border-dashed border-pink-600 rounded-lg overflow-hidden mb-4">
          {previewUrl && <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />}
        </div>
        <button 
          onClick={handleUpload} 
          className="bg-pink-600 text-white px-6 py-2 rounded-3xl hover:bg-pink-500"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default Upload;

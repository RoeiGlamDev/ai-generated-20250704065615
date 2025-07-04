import { useState } from 'react';

export default function VideoUploader({
  videoTitle,
  setVideoTitle,
  videoDescription,
  setVideoDescription,
  videoFile,
  setVideoFile,
  handleVideoUpload,
}) {
  const handleTitleChange = (e) => {
    setVideoTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setVideoDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        value={videoTitle}
        onChange={handleTitleChange}
        placeholder="Video Title"
        className="w-full p-4 mb-4 border border-gray-400 rounded-lg"
      />
      <textarea
        value={videoDescription}
        onChange={handleDescriptionChange}
        placeholder="Video Description"
        className="w-full p-4 mb-4 border border-gray-400 rounded-lg"
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full p-4 mb-4 border border-gray-400 rounded-lg"
      />
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleVideoUpload}
      >
        Upload Video
      </button>
    </div>
  );
}
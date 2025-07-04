import { useState } from 'react';
import VideoUploader from '../components/VideoUploader';

export default function Dashboard() {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoUpload = () => {
    // Upload video logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-4">Dashboard</h1>
      <VideoUploader
        videoTitle={videoTitle}
        setVideoTitle={setVideoTitle}
        videoDescription={videoDescription}
        setVideoDescription={setVideoDescription}
        videoFile={videoFile}
        setVideoFile={setVideoFile}
        handleVideoUpload={handleVideoUpload}
      />
    </div>
  );
}
import { useState, useEffect } from 'react';

export default function VideoPlayer({ videoUrl }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = document.getElementById('video');
    video.addEventListener('canplay', () => {
      setPlaying(true);
    });
  }, []);

  return (
    <div className="relative w-full h-full">
      <video
        id="video"
        src={videoUrl}
        poster="https://images.pexels.com/videos/1943483/free-video-1943483.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
        controls
        className="w-full h-full object-cover"
      />
      {playing && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      )}
    </div>
  );
}
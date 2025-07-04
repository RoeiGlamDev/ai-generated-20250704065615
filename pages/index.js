import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('https://videos.pexels.com/video-files/1943483/1943483-hd_1280_720_25fps.mp4');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>GoldTube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl font-bold mb-4">GoldTube</h1>
      <VideoPlayer videoUrl={videoUrl} />

      <div className="mt-8">
        <Image
          src="https://images.pexels.com/photos/1330645/pexels-photo-1330645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="A single purple doughnut with white stripes on a bright yellow backdrop, creating a striking color contrast."
          width={400}
          height={266}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
import React from 'react';
import performance1 from './performance.mp4';
import performance2 from './shivtandav.mp4';
import performance3 from './sahil.mp4';
import performance4 from './ashlesha.mp4';

const videos = [
  { name: 'Aadat last part', src: performance1 },
  { name: 'Shiv Tandav', src: performance2 },
  { name: 'Utthan First Performance', src: performance3 },
  { name: 'Fabulous Performance', src: performance4 }
];

export function VideoGallery() {
  return (
    <div className="min-h-screen bg-black text-gray-200 p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 tracking-wide">
          🎭 Swar Performances
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Relive the magic of every stage moment
        </p>
      </header>

      {/* Video Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-lg hover:shadow-pink-500/50 transition transform hover:scale-105 duration-300 overflow-hidden border border-gray-700 backdrop-blur-md"
          >
            <video
              src={video.src}
              controls
              className="w-full h-auto aspect-video object-cover rounded-t-xl"
            />
            <div className="p-4 text-center">
              <h2 className="text-md font-semibold text-pink-400 truncate">
                {video.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-500 text-sm">
        © 2025 Swar Music Society • Designed with passion 🎶
      </footer>
    </div>
  );
}


import React from 'react';
import performance1 from './performance.mp4';
import performance2 from './shivtandav.mp4';
import performance3 from './sahil.mp4';
import performance4 from './ashlesha.mp4';


const videos = [
  { name: 'Aadat last part', src: performance1 },
  {name:'shivtandav', src:performance2},
  {name:'utthan first performance', src:performance3},
  {name:'faboulous performance', src:performance4}
  
];

export  function VideoGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-700">🎭 Swar Performances</h1>
        <p className="text-gray-600 mt-2 text-lg">Relive the magic of every stage moment</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <video
              src={video.src}
              controls
              className="w-full h-auto aspect-video object-cover"
            />
            <div className="p-4">
              <h2 className="text-sm font-semibold text-indigo-600 truncate">{video.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
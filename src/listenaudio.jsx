import React, { useState } from 'react';

export const AudioPlayer = () => {
  const [filename, setFilename] = useState('');
  const [audioSrc, setAudioSrc] = useState('');
  const [error, setError] = useState('');

  const handlePlay = async () => {
    if (!filename.trim()) {
      setError('⚠️ Please enter a filename.');
      setAudioSrc('');
      return;
    }

    const url = `https://swarbackend.onrender.com/audio/${filename.trim()}`;

    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        setAudioSrc(url);
        setError('');
      } else {
        setError('❌ File not found.');
        setAudioSrc('');
      }
    } catch {
      setError('🚫 Error connecting to server.');
      setAudioSrc('');
    }
  };

  return (
    <div className="bg-black text-gray-200 shadow-xl rounded-xl p-6 max-w-md mx-auto mt-12 border border-gray-800 backdrop-blur-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        🎧 Play Uploaded Audio
      </h2>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="Enter filename (e.g. track.wav)"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500"
        />
        <button
          onClick={handlePlay}
          className="px-5 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition transform shadow-lg"
        >
          ▶ Play
        </button>
      </div>

      {error && (
        <div className="text-red-400 text-sm mb-3 text-center font-medium">
          {error}
        </div>
      )}

      {audioSrc && (
        <audio
          controls
          src={audioSrc}
          className="w-full mt-4 rounded-lg bg-gray-800 p-2 shadow-lg"
        />
      )}
    </div>
  );
};

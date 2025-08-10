import React, { useState } from 'react';

export const AudioPlayer = () => {
  const [filename, setFilename] = useState('');
  const [audioSrc, setAudioSrc] = useState('');
  const [error, setError] = useState('');

  const handlePlay = async () => {
    if (!filename.trim()) {
      setError('Please enter a filename.');
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
        setError('File not found.');
        setAudioSrc('');
      }
    } catch {
      setError('Error connecting to server.');
      setAudioSrc('');
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">🎧 Play Uploaded Audio</h2>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="Enter filename (e.g. track.wav)"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePlay}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Play
        </button>
      </div>

      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}

      {audioSrc && (
        <audio controls src={audioSrc} className="w-full mt-2 rounded-md bg-gray-200" />
      )}
    </div>
  );
};

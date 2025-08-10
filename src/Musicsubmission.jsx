import React, { useState } from 'react';

export const MusicSubmit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    genre: '',
    description: '',
    consent: false,
    audio: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct FormData for file upload
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      const res = await fetch('https://swarbackend.onrender.com/upload-audio', {
        method: 'POST',
        body: payload,
      });

      if (res.ok) {
        alert('🎉 Music submitted successfully!');
        setFormData({
          name: '',
          email: '',
          title: '',
          genre: '',
          description: '',
          consent: false,
          audio: null,
        });
      } else {
        alert('❌ Submission failed. Try again.');
      }
    } catch (err) {
      console.error(err);
      alert('⚠️ Error submitting music.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
      <h2 className="text-2xl font-semibold text-center">🎶 Submit Your Music</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 border rounded-md"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
        className="w-full px-4 py-2 border rounded-md"
      />

      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title of the Piece"
        required
        className="w-full px-4 py-2 border rounded-md"
      />

      <select
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
        required
      >
        <option value="">Select Genre</option>
        <option value="classical">Classical</option>
        <option value="pop">pop</option>
        <option value="folk">Folk</option>
        <option value="experimental">Experimental</option>
      </select>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Tell us about your piece..."
        rows="4"
        className="w-full px-4 py-2 border rounded-md"
      />

      <input
        type="file"
        name="audio"
        accept="audio/*"
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border rounded-md"
      />

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
        />
        <span>I consent to public display on Swar Music Society platforms.</span>
      </label>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        Submit Music
      </button>
     

    </form>
  );
};


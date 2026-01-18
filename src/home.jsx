import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from './Abhinav.jpg';
import pic2 from './avani.jpg';
import pic3 from './mic.jpg';
import pic4 from './riya.jpg';
import navonil from './navonil.jpg';
import mono from './mono.jpg';

const presidents = [
  { name: 'Adarsh Pandey', role: 'Technical Lead, Instrumentalist(Guitar) & Vocalist', image: pic3 },
  { name: 'Riya', role: 'Vocalist & Event Curator', image: pic4 },
  { name: 'Abhinav', role: 'Instrumentalist(Guitar) & Outreach Coordinator', image: pic },
  { name: 'Avani', role: 'Vocalist & Event Curator', image: pic2 },
  { name: 'Navonil', role: 'Vocalist, Community Builder & Performer', image: navonil },
  { name: 'Monoswini', role: 'Instrumentalist(Guitar) & Outreach Coordinator', image: mono }
];

export function SwarHomePage() {
  const navigate = useNavigate();

  const member = () => navigate('/membership');
  const music = () => navigate('/music');
  const perform = () => navigate('/perform');
  const admin = () => navigate('/admin');
  const adminb = () => navigate('/adminb');

  return (
    <div className="bg-black text-gray-200 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-pink-700 to-red-700 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#1a1a1a,_transparent)] opacity-70"></div>
        
        <div className="flex flex-row justify-center space-x-4 mb-6">
          <button
            onClick={admin}
            className="bg-gray-800 text-white px-5 py-2 rounded-lg border border-pink-500 hover:bg-pink-600 transition shadow-lg"
          >
            Admin A
          </button>
          <button
            onClick={adminb}
            className="bg-gray-800 text-white px-5 py-2 rounded-lg border border-purple-500 hover:bg-purple-600 transition shadow-lg"
          >
            Admin B
          </button>
        </div>

        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wide neon-text">
            Welcome to Swar
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">Where Music Finds Its Voice</p>
          <button
            onClick={perform}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition transform shadow-lg"
          >
            Explore Performances
          </button>
        </div>
      </section>

      {/* Leads Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-pink-400">Meet the Leads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {presidents.map((person) => (
            <div
              key={person.name}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-pink-500/50 transition text-center border border-gray-700 backdrop-blur-lg"
            >
              {person.image && (
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-2 border-pink-500 shadow-lg"
                />
              )}
              <h3 className="text-xl font-semibold mb-2 text-purple-300">{person.name}</h3>
              <p className="text-gray-400">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-400">Our Rhythm, Our Mission</h2>
        <ul className="max-w-3xl mx-auto space-y-4 text-lg text-center text-gray-300">
          <li>🎶 Organize concerts, open mics, and workshops</li>
          <li>🎧 Foster collaboration across genres and styles</li>
          <li>📀 Record and showcase original compositions</li>
          <li>🌐 Build platforms for musical expression</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-6 text-pink-400">Get Involved</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button
            onClick={member}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition transform shadow-lg"
          >
            Become a Member
          </button>
          <button
            onClick={music}
            className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition transform shadow-lg"
          >
            Submit Your Music
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 text-center border-t border-gray-800">
        <p className="mb-2">© 2025 Swar Music Society</p>
        <p className="text-sm text-pink-500">Designed by the Swar Tech Team</p>
      </footer>
    </div>
  );
}

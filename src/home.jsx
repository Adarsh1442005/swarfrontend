import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from './Abhinav.jpg';
import pic2 from './avani.jpg';
import pic3 from './mic.jpg';

const presidents = [
  { name: 'Adarsh Pandey', role: 'Technical Lead, Instrumentalist & Voclaist',image:pic3 },
  { name: 'Riya', role: 'Vocalist & Event Curator' },
  { name: 'Abhinav', role: 'Instrumentalist & Outreach Coordinator', image:pic  },
  { name: 'Avani', role: 'Vocalist & Event Curator', image:pic2 },
  { name: 'Navonil', role: 'Vocalist, Community Builder & Performer' },
];

export function SwarHomePage() {
  const navigate = useNavigate(); // ✅ only inside the component

  const member = () => {
    navigate('/membership');
  };
  const music=()=>{
    navigate('/music');
  }

  console.log("rendering router");

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="ml-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Swar</h1>
        <p className="text-lg md:text-xl mb-6">Where Music Finds Its Voice</p>
        <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
          Explore Performances
        </button>
      </section>

      {/* Presidents Section */}
     <section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-10">Meet the Presidents</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {presidents.map((person) => (
      <div key={person.name} className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition text-center">
        {person.image && (
          <img
            src={person.image}
            alt={person.name}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
          />
        )}
        <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
        <p className="text-gray-600">{person.role}</p>
      </div>
    ))}
  </div>
</section>


      {/* Mission Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Rhythm, Our Mission</h2>
        <ul className="max-w-3xl mx-auto space-y-4 text-lg text-center">
          <li>🎶 Organize concerts, open mics, and workshops</li>
          <li>🎧 Foster collaboration across genres and styles</li>
          <li>📀 Record and showcase original compositions</li>
          <li>🌐 Build platforms for musical expression</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Get Involved</h2>
        <div className="space-x-4">
          <button onClick={member} className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition">
            Become a Member
          </button>
          <button onClick={music} className="bg-pink-500 text-white px-5 py-2 rounded hover:bg-pink-600 transition">
            Submit Your Music
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="ml-20 bg-gray-900 text-white py-8 text-center">
        <p className="mb-2">© 2025 Swar Music Society</p>
        <p className="text-sm">Designed by the Swar Tech Team</p>
      </footer>
    </div>
  );
}
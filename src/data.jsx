// src/pages/MessagesTable.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const MessagesTable = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios('https://swarbackend.onrender.com/message');
        if (response.data.length === 0) {
          alert("⚠️ Database is empty, no messages found.");
        } else {
          setMessages(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("❌ Failed to fetch messages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-gray-200 px-4 md:px-8 lg:px-16 xl:px-24 py-8">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 tracking-wide">
        📬 Messages Overview
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-700 backdrop-blur-md">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gradient-to-r from-gray-800 to-gray-900">
              <tr>
                {['Name', 'Branch', 'Year', 'Message', 'Email', 'Contact No'].map((heading, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-3 text-left text-sm font-semibold text-pink-400 uppercase tracking-wider"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-black">
              {messages.map((msg, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-800 transition duration-200 ease-in-out"
                >
                  <td className="px-6 py-4 text-sm">{msg.name}</td>
                  <td className="px-6 py-4 text-sm">{msg.Branch}</td>
                  <td className="px-6 py-4 text-sm">{msg.year}</td>
                  <td className="px-6 py-4 text-sm">{msg.message}</td>
                  <td className="px-6 py-4 text-sm">{msg.email}</td>
                  <td className="px-6 py-4 text-sm">{msg.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

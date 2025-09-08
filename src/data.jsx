// src/pages/MessagesTable.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const MessagesTable = () => {
  const [messages, setMessages] = useState([]);

  const fetchdata=async ()=>{
          const response=await axios('https://swarbackend.onrender.com/message');
          if(response.data.length===0){
            alert("there is no field in data your databse is empty");
          }
          else{
            setMessages(response.data);
          }


  }
  fetchdata();

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        📬 Messages Overview
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              {['Name', 'Branch', 'Year', 'Message', 'Email'].map((heading, idx) => (
                <th
                  key={idx}
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900">
            {messages.map((msg, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
              >
                <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">{msg.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">{msg.Branch}</td>
                <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">{msg.year}</td>
                <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">{msg.message}</td>
                <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">{msg.email}</td>
                 <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">{msg.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

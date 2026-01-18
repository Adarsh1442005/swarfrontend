import React, { useState } from 'react';
import bgImage from './music.jpg';
import axios from 'axios';

export function MembershipForm() {
  const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    color: "white",
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instrument: '',
    Branch: '',
    year: '',
    contact: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [code, setCode] = useState('');
  const [awaitingOtp, setAwaitingOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const send = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://swarbackend.onrender.com/membership', formData);
      if (response.data.code === 1) {
        setAwaitingOtp(true);
        alert("Please enter the OTP sent to your email!");
      } else if (response.data.code === 0) {
        alert("User already exists. We've contacted the owner for further changes.");
        setIsLoading(false);
        setFormData({
          name: '',
          email: '',
          instrument: '',
          contact: '',
          year: '',
          Branch: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Submission failed:', error.message);
      alert("❌ Submission failed. Please try again.");
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      setIsVerifying(true);
      const res = await axios.post('https://swarbackend.onrender.com/verify', {
        code,
        email: formData.email,
      });
      alert(res.data.text);

      setFormData({
        name: '',
        email: '',
        instrument: '',
        contact: '',
        year: '',
        Branch: '',
        message: '',
      });
      setIsVerifying(false);
      setIsLoading(false);
      setAwaitingOtp(false);

      if (res.data.code === 1) {
        setSubmitted(true);
      } else {
        setSubmitted(false);
      }

      setCode('');
    } catch (error) {
      alert("OTP verification failed. Please try again.");
      setIsVerifying(false);
    }
  };

  return (
    <div style={style} className="flex items-center justify-center px-6 py-12">
      {!awaitingOtp ? (
        <form
          onSubmit={send}
          className="bg-gray-900 text-gray-200 shadow-2xl rounded-2xl p-10 w-full max-w-xl border border-pink-500 backdrop-blur-md animate-fade-in"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 tracking-tight">
            🎶 Join Swar Music Society
          </h2>

          {submitted && (
            <div className="mb-6 text-green-400 font-semibold text-center">
              ✅ Thank you for joining! We'll be in touch soon.
            </div>
          )}

          <div className="space-y-5">
            <InputField label="🎤 Full Name" name="name" value={formData.name} onChange={handleChange} required />
            <InputField label="📧 Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
            <InputField label="📞 Contact Number" name="contact" type="tel" value={formData.contact} onChange={handleChange} required />
            <InputField label="🏫 Branch" name="Branch" type="text" value={formData.Branch} onChange={handleChange} required />
            <InputField label="📅 Year of Study" name="year" type="text" value={formData.year} onChange={handleChange} required />
            <InputField label="🎸 Primary Instrument / Role" name="instrument" value={formData.instrument} onChange={handleChange} required />
            <TextAreaField label="💬 Why do you want to join Swar?" name="message" value={formData.message} onChange={handleChange} />
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:scale-105 hover:shadow-lg transition duration-300"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      ) : (
        <div className="bg-gray-900 text-gray-200 shadow-2xl rounded-2xl p-8 w-full max-w-md border border-purple-500 backdrop-blur-md animate-fade-in">
          <h3 className="text-2xl font-bold text-pink-400 mb-4 text-center">🔐 OTP Verification</h3>
          <p className="text-gray-400 mb-6 text-center">
            We've sent a verification code to your email. Please enter it below to complete your registration.
          </p>

          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter OTP"
            className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-800 mb-4 text-gray-200"
          />

          <button
            type="button"
            onClick={verifyOtp}
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:scale-105 hover:shadow-lg transition duration-300"
          >
            {isVerifying ? "Verifying..." : "Verify"}
          </button>
        </div>
      )}
    </div>
  );
}

function InputField({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-pink-400" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-800 text-gray-200"
      />
    </div>
  );
}

function TextAreaField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-pink-400" htmlFor={name}>
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        rows="4"
        value={value}
        onChange={onChange}
        className="w-full border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-800 text-gray-200"
      />
    </div>
  );
}

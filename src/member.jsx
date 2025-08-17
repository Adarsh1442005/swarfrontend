import React, { useState } from 'react';
import bgImage from './music.jpg';
import axios from 'axios';
export function MembershipForm() {
    const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    color: "white",
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instrument: '',
    Branch:'',
    year:'',
    contact:'',
    message: '',
    
  });

  const [submitted, setSubmitted] = useState(false);
  const [code, setCode] = useState('');
const [awaitingOtp, setAwaitingOtp] = useState(false);
const[isloading,setisloading]=useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const send = async (e) => {
  e.preventDefault();
  setisloading(true);
  try {
    const response = await axios.post('https://swarbackend.onrender.com/membership', formData);
    if (response.data.code === 1) {
      setAwaitingOtp(true); // Show OTP input
      alert("please enter the otp !!!");
    } else if (response.data.code === 0) {
      alert("User already exists your credential we have already contact to the owner for further changes!!");
      setisloading(false);
       setFormData({
    name: '',
    email: '',
    instrument: '',
    contact:'',
    year:'',
    Branch:'',
    message: '',
    
  });
    }
  } catch (error) {
    console.error('Submission failed:', error.message);
  }
};



  const verifyOtp = async () => {
  try {
    const res = await axios.post('https://swarbackend.onrender.com/verify', {
      code });
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
    setisloading(false);
    
    setAwaitingOtp(false);
    if(res.data.code===-1){
      setSubmitted(false);
    }
    else{
    setSubmitted(true);
    }
    

    setCode('');
  } catch (error) {
    alert("OTP verification failed. Please try again.");
  }
};
  

  return (
    <div className="flex flex-row space-x-30">
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 px-6 py-12">
      <form
        onSubmit={send}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-xl border border-purple-300 animate-fade-in"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center text-purple-700 tracking-tight">
          🎶 Join Swar Music Society
        </h2>

        {submitted && (
          <div className="mb-6 text-green-600 font-semibold text-center">
            ✅ Thank you for joining! We'll be in touch soon.
          </div>
        )}

        <div className="space-y-5">
  <InputField
    label="🎤 Full Name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
  />
  <InputField
    label="📧 Email Address"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    required
  />
  <InputField
    label="📞 Contact Number"
    name="contact"
    type="tel"
    value={formData.contact}
    onChange={handleChange}
    required
  />
  <InputField
    label="🏫 Branch"
    name="Branch"
    type="text"
    value={formData.Branch}
    onChange={handleChange}
    required
  />
  <InputField
    label="📅 Year of Study"
    name="year"
    type="text"
    value={formData.year}
    onChange={handleChange}
    required
  />
  <InputField
    label="🎸 Primary Instrument / Role"
    name="instrument"
    value={formData.instrument}
    onChange={handleChange}
    required
  />
  <TextAreaField
    label="💬 Why do you want to join Swar?"
    name="message"
    value={formData.message}
    onChange={handleChange}
  />
</div>

        <button
          type="submit"
          className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 rounded-xl hover:scale-105 hover:shadow-lg transition duration-300"
        >
          {isloading ?"submitting...":"submit"}
        </button>
      </form>
    </section>
    {awaitingOtp && (
  <div className="mt-6">
    <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
    <input
      type="text"
      value={code}
      onChange={(e) => setCode(e.target.value)}
      className="mt-1 block w-full border rounded px-3 py-2"
    />
    <button
      type="button"
      onClick={verifyOtp}
      className="mt-2 bg-purple-600 text-white px-4 py-2 rounded"
    >
      Verify OTP
    </button>
  </div>
)}

    
   
    </div>

       
  );
}

function InputField({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-50"
      />
    </div>
  );
}

function TextAreaField({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor={name}>
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        rows="4"
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-50"
      />
    </div>
  );
}
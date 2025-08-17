import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const Audioadmin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('https://swarbackend.onrender.com/audioadmin', { password });
      if (res.data.code===1) {
        navigate('/listen'); // Redirect to your actual data page
      } else {
        setError('Access denied');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Invalid password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4 text-center">🔐 Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 w-full mb-3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700"
        >
          {loading ? 'Verifying...' : 'Login'}
        </button>
        {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
      </form>
    </div>
  );
};


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login - replace with actual Supabase auth
    const mockUsers = {
      'admin@edu.com': { id: '1', email: 'admin@edu.com', role: 'admin' },
      'teacher@edu.com': { id: '2', email: 'teacher@edu.com', role: 'teacher' },
      'student@edu.com': { id: '3', email: 'student@edu.com', role: 'student' },
    };

    const user = mockUsers[email as keyof typeof mockUsers];
    if (user && password === 'password') {
      setUser(user);
      navigate(`/${user.role}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-sm max-w-md w-full">
        <div className="flex justify-center mb-8">
          <div className="bg-blue-600 p-3 rounded-xl">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-8">Welcome to EduLMS</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Demo Accounts:</p>
          <p>admin@edu.com / password</p>
          <p>teacher@edu.com / password</p>
          <p>student@edu.com / password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
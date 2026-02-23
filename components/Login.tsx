
import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      onLogin();
    }, 800);
  };

  return (
    <div className={`fixed inset-0 bg-white z-[200] flex flex-col items-center px-8 pt-16 transition-all duration-1000 ${isAnimating ? 'opacity-0 scale-105' : 'opacity-100'}`}>
      <div className="w-full max-w-sm flex flex-col">
        {/* Header Section */}
        <div className="mb-14 text-center">
          <div className="flex flex-col items-center gap-1 mb-4">
            <h1 className="text-[32px] font-light tracking-[0.4em] text-gray-900 leading-none">
              SHOPPING
            </h1>
            <div className="flex items-center gap-4">
              <h1 className="text-[32px] font-light tracking-[0.4em] text-gray-900 leading-none ml-6">
                ZONE
              </h1>
              <span className="text-3xl">🛍️</span>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-medium">
            OWNED BY <span className="text-black font-bold">PUSHPAK BHAMRE</span>
          </p>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Nice to see you again</h2>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {/* Login Input */}
          <div className="space-y-2">
            <label className="text-[11px] font-semibold text-gray-500 ml-1">Login</label>
            <input 
              type="text" 
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#F3F4F6] border-none rounded-xl py-4 px-5 text-[14px] outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400"
              required
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-[11px] font-semibold text-gray-500 ml-1">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#F3F4F6] border-none rounded-xl py-4 px-5 text-[14px] outline-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-3">
              <button 
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-11 h-6 rounded-full transition-colors relative ${rememberMe ? 'bg-blue-500' : 'bg-gray-200'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${rememberMe ? 'left-6' : 'left-1'}`} />
              </button>
              <span className="text-[12px] text-gray-500 font-medium">Remember me</span>
            </div>
            <button type="button" className="text-[12px] text-[#2196F3] font-semibold hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <div className="pt-4 space-y-4">
            <button 
              type="submit"
              className="w-full bg-[#007AFF] text-white py-4 rounded-xl text-[15px] font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all active:scale-[0.98]"
            >
              Sign in
            </button>
            
            <div className="relative py-4 flex items-center">
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <button 
              type="button"
              onClick={onLogin}
              className="w-full bg-[#333333] text-white py-4 rounded-xl text-[14px] font-bold flex items-center justify-center gap-3 hover:bg-black transition-all active:scale-[0.98]"
            >
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              Or sign in with Google
            </button>
          </div>
        </form>

        <div className="mt-10 text-center">
          <p className="text-[13px] text-gray-500 font-medium">
            Dont have an account? <button onClick={onLogin} className="text-[#2196F3] font-bold hover:underline">Sign up now</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

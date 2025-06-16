'use client';

import { useState } from 'react';
import AnimatedButton from '@/components/ui/AnimatedButton';

interface FormData {
  email: string;
  solanaAddress: string;
  xProfile: string;
}

interface EarlyAccessFormProps {
  onSubmit: (data: FormData) => void;
}

export default function EarlyAccessForm({ onSubmit }: EarlyAccessFormProps) {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    solanaAddress: '',
    xProfile: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-white via-[#CCCCFF]/20 to-white backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-2 border-[#FF99CC]/30 hover:scale-105 transition-all duration-500">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block text-lg font-bold text-[#333333] mb-4">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border-2 border-[#FF99CC]/40 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#FFCC00]/50 focus:border-[#FF99CC] text-lg shadow-lg bg-white/90 backdrop-blur-sm"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="solanaAddress" className="block text-lg font-bold text-[#333333] mb-4">
              Solana Wallet Address
            </label>
            <input
              type="text"
              id="solanaAddress"
              name="solanaAddress"
              value={formData.solanaAddress}
              onChange={handleChange}
              className="w-full px-6 py-4 border-2 border-[#66CCFF]/40 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#33CCCC]/50 focus:border-[#66CCFF] text-lg shadow-lg bg-white/90 backdrop-blur-sm font-mono"
              placeholder="Your Solana wallet address for $CLOUT rewards"
            />
          </div>
          
          <div>
            <label htmlFor="xProfile" className="block text-lg font-bold text-[#333333] mb-4">
              X (Twitter) Profile
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <span className="text-[#333333]/60 text-lg font-medium">@</span>
              </div>
              <input
                type="text"
                id="xProfile"
                name="xProfile"
                value={formData.xProfile}
                onChange={handleChange}
                className="w-full pl-12 pr-6 py-4 border-2 border-[#FFCC00]/40 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#FF9933]/50 focus:border-[#FFCC00] text-lg shadow-lg bg-white/90 backdrop-blur-sm"
                placeholder="your_username"
              />
            </div>
          </div>
          
          <AnimatedButton
            type="submit"
            variant="accent"
            size="lg"
            fullWidth={true}
            rotation="right"
          >
            Join Beta Access
          </AnimatedButton>
        </form>
      </div>
    </div>
  );
} 
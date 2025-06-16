'use client';

import { useState } from 'react';
import AppIcon from './AppIcon';
import ChatInterface, { Message } from './ChatInterface';

export default function PhoneMockup() {
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'ai', text: 'Hey! I\'m your CloutCraft AI. Send me a tweet and I\'ll optimize it for maximum engagement on crypto Twitter.' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: inputText }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'ai', 
        text: 'Great tweet! Here\'s my optimized version with better hooks and crypto Twitter language. This should get 3x more engagement. Ready to post?' 
      }]);
    }, 1000);
    
    setInputText('');
  };

  const appIcons = [
    { name: 'WhatsApp', color: 'bg-[#25D366]', icon: 'whatsapp' },
    { name: 'Instagram', color: 'bg-gradient-to-br from-[#405DE6] via-[#5851DB] via-[#833AB4] via-[#C13584] via-[#E1306C] via-[#FD1D1D] to-[#F56040]', icon: 'instagram' },
    { name: 'X', color: 'bg-black', icon: 'x' },
    { name: 'YouTube', color: 'bg-[#FF0000]', icon: 'youtube' },
    { name: 'CloutCraft', color: 'bg-gradient-to-br from-[#FF99CC] via-[#FFCC00] via-[#FF3333] to-[#FF9933]', icon: 'cloutcraft', onClick: () => setIsAppOpen(true) },
    { name: 'Telegram', color: 'bg-[#0088cc]', icon: 'telegram' },
    { name: 'Discord', color: 'bg-[#5865F2]', icon: 'discord' },
    { name: 'TikTok', color: 'bg-gradient-to-br from-[#ff0050] to-[#00f2ea]', icon: 'tiktok' }
  ];

  return (
    <div className="flex justify-center mb-16">
      <div className="relative transform hover:scale-105 transition-all duration-500">
        {/* iPhone Frame with rainbow styling */}
        <div className="w-80 h-[640px] bg-gradient-to-b from-[#FF99CC] via-[#66CCFF] to-[#FFCC00] rounded-[3rem] p-1 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
            
            {!isAppOpen ? (
              /* Enhanced Home Screen */
              <div className="w-full h-full bg-gradient-to-br from-[#CCCCFF] via-[#66CCFF]/50 to-[#33CCCC] flex flex-col items-center justify-center p-8 relative">
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium">9:41 AM</div>
                
                <div className="grid grid-cols-4 gap-6 mt-16">
                  {appIcons.map((app, index) => (
                    <AppIcon 
                      key={index} 
                      color={app.color}
                      icon={app.icon}
                      onClick={app.onClick}
                    />
                  ))}
                </div>
                <div className="text-white text-sm mt-3 font-bold drop-shadow">CloutCraft</div>
              </div>
            ) : (
              <ChatInterface
                messages={messages}
                inputText={inputText}
                setInputText={setInputText}
                onSendMessage={handleSendMessage}
                onBack={() => setIsAppOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
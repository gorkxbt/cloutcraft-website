export interface Message {
  type: 'user' | 'ai';
  text: string;
}

interface ChatInterfaceProps {
  messages: Message[];
  inputText: string;
  setInputText: (text: string) => void;
  onSendMessage: () => void;
  onBack: () => void;
}

export default function ChatInterface({
  messages,
  inputText,
  setInputText,
  onSendMessage,
  onBack
}: ChatInterfaceProps) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#CCCCFF]/30 to-white flex flex-col">
      {/* App Header with vibrant gradient */}
      <div className="bg-gradient-to-r from-[#FF99CC] via-[#66CCFF] via-[#FFCC00] to-[#33CCCC] text-white p-4 pt-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBack}
            className="text-white text-sm font-medium hover:text-[#333333] transition-colors bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm"
          >
            ← Back
          </button>
          <div className="font-bold text-lg">CloutCraft AI</div>
          <div className="w-12"></div>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-[#CCCCFF]/10 to-white">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium shadow-xl transform hover:scale-105 transition-all duration-200 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-[#FF99CC] via-[#66CCFF] to-[#3366CC] text-white'
                    : 'bg-gradient-to-r from-white via-[#CCCCFF]/20 to-white text-[#333333] border-2 border-[#FFCC00]/30'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Input Area */}
      <div className="p-4 border-t-2 border-[#FF99CC]/30 bg-gradient-to-r from-[#CCCCFF]/10 to-[#FFCC00]/10">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your tweet..."
            className="flex-1 px-4 py-3 border-2 border-[#FF99CC]/40 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-[#FF99CC] shadow-lg bg-white/90 backdrop-blur-sm"
            onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
          />
          <button
            onClick={onSendMessage}
            className="bg-gradient-to-r from-[#FF99CC] via-[#FFCC00] to-[#FF9933] text-[#333333] px-6 py-3 rounded-full text-sm font-bold shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 transform"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
} 
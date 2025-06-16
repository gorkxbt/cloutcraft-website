export default function SuccessMessage() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-gradient-to-br from-[#66CCFF]/30 via-white to-[#33CCCC]/20 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-[#66CCFF]/40 hover:scale-105 transition-all duration-500">
        <div className="w-24 h-24 bg-gradient-to-r from-[#66CCFF] via-[#33CCCC] to-[#FFCC00] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl animate-pulse">
          <div className="text-white font-bold text-3xl">✓</div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#66CCFF] to-[#33CCCC] bg-clip-text text-transparent mb-6">
          Welcome to CloutCraft Beta!
        </h2>
        <p className="text-xl text-[#333333]/80 mb-8 font-medium">
          We've added you to our exclusive beta list. You'll be notified when CloutCraft launches.
        </p>
        <div className="bg-gradient-to-r from-[#FFCC00]/20 to-[#FF9933]/20 rounded-2xl p-6 border border-[#FFCC00]/40 shadow-lg">
          <p className="text-[#333333]/70 font-medium">
            Follow us on Twitter for updates and exclusive alpha content
          </p>
        </div>
      </div>
    </div>
  );
} 
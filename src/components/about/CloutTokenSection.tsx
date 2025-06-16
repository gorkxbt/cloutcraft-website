export default function CloutTokenSection() {
  const tokenFeatures = [
    { text: "Earn by creating and improving content", color: "bg-[#FFCC00]", delay: "" },
    { text: "Pay for premium features like auto-posting", color: "bg-[#FF99CC]", delay: "delay-300" },
    { text: "Unlock advanced AI tools and exclusive reports", color: "bg-[#33CCCC]", delay: "delay-600" }
  ];

  return (
    <div className="mb-16">
      <div className="bg-gradient-to-br from-[#FF99CC] via-[#66CCFF] via-[#FFCC00] to-[#33CCCC] rounded-3xl p-10 text-white shadow-2xl hover:scale-105 transition-all duration-500 transform hover:rotate-1">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 animate-pulse">The $CLOUT Token</h2>
            <p className="mb-6 text-white/90 text-lg font-medium leading-relaxed">
              Utility token powering the CloutCraft ecosystem on Solana blockchain.
            </p>
            <div className="space-y-4">
              {tokenFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-white/20 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 border border-white/30"
                >
                  <div className={`w-4 h-4 ${feature.color} rounded-full mr-4 animate-ping ${feature.delay}`}></div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/30 rounded-full p-12 inline-block backdrop-blur-sm shadow-2xl hover:scale-110 hover:rotate-12 transition-all duration-500 border-2 border-white/40">
              <div className="text-6xl font-bold bg-gradient-to-r from-[#FFCC00] via-white to-[#FF99CC] bg-clip-text text-transparent mb-4 animate-pulse">$CLOUT</div>
              <div className="text-white/90 text-lg font-medium">Solana • Fast • Scalable</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
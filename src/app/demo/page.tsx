'use client';

import PageLayout from '@/components/ui/PageLayout';
import GradientText from '@/components/ui/GradientText';
import PhoneMockup from '@/components/demo/PhoneMockup';

export default function Demo() {
  const demoFeatures = [
    {
      icon: "AI",
      title: "Smart Optimization",
      description: "AI analyzes and improves your tweets for maximum crypto Twitter engagement",
      gradient: "from-[#FF99CC]/30 via-white to-[#FFCC00]/20",
      border: "border-[#FF99CC]/50",
      iconGradient: "from-[#FF99CC] via-[#FFCC00] to-[#FF9933]",
      rotation: "rotate-3"
    },
    {
      icon: "TREND",
      title: "Trend Detection",
      description: "Instantly spot emerging narratives and viral opportunities",
      gradient: "from-[#66CCFF]/30 via-white to-[#33CCCC]/20",
      border: "border-[#66CCFF]/50",
      iconGradient: "from-[#66CCFF] via-[#33CCCC] to-[#3366CC]",
      rotation: "-rotate-3"
    },
    {
      icon: "$",
      title: "Earn $CLOUT",
      description: "Get rewarded with $CLOUT tokens for every tweet you optimize",
      gradient: "from-[#FFCC00]/30 via-white to-[#FF9933]/20",
      border: "border-[#FFCC00]/50",
      iconGradient: "from-[#FFCC00] via-[#FF9933] to-[#FF3333]",
      rotation: "rotate-3"
    }
  ];

  return (
    <PageLayout
      backgroundVariant="demo"
      backgroundGradient="from-[#FF99CC]/20 via-[#CCCCFF]/30 to-[#FFCC00]/20"
    >
      <section className="pt-20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#333333] mb-6 leading-tight">
              Try CloutCraft <GradientText variant="primary">AI</GradientText>
            </h1>
            <p className="text-xl text-[#333333]/80 max-w-2xl mx-auto font-medium">
              Experience our AI tweet optimizer in action
            </p>
          </div>
          
          {/* Phone Mockup */}
          <PhoneMockup />

          {/* Key Features */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {demoFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-2 ${feature.border} hover:shadow-2xl hover:scale-110 hover:${feature.rotation} transition-all duration-300`}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.iconGradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                    <div className="text-white font-bold text-2xl">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    <GradientText variant="accent">{feature.title}</GradientText>
                  </h3>
                  <p className="text-[#333333]/70 text-center font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 
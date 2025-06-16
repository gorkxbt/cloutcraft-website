import PageLayout from '@/components/ui/PageLayout';
import GradientText from '@/components/ui/GradientText';
import FeatureCard from '@/components/about/FeatureCard';
import CloutTokenSection from '@/components/about/CloutTokenSection';

export default function About() {
  const features = [
    {
      icon: "AI",
      title: "AI-Powered Optimizer",
      description: "Improve posts for engagement without changing your voice",
      gradientFrom: "from-[#FFCC00]/15",
      gradientTo: "to-[#FF9933]/10",
      borderColor: "border-[#FFCC00]/40",
      rotation: "right" as const
    },
    {
      icon: "TREND",
      title: "Trend-Aware Generator",
      description: "Auto-generate tweets on new tokens and narratives",
      gradientFrom: "from-[#66CCFF]/15",
      gradientTo: "to-[#3366CC]/10",
      borderColor: "border-[#66CCFF]/40",
      rotation: "left" as const
    },
    {
      icon: "X",
      title: "X Integration",
      description: "Auto-posting and account management",
      gradientFrom: "from-[#FF99CC]/15",
      gradientTo: "to-[#FF3333]/10",
      borderColor: "border-[#FF99CC]/40",
      rotation: "right" as const
    },
    {
      icon: "DATA",
      title: "Performance Insights",
      description: "Projected engagement metrics as you draft",
      gradientFrom: "from-[#33CCCC]/15",
      gradientTo: "to-[#66CCFF]/10",
      borderColor: "border-[#33CCCC]/40",
      rotation: "left" as const
    },
    {
      icon: "TEAM",
      title: "Ghostwriter Mode",
      description: "Team collaboration with controlled permissions",
      gradientFrom: "from-[#3366CC]/15",
      gradientTo: "to-[#66CCFF]/10",
      borderColor: "border-[#3366CC]/40",
      rotation: "right" as const
    },
    {
      icon: "$",
      title: "$CLOUT Rewards",
      description: "Earn tokens for creating and optimizing content",
      gradientFrom: "from-[#FF9933]/15",
      gradientTo: "to-[#FFCC00]/10",
      borderColor: "border-[#FF9933]/40",
      rotation: "left" as const
    }
  ];

  const highlightFeatures = [
    { text: "AI helps craft viral tweets and threads", colors: "from-[#FFCC00]/20 to-[#FF9933]/20", borderColor: "border-[#FFCC00]/40", iconColor: "from-[#FFCC00] to-[#FF9933]", delay: "" },
    { text: "Detects new trends and narratives", colors: "from-[#66CCFF]/20 to-[#3366CC]/20", borderColor: "border-[#66CCFF]/40", iconColor: "from-[#66CCFF] to-[#3366CC]", delay: "delay-300" },
    { text: "Earn $CLOUT for every optimized post", colors: "from-[#FF99CC]/20 to-[#FF3333]/20", borderColor: "border-[#FF99CC]/40", iconColor: "from-[#FF99CC] to-[#FF3333]", delay: "delay-600" }
  ];

  return (
    <PageLayout
      backgroundVariant="about"
      backgroundGradient="from-[#FFCC00]/20 via-[#FF99CC]/10 to-[#66CCFF]/20"
    >
      <section className="pt-20 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#333333] mb-6 leading-tight">
              About <GradientText variant="primary">CloutCraft</GradientText>
            </h1>
            <p className="text-xl text-[#333333]/80 max-w-3xl mx-auto font-medium leading-relaxed">
              The first AI platform for crypto influence. Own the narrative on X and earn $CLOUT
            </p>
          </div>

          {/* What is CloutCraft */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#FF99CC]/20 via-[#FFCC00]/15 to-[#66CCFF]/20 rounded-3xl p-10 shadow-2xl border-2 border-[#FF99CC]/30 backdrop-blur-sm hover:scale-105 transition-all duration-500">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <GradientText variant="accent" animate={true}>What is CloutCraft?</GradientText>
              </h2>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <p className="text-[#333333]/80 text-lg font-medium leading-relaxed">
                    CloutCraft is the first AI platform built for creators, KOLs, ghostwriters, and crypto projects who want to own the narrative on X.
                  </p>
                  <p className="text-[#333333]/80 text-lg font-medium leading-relaxed">
                    Every post you improve or generate with CloutCraft AI earns you <GradientText variant="primary" className="font-bold text-xl">$CLOUT</GradientText> tokens.
                  </p>
                </div>
                <div className="space-y-4">
                  {highlightFeatures.map((feature, index) => (
                    <div key={index} className={`flex items-center p-4 bg-gradient-to-r ${feature.colors} rounded-2xl shadow-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 border ${feature.borderColor}`}>
                      <div className={`w-6 h-6 bg-gradient-to-r ${feature.iconColor} rounded-full mr-4 animate-pulse ${feature.delay}`}></div>
                      <span className="text-[#333333]/80 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              <GradientText variant="brand" animate={true}>Core Features</GradientText>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradientFrom={feature.gradientFrom}
                  gradientTo={feature.gradientTo}
                  borderColor={feature.borderColor}
                  rotation={feature.rotation}
                />
              ))}
            </div>
          </div>

          {/* $CLOUT Token */}
          <CloutTokenSection />

          {/* Mission */}
          <div className="text-center bg-gradient-to-r from-[#FF99CC]/30 via-[#FFCC00]/25 via-[#66CCFF]/30 to-[#33CCCC]/25 rounded-3xl p-12 shadow-2xl border-2 border-[#FF99CC]/30 backdrop-blur-sm hover:scale-105 hover:rotate-1 transition-all duration-500">
            <h2 className="text-3xl font-bold mb-6">
              <GradientText variant="accent" animate={true}>Our Mission</GradientText>
            </h2>
            <p className="text-xl text-[#333333]/80 max-w-4xl mx-auto font-medium leading-relaxed mb-6">
              We built CloutCraft to give creators, KOLs, and projects the tools to control attention at scale — and to be rewarded for their influence.
            </p>
            <p className="text-2xl font-bold">
              <GradientText variant="brand" animate={true}>
                The future of influence is earned, crafted, and powered by AI.
              </GradientText>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 
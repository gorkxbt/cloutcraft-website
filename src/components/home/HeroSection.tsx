import GradientText from '@/components/ui/GradientText';
import AnimatedButton from '@/components/ui/AnimatedButton';

export default function HeroSection() {
  return (
    <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Title layout */}
          <div className="mb-12 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight">
              <GradientText variant="primary" className="block mb-4">
                Own the narrative on X.
              </GradientText>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#333333] leading-relaxed max-w-4xl mx-auto">
              <GradientText variant="secondary">
                Generate high-impact tweets, detect trends early, and earn $CLOUT for every post you craft.
              </GradientText>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <AnimatedButton 
              href="/early-access"
              variant="primary"
              size="md"
              rotation="right"
            >
              Join Beta Access
            </AnimatedButton>
            <AnimatedButton 
              href="/demo"
              variant="secondary"
              size="md"
              rotation="left"
            >
              Try Demo
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
} 
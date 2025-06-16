'use client';

import { useState } from 'react';
import PageLayout from '@/components/ui/PageLayout';
import GradientText from '@/components/ui/GradientText';
import EarlyAccessForm from '@/components/early-access/EarlyAccessForm';
import SuccessMessage from '@/components/early-access/SuccessMessage';

interface FormData {
  email: string;
  solanaAddress: string;
  xProfile: string;
}

export default function EarlyAccess() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', data);
    setIsSubmitted(true);
  };

  const betaBenefits = [
    {
      title: "Early Access",
      description: "Be the first to use CloutCraft AI before public launch",
      gradient: "from-[#FF99CC]/20 via-white to-[#FFCC00]/15",
      border: "border-[#FF99CC]/40",
      textGradient: "from-[#FF99CC] to-[#FF3333]",
      rotation: "rotate-3"
    },
    {
      title: "Free $CLOUT",
      description: "Receive bonus $CLOUT tokens when the platform launches",
      gradient: "from-[#66CCFF]/20 via-white to-[#33CCCC]/15",
      border: "border-[#66CCFF]/40",
      textGradient: "from-[#66CCFF] to-[#3366CC]",
      rotation: "-rotate-3"
    },
    {
      title: "VIP Features",
      description: "Priority access to new features and premium tools",
      gradient: "from-[#FFCC00]/20 via-white to-[#FF9933]/15",
      border: "border-[#FFCC00]/40",
      textGradient: "from-[#FFCC00] to-[#FF9933]",
      rotation: "rotate-3"
    }
  ];

  return (
    <PageLayout
      backgroundVariant="early-access"
      backgroundGradient="from-[#66CCFF]/20 via-[#FF99CC]/15 to-[#FFCC00]/20"
    >
      <section className="pt-20 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#333333] mb-6 leading-tight">
              Get Early Access to <GradientText variant="primary">CloutCraft</GradientText>
            </h1>
            <p className="text-xl text-[#333333]/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
              Be among the first to experience AI-powered crypto influence tools and start earning $CLOUT tokens
            </p>
          </div>

          {!isSubmitted ? (
            <EarlyAccessForm onSubmit={handleFormSubmit} />
          ) : (
            <SuccessMessage />
          )}

          {/* Enhanced Beta Benefits */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              <GradientText variant="brand" animate={true}>Beta Benefits</GradientText>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {betaBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`text-center p-8 bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm rounded-3xl shadow-2xl border-2 ${benefit.border} hover:shadow-2xl hover:scale-110 hover:${benefit.rotation} transition-all duration-300`}
                >
                  <h3 className="text-xl font-bold mb-4">
                    <GradientText variant="accent">{benefit.title}</GradientText>
                  </h3>
                  <p className="text-[#333333]/70 font-medium leading-relaxed">
                    {benefit.description}
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
interface GradientBackgroundProps {
  variant?: 'home' | 'about' | 'demo' | 'early-access';
}

export default function GradientBackground({ variant = 'home' }: GradientBackgroundProps) {
  const backgroundVariants = {
    home: (
      <>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-[#FF99CC]/20 to-[#FFCC00]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-[#66CCFF]/20 to-[#33CCCC]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-[#FF3333]/15 to-[#FF9933]/15 rounded-full blur-2xl"></div>
      </>
    ),
    about: (
      <>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-[#FF3333]/20 to-[#FF99CC]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-[#FFCC00]/20 to-[#33CCCC]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-[#66CCFF]/15 to-[#3366CC]/15 rounded-full blur-2xl"></div>
      </>
    ),
    demo: (
      <>
        <div className="absolute top-5 left-5 w-72 h-72 bg-gradient-to-r from-[#FF3333]/25 to-[#FFCC00]/25 rounded-full blur-2xl"></div>
        <div className="absolute bottom-5 right-5 w-96 h-96 bg-gradient-to-r from-[#66CCFF]/25 to-[#FF99CC]/25 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-[#33CCCC]/20 to-[#3366CC]/20 rounded-full blur-xl"></div>
      </>
    ),
    'early-access': (
      <>
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-[#FF99CC]/30 to-[#FFCC00]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-[#66CCFF]/30 to-[#33CCCC]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#FF3333]/20 to-[#FF9933]/20 rounded-full blur-2xl"></div>
      </>
    )
  };

  return (
    <>
      {backgroundVariants[variant]}
    </>
  );
} 
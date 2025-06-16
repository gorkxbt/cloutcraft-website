interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'brand';
  className?: string;
  animate?: boolean;
}

export default function GradientText({ 
  children, 
  variant = 'primary', 
  className = '', 
  animate = false 
}: GradientTextProps) {
  const gradientVariants = {
    primary: 'from-[#FF99CC] via-[#66CCFF] to-[#FFCC00]',
    secondary: 'from-[#3366CC] via-[#33CCCC] to-[#66CCFF]',
    accent: 'from-[#FF3333] via-[#FF99CC] to-[#FFCC00]',
    brand: 'from-[#FF99CC] via-[#FFCC00] via-[#66CCFF] to-[#33CCCC]'
  };

  const animationClass = animate ? 'animate-pulse' : '';

  return (
    <span 
      className={`bg-gradient-to-r ${gradientVariants[variant]} bg-clip-text text-transparent ${animationClass} ${className}`}
    >
      {children}
    </span>
  );
} 
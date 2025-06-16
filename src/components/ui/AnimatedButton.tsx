import Link from 'next/link';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  rotation?: 'left' | 'right' | 'none';
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  fullWidth = false,
  rotation = 'right'
}: AnimatedButtonProps) {
  const baseClasses = 'font-bold hover:shadow-2xl hover:scale-110 transition-all duration-300 shadow-xl transform';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#FF99CC] via-[#FFCC00] to-[#FF9933] text-[#333333]',
    secondary: 'bg-gradient-to-r from-[#66CCFF] via-[#33CCCC] to-[#3366CC] text-white',
    accent: 'bg-gradient-to-r from-[#FF99CC] via-[#FFCC00] via-[#FF3333] to-[#FF9933] text-white'
  };

  const sizeClasses = {
    sm: 'px-6 py-3 rounded-2xl text-sm',
    md: 'px-12 py-6 rounded-3xl text-lg',
    lg: 'px-16 py-8 rounded-3xl text-xl'
  };

  const rotationClasses = {
    left: 'hover:-rotate-1',
    right: 'hover:rotate-1',
    none: ''
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${rotationClasses[rotation]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
} 
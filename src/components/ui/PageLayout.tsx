import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GradientBackground from './GradientBackground';

interface PageLayoutProps {
  children: React.ReactNode;
  backgroundVariant?: 'home' | 'about' | 'demo' | 'early-access';
  backgroundGradient?: string;
  className?: string;
  withSplineBackground?: boolean;
  splineComponent?: React.ReactNode;
}

export default function PageLayout({
  children,
  backgroundVariant = 'home',
  backgroundGradient = 'from-[#CCCCFF] via-white to-[#FFCC00]/30',
  className = '',
  withSplineBackground = false,
  splineComponent
}: PageLayoutProps) {
  if (withSplineBackground && splineComponent) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} text-[#333333] relative ${className}`}>
        {/* Spline Animation Background */}
        <div className="fixed inset-0 z-0">
          {splineComponent}
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 pointer-events-none">
          <div className="pointer-events-auto">
            <Header />
          </div>

          <main className="pointer-events-auto">
            {children}
          </main>

          <div className="pointer-events-auto">
            <Footer />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} text-[#333333] ${className}`}>
      <Header />
      
      <main className="relative overflow-hidden">
        <GradientBackground variant={backgroundVariant} />
        <div className="relative z-10">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 
'use client';

import Spline from '@splinetool/react-spline';
import PageLayout from '@/components/ui/PageLayout';
import HeroSection from '@/components/home/HeroSection';

export default function Home() {
  const splineComponent = (
    <Spline
      scene="https://prod.spline.design/UMw3Uo9dZWed4eWu/scene.splinecode"
      style={{ width: '100%', height: '100%' }}
    />
  );

  return (
    <PageLayout
      backgroundVariant="home"
      backgroundGradient="from-[#CCCCFF] via-white to-[#FFCC00]/30"
      withSplineBackground={true}
      splineComponent={splineComponent}
    >
      <HeroSection />
    </PageLayout>
  );
}

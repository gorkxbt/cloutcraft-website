import GradientText from '@/components/ui/GradientText';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  rotation?: 'left' | 'right' | 'none';
}

export default function FeatureCard({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo,
  borderColor,
  rotation = 'right'
}: FeatureCardProps) {
  const rotationClass = {
    left: 'hover:-rotate-2',
    right: 'hover:rotate-2',
    none: ''
  }[rotation];

  return (
    <div className={`p-6 border-2 ${borderColor} rounded-3xl bg-gradient-to-br ${gradientFrom} ${gradientTo} hover:shadow-2xl hover:scale-110 ${rotationClass} transition-all duration-300 shadow-xl`}>
      <div className={`w-16 h-16 bg-gradient-to-r ${gradientFrom.replace('/15', '').replace('/10', '')} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
        <div className="text-white font-bold text-lg">{icon}</div>
      </div>
      <h3 className="font-bold mb-2 text-lg">
        <GradientText variant="accent">{title}</GradientText>
      </h3>
      <p className="text-[#333333]/70 font-medium">{description}</p>
    </div>
  );
} 
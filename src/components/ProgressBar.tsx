import { View } from 'react-native';

interface ProgressBarProps {
  progress?: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <View className="h-3 rounded-xl bg-violet-600" style={progressStyle} />
    </View>
  );
}

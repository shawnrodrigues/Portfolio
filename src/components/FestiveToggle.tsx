import { Sparkles, TreePine, X, PartyPopper, Ghost, Star } from 'lucide-react';
import { useFestive } from '../contexts/FestiveContext';

export default function FestiveIndicator() {
  const { festiveTheme, triggerFireworks } = useFestive();

  const festiveOptions = [
    {
      id: 'off' as const,
      name: 'Off',
      icon: X,
      color: 'text-slate-400',
      bgColor: 'bg-slate-500/10',
    },
    {
      id: 'diwali' as const,
      name: 'Diwali',
      icon: Sparkles,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      emoji: '🪔'
    },
    {
      id: 'christmas' as const,
      name: 'Christmas',
      icon: TreePine,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      emoji: '🎄'
    },
    {
      id: 'birthday' as const,
      name: 'Birthday',
      icon: PartyPopper,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      emoji: '🎂'
    },
    // Major Celebrations
    {
      id: 'newyear' as const,
      name: 'New Year',
      icon: Star,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      emoji: '🎆'
    },
    {
      id: 'halloween' as const,
      name: 'Halloween',
      icon: Ghost,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      emoji: '🎃'
    },
    // Indian Festivals
    {
      id: 'holi' as const,
      name: 'Holi',
      icon: Sparkles,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
      emoji: '🎨'
    },

  ];

  const currentOption = festiveOptions.find(opt => opt.id === festiveTheme);
  const CurrentIcon = currentOption?.icon || X;

  // Don't show indicator if theme is 'off'
  if (festiveTheme === 'off') return null;

  return (
    <button
      onDoubleClick={triggerFireworks}
      className={`flex items-center gap-2 p-2 rounded-lg transition-all ${currentOption?.color} ${currentOption?.bgColor} hover:${currentOption?.bgColor.replace('bg-', 'bg-').replace('/10', '/20')}`}
      title={`${currentOption?.name} season active (Double-click for instant show!)`}
    >
      <CurrentIcon 
        size={18} 
        className="animate-pulse" 
      />
      <span className="text-sm font-medium">{currentOption?.name}</span>
      {currentOption?.emoji && (
        <span className="text-xs">{currentOption.emoji}</span>
      )}
    </button>
  );
}
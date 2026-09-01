const fs = require('fs');

const iconsList = [
  'Award', 'Baby', 'BadgeCheck', 'Briefcase', 'Building', 'Building2', 'CalendarClock',
  'Circle', 'Clock', 'Construction', 'DoorOpen', 'Dumbbell', 'Facebook', 'Flower2',
  'Footprints', 'Gamepad2', 'GraduationCap', 'HeartHandshake', 'Home', 'Instagram',
  'KeyRound', 'Landmark', 'Layers', 'LineChart', 'Linkedin', 'Map', 'Mic2', 'Network',
  'PartyPopper', 'Plane', 'Road', 'Route', 'Ruler', 'ShieldCheck', 'ShoppingBag',
  'Sparkles', 'Stethoscope', 'Tag', 'TrainFront', 'Trees', 'TrendingUp', 'Users',
  'Waves', 'Youtube', 'Zap'
];

let content = `
import { 
  ${iconsList.join(',\n  ')}
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  ${iconsList.map(i => `${i}`).join(',\n  ')}
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
`;

fs.writeFileSync('src/lib/icons.ts', content);

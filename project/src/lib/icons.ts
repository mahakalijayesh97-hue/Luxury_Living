// @ts-nocheck
import Award from 'lucide-react/dist/esm/icons/award';
import Baby from 'lucide-react/dist/esm/icons/baby';
import BadgeCheck from 'lucide-react/dist/esm/icons/badge-check';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import Building from 'lucide-react/dist/esm/icons/building';
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import CalendarClock from 'lucide-react/dist/esm/icons/calendar-clock';
import Circle from 'lucide-react/dist/esm/icons/circle';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Construction from 'lucide-react/dist/esm/icons/construction';
import DoorOpen from 'lucide-react/dist/esm/icons/door-open';
import Dumbbell from 'lucide-react/dist/esm/icons/dumbbell';
import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Flower2 from 'lucide-react/dist/esm/icons/flower-2';
import Footprints from 'lucide-react/dist/esm/icons/footprints';
import Gamepad2 from 'lucide-react/dist/esm/icons/gamepad-2';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';
import HeartHandshake from 'lucide-react/dist/esm/icons/heart-handshake';
import Home from 'lucide-react/dist/esm/icons/home';
import Instagram from 'lucide-react/dist/esm/icons/instagram';
import KeyRound from 'lucide-react/dist/esm/icons/key-round';
import Landmark from 'lucide-react/dist/esm/icons/landmark';
import Layers from 'lucide-react/dist/esm/icons/layers';
import LineChart from 'lucide-react/dist/esm/icons/line-chart';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Map from 'lucide-react/dist/esm/icons/map';
import Mic2 from 'lucide-react/dist/esm/icons/mic-2';
import Network from 'lucide-react/dist/esm/icons/network';
import PartyPopper from 'lucide-react/dist/esm/icons/party-popper';
import Plane from 'lucide-react/dist/esm/icons/plane';
import Route from 'lucide-react/dist/esm/icons/route';
import Ruler from 'lucide-react/dist/esm/icons/ruler';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import ShoppingBag from 'lucide-react/dist/esm/icons/shopping-bag';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Stethoscope from 'lucide-react/dist/esm/icons/stethoscope';
import Tag from 'lucide-react/dist/esm/icons/tag';
import TrainFront from 'lucide-react/dist/esm/icons/train-front';
import Trees from 'lucide-react/dist/esm/icons/trees';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import Users from 'lucide-react/dist/esm/icons/users';
import Waves from 'lucide-react/dist/esm/icons/waves';
import Youtube from 'lucide-react/dist/esm/icons/youtube';
import Zap from 'lucide-react/dist/esm/icons/zap';

import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Award,
  Baby,
  BadgeCheck,
  Briefcase,
  Building,
  Building2,
  CalendarClock,
  Circle,
  Clock,
  Construction,
  DoorOpen,
  Dumbbell,
  Facebook,
  Flower2,
  Footprints,
  Gamepad2,
  GraduationCap,
  HeartHandshake,
  Home,
  Instagram,
  KeyRound,
  Landmark,
  Layers,
  LineChart,
  Linkedin,
  Map,
  Mic2,
  Network,
  PartyPopper,
  Plane,
  Route,
  Ruler,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Tag,
  TrainFront,
  Trees,
  TrendingUp,
  Users,
  Waves,
  Youtube,
  Zap
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}

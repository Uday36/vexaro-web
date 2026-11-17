import React from 'react';
import {
  Truck,
  Zap,
  Clock,
  Building2,
  Warehouse,
  ShoppingCart,
  Package,
  RotateCcw,
  ShieldCheck,
  MapPin,
  Headphones,
  Radio,
  Globe,
  Cpu,
  Search,
  Navigation,
  CheckCircle2,
  Users,
  Briefcase,
  ShoppingBag,
  ArrowRight,
  Check,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';

function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

const iconMap = {
  truck: Truck,
  FaTruck: Truck,
  zap: Zap,
  FaBolt: Zap,
  clock: Clock,
  FaClock: Clock,
  building: Building2,
  FaIndustry: Building2,
  warehouse: Warehouse,
  FaWarehouse: Warehouse,
  shoppingCart: ShoppingCart,
  FaShoppingCart: ShoppingCart,
  boxes: Package,
  FaBoxes: Package,
  undo: RotateCcw,
  FaUndo: RotateCcw,
  shield: ShieldCheck,
  mapPin: MapPin,
  headphones: Headphones,
  radar: Radio,
  globe: Globe,
  cpu: Cpu,
  search: Search,
  navigation: Navigation,
  checkCircle: CheckCircle2,
  users: Users,
  briefcase: Briefcase,
  shoppingBag: ShoppingBag,
  arrowRight: ArrowRight,
  check: Check,
  mail: Mail,
  phone: Phone,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  externalLink: ExternalLink
};

export default function IconHelper({ name, size = 20, className = '' }) {
  const IconComponent = iconMap[name] || Truck;
  return <IconComponent size={size} className={className} />;
}

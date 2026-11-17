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

export function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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
  whatsapp: WhatsAppIcon,
  externalLink: ExternalLink
};

export default function IconHelper({ name, size = 20, className = '' }) {
  const IconComponent = iconMap[name] || Truck;
  return <IconComponent size={size} className={className} />;
}

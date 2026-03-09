import { Service, NavItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'premium-apps',
    title: 'Premium Apps',
    description: 'YouTube Premium, Spotify Family/Individual, Netflix, and more at competitive prices.',
    icon: 'AppWindow',
    category: 'Entertainment'
  },
  {
    id: 'digitalocean',
    title: 'DigitalOcean Accounts',
    description: 'Fully verified DigitalOcean accounts with credits ready for your projects.',
    icon: 'Cloud',
    category: 'Cloud'
  },
  {
    id: 'aws',
    title: 'AWS Accounts',
    description: 'Amazon Web Services accounts with various credit limits and verification levels.',
    icon: 'Server',
    category: 'Cloud'
  },
  {
    id: 'vps-rdp',
    title: 'VPS / RDP',
    description: 'High-performance Virtual Private Servers and Remote Desktop Protocol access.',
    icon: 'Terminal',
    category: 'Infrastructure'
  },
  {
    id: 'vcc',
    title: 'VCC (Virtual Credit Card)',
    description: 'Virtual credit cards for online verification and international payments.',
    icon: 'CreditCard',
    category: 'Payment'
  },
  {
    id: 'other',
    title: 'Other Digital Products',
    description: 'Domain names, game top-ups, and various other digital assets.',
    icon: 'Package',
    category: 'Miscellaneous'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export interface NavItem {
  label: string;
  href: string;
}

export interface UseCase {
  id: number;
  category: string;
  title: string;
  image: string;
  tags: string[];
  isDark?: boolean;
}

export interface ClientLogo {
  id: number;
  name: string;
  logoUrl: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  badges: string[];
}

export interface SocialPost {
  id: number;
  platform: 'instagram' | 'youtube' | 'facebook';
  image: string;
  description: string;
  user: string;
}
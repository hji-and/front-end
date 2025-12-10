import { NavItem, UseCase, ClientLogo, Product, SocialPost } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '제품 & 솔루션', href: '#' },
  { label: '교육 & 서비스', href: '#' },
  { label: '투자정보', href: '#' },
  { label: '회사소개', href: '#' },
];

export const USE_CASES: UseCase[] = [
  {
    id: 1,
    category: 'Palletising Solution',
    title: 'Case Study',
    image: 'https://picsum.photos/id/1/600/400',
    tags: ['제조', '팔레타이징'],
    isDark: true
  },
  {
    id: 2,
    category: 'Cobot Solution',
    title: '레이저 로봇 용접',
    image: 'https://picsum.photos/id/20/600/400',
    tags: ['제조', '레이저 용접']
  },
  {
    id: 3,
    category: 'Cobot Solution',
    title: 'Sanding (샌딩)',
    image: 'https://picsum.photos/id/3/600/400',
    tags: ['제조', '샌딩']
  },
  {
    id: 4,
    category: 'Cobot Solution',
    title: '공작기계 보조 작업',
    image: 'https://picsum.photos/id/119/600/400',
    tags: ['제조', '머신텐딩'],
    isDark: true
  },
  {
    id: 5,
    category: 'Food Tech',
    title: 'DR.PRESSO Jeju Food & Wine Festival',
    image: 'https://picsum.photos/id/225/600/400',
    tags: ['서비스', 'Dr.Presso'],
    isDark: false
  },
  {
    id: 6,
    category: 'Food Tech',
    title: '학교 단체급식 튀김로봇 솔루션',
    image: 'https://picsum.photos/id/431/600/400',
    tags: ['서비스', '튀김']
  },
  {
    id: 7,
    category: 'Test met bagagerobot',
    title: '공항 수하물 핸들링',
    image: 'https://picsum.photos/id/364/600/400',
    tags: ['서비스', '공항 수하물 핸들링']
  },
  {
    id: 8,
    category: 'EV Charging Robot',
    title: '전기차 충전',
    image: 'https://picsum.photos/id/180/600/400',
    tags: ['서비스', '전기차 충전']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'P-SERIES',
    name: 'P-SERIES',
    description: '최대 성능, 최대 효율성, 최대 안전을 갖춘 팔레타이징 특화 로봇',
    image: 'https://picsum.photos/id/250/300/300',
    badges: ['P3020']
  },
  {
    id: 'H-SERIES',
    name: 'H-SERIES',
    description: '우수한 힘과 최고의 안정성을 겸비한 H시리즈!',
    image: 'https://picsum.photos/id/251/300/300',
    badges: ['H2515', 'H2017']
  },
  {
    id: 'M-SERIES',
    name: 'M-SERIES',
    description: '최고사양을 고집한 프리미엄 협동로봇, M시리즈',
    image: 'https://picsum.photos/id/252/300/300',
    badges: ['M1509', 'M1013', 'M0617', 'M0609']
  },
  {
    id: 'A-SERIES',
    name: 'A-SERIES',
    description: '협동로봇이 필요한 곳, 어디서나 도입이 용이한 A시리즈!',
    image: 'https://picsum.photos/id/253/300/300',
    badges: ['A0912S', 'A0912F', 'A0912', 'A0509S', 'A0509F']
  }
];

export const CLIENT_LOGOS = [
  'SAMSUNG C&T', 'LG Electronics', 'LANCOME', 'DIOR', 'dyson', 'Continental', 'MAHLE', 'HYUNDAI', 'TOYOTA'
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 1,
    platform: 'facebook',
    image: 'https://picsum.photos/id/10/300/300',
    description: 'Doosan Robotics Innovation...',
    user: 'doosanrobotics'
  },
  {
    id: 2,
    platform: 'instagram',
    image: 'https://picsum.photos/id/11/300/300',
    description: 'New generation of cobots',
    user: 'doosan.robot'
  },
  {
    id: 3,
    platform: 'youtube',
    image: 'https://picsum.photos/id/12/300/300',
    description: 'Watch our latest demo',
    user: 'DoosanRobotics'
  },
  {
    id: 4,
    platform: 'facebook',
    image: 'https://picsum.photos/id/13/300/300',
    description: 'Partnership announcement',
    user: 'doosanrobotics'
  },
   {
    id: 5,
    platform: 'instagram',
    image: 'https://picsum.photos/id/14/300/300',
    description: 'Behind the scenes',
    user: 'doosan.robot'
  }
];

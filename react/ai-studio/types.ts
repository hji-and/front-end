import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  bgColor?: 'white' | 'gray';
  children: React.ReactNode;
}
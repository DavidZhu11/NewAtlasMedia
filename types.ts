import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  step: number;
}

export interface PricingDetailProps {
  label: string;
  value: string;
  subtext?: string;
  highlight?: boolean;
}
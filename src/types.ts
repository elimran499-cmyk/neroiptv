export type ScreenOption = 1 | 2;

export interface PricingPlan {
  id: string;
  name: string;
  /** Price per number of simultaneous screens */
  price: Record<ScreenOption, number>;
  billingText: string;
  popular?: boolean;
  badge?: string;
  features: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SupportedDevice {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

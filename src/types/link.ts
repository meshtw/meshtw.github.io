import type { snsIcons } from '@assets/iconSet';

export type SnsLinkObjects = {
  name: keyof typeof snsIcons;
  href: string;
  label: string;
}[];

export type LinkObject = {
  title: string;
  label?: string;
  description?: string;
  href: string;
  icon?: string;
  external?: boolean;
};

export type LinkObjects = LinkObject[];

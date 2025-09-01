import type { SnsLinkObjects } from './types/link';

export const SITE = {
  website: 'https://meshtw.github.io',
  title: '臺灣鏈網 Meshtastic Taiwan Community',
  titleZh: '臺灣鏈網',
  titleEn: 'Meshtastic Taiwan Community',
  description:
    '臺灣鏈網是致力推廣 Meshtastic 開源網狀通訊網路系統的在地社群，歡迎加入我們的行列！',
  author: '臺灣鏈網 Meshtastic Taiwan Community',
  ogImage: '/assets/fb-group-cover.jpg',
};

export const SNS_URLS = {
  facebook: 'https://fb.com/groups/meshtastictw',
  discord: 'https://discord.gg/2vZkuckp8E',
  telegram: 'https://t.me/MeshTW_MQTT',
  github: 'https://github.com/meshtw',
};

export const SNS_LINKS: SnsLinkObjects = [
  {
    name: 'facebook',
    label: `${SITE.title} on Facebook`,
    href: SNS_URLS.facebook,
  },
  {
    name: 'telegram',
    label: `${SITE.title} on Telegram`,
    href: SNS_URLS.telegram,
  },
  {
    name: 'discord',
    label: `${SITE.title} on Discord`,
    href: SNS_URLS.discord,
  },
  {
    name: 'github',
    label: `${SITE.title} on GitHub`,
    href: SNS_URLS.github,
  },
];

export const LEARN_MORE = {
  title: '了解更多',
  description: '了解更多關於',
};

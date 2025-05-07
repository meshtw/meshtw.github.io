import type { LinkObject, LinkObjects } from '@src/types/link';
import { LEARN_MORE } from '@src/constant';

export const overview: LinkObject = {
  title: '什麼是 Meshtastic?',
  href: '/what-is-meshtastic',
  description:
    'Meshtastic 是一個開源的無線通訊系統，讓你在沒有網路的情況下也能保持聯繫，基於 LoRa 無線技術，適合戶外活動、災難救援等場景。',
};

export const article: LinkObject = {
  title: '社群文章',
  href: '/articles',
  description: '社群朋友的文章',
};

export const faq: LinkObject = {
  title: '常見問題 FAQ',
  href: '/faq',
  description:
    '你心目中是不是一個驚嘆號？還是一個句號？你腦袋裏是不是充滿了問號呢？',
};

export const download: LinkObject = {
  title: '下載 Meshtastic',
  href: 'https://meshtastic.org/downloads/',
  description: '前往 Meshtastic 官方網站進行下載',
  external: true,
};

export const about: LinkObject = {
  title: '關於我們',
  href: '/about',
  description: '臺灣鏈網是誰？臺灣鏈網在哪？Meshtastic 是在做什麼？',
};

export const gettingStarted: LinkObject = {
  title: '快速入門',
  href: '/quick-start',
  description: '天線不夠長嗎？零基礎快速上手指南，插了天線就變拐拐了...',
};

export const guide: LinkObject = {
  title: '使用手冊',
  href: '/guide',
  description: '社群朋友提出一個方案大家來研究，也不算研究，算是幫大家的忙...',
};

export const joinUs: LinkObject = {
  title: '加入我們',
  href: '/join-us',
  description:
    '臭蟲呼叫老鷹，臭蟲呼叫老鷹，呃...我們在...呃...台二公路、陽金路段...',
};

export const meshtasticSitePlanner: LinkObject = {
  title: 'Meshtastic 節點規劃工具',
  href: 'https://site.meshtastic.org/',
  description: 'Meshtastic 節點規劃工具，幫助你規劃 Meshtastic 節點的佈局',
  external: true,
};

export const bashcatMqtt: LinkObject = {
  title: 'Bashcat MQTT Server',
  href: 'https://n8n.bashcat.net/webhook/bashcat_mqtt/',
  description:
    '由臺灣社群朋友 Oliver0804 維護的第三方 MQTT 伺服器，提供替代的 MQTT 服務',
  external: true,
};

export const liamMeshMap: LinkObject = {
  title: 'Meshtastic Map by Liam Cottle',
  href: 'https://meshtastic.liamcottle.net/',
  description:
    '由英國社群朋友 Liam Cottle 維護第三方Meshtastic 地圖，提供 Meshtastic 節點的地圖服務',
  external: true,
};

export const meshMap: LinkObject = {
  title: 'Meshtastic 官方 MQTT broker 暨地圖',
  href: 'https://meshmap.net/',
  description: 'Meshtastic 官方地圖，提供 Meshtastic 節點的地圖服務',
  external: true,
};

export const learnMoreLink = ({
  title = LEARN_MORE.title,
  href,
  external = false,
  icon,
  label,
}: LinkObject) => ({
  title: LEARN_MORE.title,
  description: `${LEARN_MORE.description}${title}`,
  href,
  ...(icon && { icon }),
  ...(label && { label }),
  ...(external && { external }),
});

export const findLinkByPath = (pathname: string) => {
  const allEntries = [
    overview,
    gettingStarted,
    guide,
    faq,
    about,
    download,
    joinUs,
    article,
  ];
  // find the only one
  const matchedLink = allEntries.find((link) => {
    const { href } = link;
    return (
      href === pathname ||
      pathname[href.length] === '/' ||
      pathname.length === href.length ||
      pathname.replace('/guide', '') === href
    );
  });
  return matchedLink || undefined;
};

export const headerLinks: LinkObjects = [overview, about, guide, faq];

export const notFoundDirectory: LinkObjects = [
  gettingStarted,
  guide,
  faq,
  joinUs,
];

export const footerLinksGroup: { title: string; links: LinkObjects }[] = [
  {
    title: '關於我們',
    links: [about, overview, joinUs, gettingStarted],
  },
  {
    title: '實用資源',
    links: [
      overview,
      download,
      meshtasticSitePlanner,
      meshMap,
      bashcatMqtt,
      liamMeshMap,
    ],
  },
  {
    title: '使用手冊',
    links: [guide, gettingStarted, faq],
  },
];

import { N9010B_DATA } from './models/n9010bData.js';
import { N9020B_DATA } from './models/n9020bData.js';
import { N9021B_DATA } from './models/n9021bData.js';
import { N9030B_DATA } from './models/n9030bData.js';
import { N9032B_DATA } from './models/n9032bData.js';
import { N9040B_DATA } from './models/n9040bData.js';
import { N9042B_DATA } from './models/n9042bData.js';
import { N5186A_DATA } from './models/n5186aData.js';
import { N5182B_DATA } from './models/n5182bData.js';
import { M9415A_DATA } from './models/m9415aData.js';
import { M9415B_DATA } from './models/m9415bData.js';
import { E6680E_DATA } from './models/e6680eData.js';

export const LICENSE_TYPES = {
  NODE_LOCKED: {
    id: "NODE_LOCKED",
    name: "固定许可证 (Node-locked)",
    englishName: "Node-locked License",
    description: "许可证绑定至特定硬件仪表（MAC/Host ID），不可跨机漂移移动。"
  },
  TRANSPORTABLE: {
    id: "TRANSPORTABLE",
    name: "可移动/可漂移许可证 (Transportable)",
    englishName: "Transportable License",
    description: "许可证支持在多台同型号 Keysight 仪表之间灵活解绑、转移与共享。"
  },
  FLOATING: {
    id: "FLOATING",
    name: "浮动网络许可证 (Floating Network)",
    englishName: "Floating Network License",
    description: "通过局域网服务器并发共享控制，按并发套数进行许可授权。"
  },
  USB_PORTABLE: {
    id: "USB_PORTABLE",
    name: "USB 加密狗硬件许可证 (USB Portable)",
    englishName: "USB Portable License",
    description: "通过插入硬件加密狗 (USB Key) 在任意仪表或 PC 上随插即用使用软件。"
  }
};

export const LICENSE_TERMS = {
  PERPETUAL: {
    id: "PERPETUAL",
    name: "永久使用许可证 (Perpetual)",
    englishName: "Perpetual License",
    description: "一次性购买永久拥有使用权，包含 1 年软件更新与技术支持。"
  },
  SUBSCRIPTION_1YR: {
    id: "SUBSCRIPTION_1YR",
    name: "1 年订阅许可证 (1-Year Subscription)",
    englishName: "1-Year Subscription License",
    description: "按年计费的软件订阅使用权，包含订阅期内全部版本升级与 KeysightCare 服务。"
  },
  SUBSCRIPTION_3YR: {
    id: "SUBSCRIPTION_3YR",
    name: "3 年订阅许可证 (3-Year Subscription)",
    englishName: "3-Year Subscription License",
    description: "3 年期软件订阅许可，享有最优惠的年均软件版本服务价格。"
  }
};

export const KEYSIGHT_INSTRUMENTS = [
  N9010B_DATA,
  N9020B_DATA,
  N9021B_DATA,
  N9030B_DATA,
  N9032B_DATA,
  N9040B_DATA,
  N9042B_DATA,
  N5186A_DATA,
  N5182B_DATA,
  M9415A_DATA,
  M9415B_DATA,
  E6680E_DATA
];

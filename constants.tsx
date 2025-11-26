import { Item, ItemQuality, CharacterStats, Skill, WorkExperience, ContactInfo } from './types';
import { 
  Code, 
  Server, 
  Globe, 
  Shield, 
  Footprints, 
  Plane, 
  Terminal,
  CloudLightning,
  LayoutTemplate,
  Database,
  Ticket,
  Headset,
  Cpu
} from 'lucide-react';

export const CHARACTER_STATS: CharacterStats = {
  name: "Mostafa Mohamed",
  class: "Javascript Dev / Travel Consultant",
  level: 137,
  guild: "FullStack",
  spouse: "None",
  hp: 25000,
  mp: 12000,
  pkPoints: 0
};

export const CONTACT_INFO: ContactInfo = {
  location: "Cairo, Egypt",
  email: "mostafa.ahmed00q@gmail.com",
  phone: "(+20) 1154125667",
  linkedin: "www.linkedin.com/in/mostafamohamed-864a951a2"
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: "Javascript Developer",
    company: "Freelance",
    period: "Present",
    description: "Developing scalable web applications using JavaScript, React, and Node.js. Building custom solutions and integrating APIs."
  },
  {
    title: "Travel Consultant",
    company: "Montad Travel (Riyadh)",
    period: "15/06/2025 – 15/08/2025",
    description: "Handled flight/travel reservations, ticket issuance, refunds, and EMD processing. Supported clients via CRM and chat."
  },
  {
    title: "Sales Support Assistant",
    company: "Elkhames Travel (Cairo)",
    period: "10/10/2024 – 01/05/2025",
    description: "Managed reservations (issue, reissue, refund). Designed and sold outbound packages. Resolved customer complaints with high efficiency."
  },
  {
    title: "Reservation Agent",
    company: "SIAD Holding Company Ltd",
    period: "11/09/2023 – 01/10/2024",
    description: "Processed reservations at Movenpick Anwar & Saja Madinah. Managed guest inquiries, room preferences, and system entry."
  },
  {
    title: "Product Specialist",
    company: "Safa Online (Cairo)",
    period: "01/01/2023 – 11/09/2023",
    description: "Conducted research for best hotel rates. Negotiated terms with suppliers and validated travel packages."
  },
  {
    title: "Travel Support Specialist",
    company: "Seera Group Holding",
    period: "08/08/2020 – 09/12/2022",
    description: "Assisted clients at El Mosafer Travel with trip details, ticket re-issuance, and cancellations. Proficient in GDS."
  },
  {
    title: "Back Office Specialist",
    company: "Amazon (Cairo)",
    period: "01/01/2018 – 01/01/2019",
    description: "Managed electronic and physical documents. Tracked data, assisted with inquiries, and prepared reports for management."
  }
];

export const SKILLS: Skill[] = [
  { 
    name: "React Rendering", 
    level: 137, 
    description: "Skill: React Rendering. Attack 5000-9999.", 
    type: "Active",
    icon: LayoutTemplate
  },
  { 
    name: "GDS Mastery", 
    level: 130, 
    description: "Amadeus & Galileo expert. Ticketing speed +50%.", 
    type: "Passive",
    icon: Globe
  },
  { 
    name: "MERN Coding", 
    level: 137, 
    description: "Full-stack development capabilities. Deploys scalable apps.", 
    type: "XP Skill",
    icon: Database
  },
  { 
    name: "Ticketing & Visa", 
    level: 120, 
    description: "Issues tickets and processes visas with zero latency.", 
    type: "Active",
    icon: Ticket
  },
  { 
    name: "Customer Service", 
    level: 110, 
    description: "Resolves conflicts and handles complex queries.", 
    type: "Passive",
    icon: Headset
  }
];

export const EQUIPMENT: Item[] = [
  {
    id: 'weapon',
    name: 'MERN Bow',
    type: 'Weapon',
    quality: ItemQuality.SUPER,
    plus: 12,
    stats: [
      'Attack: 5000–9999',
      'Crit: +7%',
      'Skill: React Rendering'
    ],
    description: 'A legendary bow that shoots asynchronous arrows.',
    sockets: [
      { name: 'MongoDB Gem', effect: 'NoSQL Durability +100%', icon: 'database' },
      { name: 'Node.js Gem', effect: 'Runtime Speed +50%', icon: 'server' }
    ],
    durability: 'Infinite',
    icon: Code,
    color: 'text-orange-400'
  },
  {
    id: 'head',
    name: 'HTML/CSS Head',
    type: 'Head',
    quality: ItemQuality.ELITE,
    plus: 8,
    stats: [
      'Defense: 3000',
      'Layout Stability: +100%',
      'Style: Responsive'
    ],
    durability: 'Infinite',
    icon: Terminal,
    color: 'text-purple-400'
  },
  {
    id: 'armor',
    name: 'Express.js Armor',
    type: 'Armor',
    quality: ItemQuality.SUPER,
    plus: 9,
    stats: [
      'Defense: 8000',
      'Middleware Shield: +100%',
      'Routing: Fast'
    ],
    sockets: [
        { name: 'Auth Gem', effect: 'Security +100%', icon: 'shield' }
    ],
    durability: 'Infinite',
    icon: Server,
    color: 'text-orange-400'
  },
  {
    id: 'boots',
    name: 'GitHub Boots',
    type: 'Boots',
    quality: ItemQuality.UNIQUE,
    plus: 5,
    stats: [
      'Dodge: +40%',
      'Commit Speed: +30%',
      'Version Control: Git'
    ],
    durability: 'Infinite',
    icon: Footprints,
    color: 'text-green-400'
  },
  {
    id: 'acc1',
    name: 'Amadeus',
    type: 'Accessory',
    quality: ItemQuality.SUPER,
    plus: 7,
    stats: [
      'Booking Speed: +50%',
      'Global Inventory: Access'
    ],
    durability: 'Infinite',
    icon: Plane,
    color: 'text-orange-400'
  },
  {
    id: 'acc2',
    name: 'Galileo',
    type: 'Accessory',
    quality: ItemQuality.ELITE,
    plus: 6,
    stats: [
      'Search Speed: +40%',
      'Fare Accuracy: +100%'
    ],
    durability: 'Infinite',
    icon: Globe,
    color: 'text-purple-400'
  },
  {
    id: 'offhand',
    name: 'OTA Icons',
    type: 'OffHand',
    quality: ItemQuality.REFINED,
    plus: 3,
    stats: [
      'Online Presence: +20%',
      'Aggregation: Active'
    ],
    durability: 'Infinite',
    icon: CloudLightning,
    color: 'text-blue-400'
  }
];
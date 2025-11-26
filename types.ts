export enum ItemQuality {
  NORMAL = 'Normal',
  REFINED = 'Refined',
  UNIQUE = 'Unique',
  ELITE = 'Elite',
  SUPER = 'Super'
}

export interface ItemSocket {
  name: string;
  effect: string;
  icon: string;
}

export interface Item {
  id: string;
  name: string;
  type: 'Head' | 'Armor' | 'Weapon' | 'Boots' | 'Accessory' | 'OffHand';
  quality: ItemQuality;
  plus?: number;
  stats: string[];
  description?: string;
  sockets?: ItemSocket[];
  durability: string;
  icon: any; // Lucide icon component
  color: string; // Tailwind text color class
}

export interface Skill {
  name: string;
  level: number;
  description: string;
  type: 'Passive' | 'Active' | 'XP Skill';
  icon?: any; // Lucide icon component
}

export interface CharacterStats {
  name: string;
  class: string;
  level: number;
  guild: string;
  spouse: string;
  hp: number;
  mp: number;
  pkPoints: number;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
  linkedin: string;
}
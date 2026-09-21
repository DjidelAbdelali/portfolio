import {
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Cpu,
  Factory,
  FileCode2,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Phone,
  Radar,
  Settings2,
  Users,
  Waypoints,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Order matches content.about.focus (4 items) in translations.ts
export const focusIcons: LucideIcon[] = [Cpu, Radar, Waypoints, Factory];

export const toolIcons: Record<string, LucideIcon> = {
  matlab: Settings2,
  tia: Factory,
  solidworks: Wrench,
  arduino: Cpu,
  proteus: FileCode2,
  tinkercad: Bot,
  ros2: Bot,
  office: BookOpen,
  overleaf: FileCode2,
  notion: BriefcaseBusiness,
};

export const associationIcons: Record<string, LucideIcon> = {
  microclub: Users,
  celec: Cpu,
};

export const contactIcons: Record<string, LucideIcon> = {
  email: Mail,
  phone: Phone,
  linkedin: BriefcaseBusiness,
  location: MapPin,
  languages: Languages,
  education: GraduationCap,
};

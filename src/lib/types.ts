export type ServiceCategory = 'events' | 'multimedia' | 'digital' | 'venture';

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  summary: string;
  description: string;
  iconName: string;
  capabilities: string[];
  order: number;
  isFeatured: boolean;
  isPublished: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export type ProjectCategory = 'events' | 'multimedia' | 'digital' | 'integrated';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  clientDisplayName: string;
  year: string;
  heroImage: string;
  thumbnail: string;
  mobileImage?: string;
  features?: { title: string; description: string }[];
  services: string[];
  challenge: string;
  approach: string;
  execution: string;
  outcome: string;
  gallery: string[];
  metrics?: ProjectMetric[];
  role?: string;
  verifiedRole?: string;
  isConceptOnly?: boolean;
  mediaPending?: boolean;
  mediaClassification?: string;
  sourceCredit?: string;
  sourceUrl?: string;
  deliverables?: string[];
  rightsStatus?: string;
  githubUrl?: string;
  demoUrl?: string;
  galleryCaptions?: { [key: string]: string };
  isFeatured: boolean;
  isPublished: boolean;
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Insight {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  coverImage: string;
  tags: string[];
  authorDisplayName: string;
  status: 'draft' | 'review' | 'published' | 'archived';
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
}

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'won' | 'lost' | 'spam';

export interface Lead {
  id?: string;
  fullName: string;
  email: string;
  phone?: string;
  companyOrganization?: string;
  serviceType: 'events' | 'multimedia' | 'digital' | 'integrated' | 'other';
  projectBudget?: string;
  projectTimeline?: string;
  message: string;
  consent: boolean;
  consentTextVersion: string;
  sourcePath?: string;
  status?: LeadStatus;
  createdAt?: string;
}

export type AdminRole = 'superadmin' | 'editor' | 'sales' | 'viewer';

export interface AdminUser {
  uid: string;
  email: string;
  displayName: string;
  role: AdminRole;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SiteSettings {
  companyName: string;
  brandName: string;
  tagline: string;
  primaryEmail: string;
  phonePublic: string;
  addressPublic: string;
  nibNumber?: string;
  socialLinks: {
    instagram?: string;
    whatsapp?: string;
    linkedin?: string;
    youtube?: string;
  };
  pseRegistrationNumber: string | null;
  pseRegistered: boolean;
}

export interface AuditLog {
  id: string;
  actorUid: string;
  actorEmail: string;
  action: string;
  targetType: string;
  targetId: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

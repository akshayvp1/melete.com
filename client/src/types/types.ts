// import { ReactNode } from 'react';

// export interface Consultant {
//   name: string;
//   qualification: string;
//   expertise: string[];
//   languages: string[];
//   counseling: string[];
//   image: string;
//   experience?: string; // Optional experience field
// }
// interface Certificate {
//   recipientName: string;
//   certificateTitle: string;
//   issueDate: string;
//   issuer: string;
//   certificateImage?: string;
//   certificateUrl?: string;
// }


// export interface TherapyImprovement {
//   title: string;
//   desc: string;
//   icon: string; // Use string for icon name
//   bgImage: string;
// }

// export interface Book {
//   title: string;
//   desc: string;
//   image: string;
// }

// export interface NavItem {
//   name: string;
//   items?: string[];
//   href?: string;
// }

// export interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// export interface FormErrors {
//   name?: string;
//   email?: string;
//   message?: string;
// }
// export interface Consultant {
//   _id: string; // Use _id to match backend
//   name: string;
//   qualification: string;
//   expertise: string[];
//   languages: string[];
//   counseling: string[]; // Maps to counsellingTypes
//   experience?: string;
//   location: string;
//   image: string; // Maps to imageUrl
//   bio: string;
//   email: string;
//   phone: string;
//   specialization: string;
//   rating: number;
//   sessions: number;
//   isVerified: boolean;
//   isBlocked: boolean;
//   createdAt: string; // Date string from backend
// }

// src/types/types.ts
import { ReactNode } from 'react';

export interface Consultant {
  id: string; // Use `id` instead of `_id` for consistency
  name: string;
  qualification: string;
  expertise: string[];
  languages: string[];
  counsellingTypes: string[]; // Changed from `counseling` to `counsellingTypes`
  experience: number;
  location: string;
  image: string;
  bio: string;
  email: string;
  phone: string;
  specialization: string;
  rating: number;
  sessions: number;
  isBlocked: boolean;
  isVerified?: boolean; // Optional to avoid errors if not provided
  createdAt?: string; // Optional to avoid errors if not provided
}

// Other interfaces remain unchanged
export interface Certificate {
  recipientName: string;
  certificateTitle: string;
  issueDate: string;
  issuer: string;
  certificateImage?: string;
  certificateUrl?: string;
}

export interface TherapyImprovement {
  title: string;
  desc: string;
  icon: string;
  bgImage: string;
}

export interface Book {
  title: string;
  desc: string;
  image: string;
}

export interface NavItem {
  name: string;
  items?: string[];
  href?: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
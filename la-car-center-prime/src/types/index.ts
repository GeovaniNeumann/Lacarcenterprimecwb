export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}
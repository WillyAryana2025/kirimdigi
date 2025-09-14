export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discountPrice: number;
  imageUrl: string;
  demoUrl?: string;
  isWithPhoto: boolean;
  tier: string;
  isNew: boolean;
  createdAt: Date;
}

export interface Category {
  name: string;
  tier: string;
  isWithPhoto: boolean;
  count: number;
}

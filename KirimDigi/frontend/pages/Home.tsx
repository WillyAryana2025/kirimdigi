import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import backend from '~backend/client';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import { useToast } from '@/components/ui/use-toast';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Semua Produk');
  const { toast } = useToast();

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        return await backend.products.categories();
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        toast({
          title: "Error",
          description: "Gagal memuat kategori produk",
          variant: "destructive",
        });
        throw error;
      }
    },
  });

  const { data: productsData, isLoading: productsLoading } = useQuery({
    queryKey: ['products', activeCategory],
    queryFn: async () => {
      try {
        const params: any = {};
        if (activeCategory !== 'Semua Produk') {
          params.category = activeCategory;
        }
        return await backend.products.list(params);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        toast({
          title: "Error",
          description: "Gagal memuat produk",
          variant: "destructive",
        });
        throw error;
      }
    },
  });

  return (
    <div>
      <Hero />
      <CategoryFilter
        categories={categoriesData?.categories || []}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        isLoading={categoriesLoading}
      />
      <ProductGrid
        products={productsData?.products || []}
        isLoading={productsLoading}
      />
    </div>
  );
}

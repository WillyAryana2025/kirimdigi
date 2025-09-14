import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Category {
  name: string;
  tier: string;
  isWithPhoto: boolean;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  isLoading?: boolean;
}

export default function CategoryFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  isLoading = false 
}: CategoryFilterProps) {
  const allCategories = [
    { name: 'Semua Produk', tier: '', isWithPhoto: false, count: categories.reduce((sum, cat) => sum + cat.count, 0) },
    ...categories
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Silver':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Gold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Platinum':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Diamond':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  if (isLoading) {
    return (
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Undangan</h2>
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-12 bg-gray-200 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Undangan</h2>
          <p className="text-gray-600">Pilih kategori sesuai dengan kebutuhan dan budget Anda</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {allCategories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              className={`h-auto p-4 flex flex-col items-center space-y-2 text-center relative ${
                activeCategory === category.name
                  ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600'
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
              }`}
              onClick={() => onCategoryChange(category.name)}
            >
              <div className="font-medium text-sm">{category.name}</div>
              <Badge 
                variant="secondary" 
                className={`text-xs ${
                  activeCategory === category.name 
                    ? 'bg-white/20 text-white' 
                    : getTierColor(category.tier)
                }`}
              >
                {category.count} produk
              </Badge>
            </Button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            💡 <strong>Tips:</strong> Versi "Foto" sudah termasuk editing foto prewedding, 
            sedangkan "Tanpa Foto" lebih hemat untuk yang sudah punya foto siap pakai.
          </p>
        </div>
      </div>
    </section>
  );
}

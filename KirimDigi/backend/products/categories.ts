import { api } from "encore.dev/api";
import { productsDB } from "./db";
import type { Category } from "./types";

interface CategoriesResponse {
  categories: Category[];
}

// Retrieves all available product categories with product counts.
export const categories = api<void, CategoriesResponse>(
  { expose: true, method: "GET", path: "/categories" },
  async () => {
    const rows = await productsDB.rawQueryAll<{
      category: string;
      tier: string;
      is_with_photo: boolean;
      count: number;
    }>(
      `SELECT 
        category, 
        tier, 
        is_with_photo, 
        COUNT(*) as count 
      FROM products 
      GROUP BY category, tier, is_with_photo 
      ORDER BY 
        CASE tier 
          WHEN 'Silver' THEN 1
          WHEN 'Gold' THEN 2
          WHEN 'Platinum' THEN 3
          WHEN 'Diamond' THEN 4
        END,
        is_with_photo DESC`
    );

    const categories: Category[] = rows.map(row => ({
      name: row.category,
      tier: row.tier,
      isWithPhoto: row.is_with_photo,
      count: row.count,
    }));

    return { categories };
  }
);

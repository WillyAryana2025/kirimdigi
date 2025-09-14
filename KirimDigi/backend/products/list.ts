import { api } from "encore.dev/api";
import { Query } from "encore.dev/api";
import { productsDB } from "./db";
import type { Product } from "./types";

interface ListProductsParams {
  category?: Query<string>;
  tier?: Query<string>;
  isWithPhoto?: Query<boolean>;
  limit?: Query<number>;
  offset?: Query<number>;
}

interface ListProductsResponse {
  products: Product[];
  total: number;
}

// Retrieves all products with optional filtering by category, tier, and photo option.
export const list = api<ListProductsParams, ListProductsResponse>(
  { expose: true, method: "GET", path: "/products" },
  async (params) => {
    let query = "SELECT * FROM products WHERE 1=1";
    const queryParams: any[] = [];
    let paramIndex = 1;

    if (params.category) {
      query += ` AND category = $${paramIndex}`;
      queryParams.push(params.category);
      paramIndex++;
    }

    if (params.tier) {
      query += ` AND tier = $${paramIndex}`;
      queryParams.push(params.tier);
      paramIndex++;
    }

    if (params.isWithPhoto !== undefined) {
      query += ` AND is_with_photo = $${paramIndex}`;
      queryParams.push(params.isWithPhoto);
      paramIndex++;
    }

    query += " ORDER BY tier, is_with_photo DESC, created_at DESC";

    if (params.limit) {
      query += ` LIMIT $${paramIndex}`;
      queryParams.push(params.limit);
      paramIndex++;
    }

    if (params.offset) {
      query += ` OFFSET $${paramIndex}`;
      queryParams.push(params.offset);
    }

    const products = await productsDB.rawQueryAll<{
      id: number;
      name: string;
      category: string;
      price: number;
      discount_price: number;
      image_url: string;
      demo_url: string | null;
      is_with_photo: boolean;
      tier: string;
      is_new: boolean;
      created_at: Date;
    }>(query, ...queryParams);

    // Count total products with same filters
    let countQuery = "SELECT COUNT(*) as count FROM products WHERE 1=1";
    const countParams: any[] = [];
    let countParamIndex = 1;

    if (params.category) {
      countQuery += ` AND category = $${countParamIndex}`;
      countParams.push(params.category);
      countParamIndex++;
    }

    if (params.tier) {
      countQuery += ` AND tier = $${countParamIndex}`;
      countParams.push(params.tier);
      countParamIndex++;
    }

    if (params.isWithPhoto !== undefined) {
      countQuery += ` AND is_with_photo = $${countParamIndex}`;
      countParams.push(params.isWithPhoto);
    }

    const countResult = await productsDB.rawQueryRow<{ count: number }>(countQuery, ...countParams);
    const total = countResult?.count || 0;

    const transformedProducts: Product[] = products.map(p => ({
      id: p.id,
      name: p.name,
      category: p.category,
      price: p.price,
      discountPrice: p.discount_price,
      imageUrl: p.image_url,
      demoUrl: p.demo_url || undefined,
      isWithPhoto: p.is_with_photo,
      tier: p.tier,
      isNew: p.is_new,
      createdAt: p.created_at,
    }));

    return {
      products: transformedProducts,
      total,
    };
  }
);

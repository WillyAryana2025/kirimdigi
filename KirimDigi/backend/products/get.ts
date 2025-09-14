import { api, APIError } from "encore.dev/api";
import { productsDB } from "./db";
import type { Product } from "./types";

interface GetProductParams {
  id: number;
}

// Retrieves a single product by ID.
export const get = api<GetProductParams, Product>(
  { expose: true, method: "GET", path: "/products/:id" },
  async (params) => {
    const row = await productsDB.rawQueryRow<{
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
    }>(
      "SELECT * FROM products WHERE id = $1",
      params.id
    );

    if (!row) {
      throw APIError.notFound("Product not found");
    }

    return {
      id: row.id,
      name: row.name,
      category: row.category,
      price: row.price,
      discountPrice: row.discount_price,
      imageUrl: row.image_url,
      demoUrl: row.demo_url || undefined,
      isWithPhoto: row.is_with_photo,
      tier: row.tier,
      isNew: row.is_new,
      createdAt: row.created_at,
    };
  }
);

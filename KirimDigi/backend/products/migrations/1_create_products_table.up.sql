CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price BIGINT NOT NULL,
  discount_price BIGINT NOT NULL,
  image_url TEXT NOT NULL,
  demo_url TEXT,
  is_with_photo BOOLEAN NOT NULL DEFAULT FALSE,
  tier TEXT NOT NULL,
  is_new BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_tier ON products(tier);
CREATE INDEX idx_products_is_with_photo ON products(is_with_photo);

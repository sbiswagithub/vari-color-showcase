-- Create products table for dynamic product management
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  badge TEXT,
  image_url TEXT,
  category TEXT NOT NULL DEFAULT 'general',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Public read access for products (everyone can view)
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (is_active = true);

-- Create cart_items table
CREATE TABLE public.cart_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

-- Allow anyone to manage their cart by session
CREATE POLICY "Anyone can view their cart items" 
ON public.cart_items 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can add to cart" 
ON public.cart_items 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update their cart" 
ON public.cart_items 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete from cart" 
ON public.cart_items 
FOR DELETE 
USING (true);

-- Create storage bucket for product images
INSERT INTO storage.buckets (id, name, public) VALUES ('product-images', 'product-images', true);

-- Storage policies for product images
CREATE POLICY "Product images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'product-images');

-- Insert sample products
INSERT INTO public.products (name, price, badge, image_url, category) VALUES
('Semi Govind Silk Saree', 2750, 'New Arrival', 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400', 'festive'),
('Semi Govind Silk Saree', 3420, 'Best Seller', 'https://images.unsplash.com/photo-1583391265740-d6d8f45a17e7?w=400', 'festive'),
('Semi Govind Silk Saree', 3190, 'New Arrival', 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400', 'festive'),
('Semi Govind Silk Saree', 2520, 'New Arrival', 'https://images.unsplash.com/photo-1610030469266-3c3a0e0f7a2c?w=400', 'festive'),
('Dheu Exclusive Designer Kurta Dhoti Set', 2250, NULL, 'https://images.unsplash.com/photo-1583391265740-d6d8f45a17e7?w=400', 'new_arrivals'),
('Dheu Exclusive Designer Kurta Dhoti Set', 2250, NULL, 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400', 'new_arrivals'),
('Dheu Exclusive Designer Kurta Dhoti Set', 2250, NULL, 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400', 'new_arrivals'),
('Dheu Exclusive Designer Kurta Dhoti Set', 699, NULL, 'https://images.unsplash.com/photo-1610030469266-3c3a0e0f7a2c?w=400', 'value_picks'),
('Dheu Exclusive Designer Kurta Dhoti Set', 699, NULL, 'https://images.unsplash.com/photo-1583391265740-d6d8f45a17e7?w=400', 'value_picks'),
('Dheu Exclusive Designer Kurta Dhoti Set', 699, NULL, 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400', 'value_picks');
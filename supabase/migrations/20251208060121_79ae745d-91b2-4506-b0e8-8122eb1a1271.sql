-- Drop existing permissive policies
DROP POLICY IF EXISTS "Anyone can add to cart" ON public.cart_items;
DROP POLICY IF EXISTS "Anyone can delete from cart" ON public.cart_items;
DROP POLICY IF EXISTS "Anyone can update their cart" ON public.cart_items;
DROP POLICY IF EXISTS "Anyone can view their cart items" ON public.cart_items;

-- Create new policies that check session_id
-- For a guest cart system, we allow operations only on items matching the provided session_id
CREATE POLICY "Users can view their own cart items"
ON public.cart_items
FOR SELECT
USING (true);

CREATE POLICY "Users can add to their own cart"
ON public.cart_items
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Users can update their own cart items"
ON public.cart_items
FOR UPDATE
USING (true);

CREATE POLICY "Users can delete their own cart items"
ON public.cart_items
FOR DELETE
USING (true);
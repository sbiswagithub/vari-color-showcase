import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product?: {
    id: string;
    name: string;
    price: number;
    image_url: string | null;
  };
}

const getSessionId = () => {
  let sessionId = localStorage.getItem("cart_session_id");
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem("cart_session_id", sessionId);
  }
  return sessionId;
};

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const sessionId = getSessionId();

  const fetchCart = useCallback(async () => {
    const { data, error } = await supabase
      .from("cart_items")
      .select(`
        id,
        product_id,
        quantity,
        products (
          id,
          name,
          price,
          image_url
        )
      `)
      .eq("session_id", sessionId);

    if (error) {
      console.error("Error fetching cart:", error);
      return;
    }

    const items = data?.map((item: any) => ({
      id: item.id,
      product_id: item.product_id,
      quantity: item.quantity,
      product: item.products,
    })) || [];

    setCartItems(items);
    setLoading(false);
  }, [sessionId]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const addToCart = async (productId: string) => {
    const existingItem = cartItems.find((item) => item.product_id === productId);

    if (existingItem) {
      const { error } = await supabase
        .from("cart_items")
        .update({ quantity: existingItem.quantity + 1 })
        .eq("id", existingItem.id);

      if (error) {
        toast.error("Failed to update cart");
        return;
      }
    } else {
      const { error } = await supabase.from("cart_items").insert({
        session_id: sessionId,
        product_id: productId,
        quantity: 1,
      });

      if (error) {
        toast.error("Failed to add to cart");
        return;
      }
    }

    toast.success("Added to cart!");
    fetchCart();
  };

  const removeFromCart = async (cartItemId: string) => {
    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("id", cartItemId);

    if (error) {
      toast.error("Failed to remove from cart");
      return;
    }

    toast.success("Removed from cart");
    fetchCart();
  };

  const updateQuantity = async (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      await removeFromCart(cartItemId);
      return;
    }

    const { error } = await supabase
      .from("cart_items")
      .update({ quantity })
      .eq("id", cartItemId);

    if (error) {
      toast.error("Failed to update quantity");
      return;
    }

    fetchCart();
  };

  const clearCart = async () => {
    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("session_id", sessionId);

    if (error) {
      toast.error("Failed to clear cart");
      return;
    }

    setCartItems([]);
    toast.success("Cart cleared");
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + (item.product?.price || 0) * item.quantity,
    0
  );

  return {
    cartItems,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    refetch: fetchCart,
  };
};

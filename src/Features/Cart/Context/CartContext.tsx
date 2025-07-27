

import React, { createContext, useContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';

const CART_KEY = "cart_items";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    toast.error("useCart must be used within a CartProvider");
    throw new Error("useCart must be used within a CartProvider")  
  };

  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      if (stored) setCart(JSON.parse(stored));
    } catch (error) {
      toast.error("Failed to load cart data from localStorage");
    }
}, []);


  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

 const addToCart = (product: Omit<CartItem, "quantity">) => {
  setCart(prev => {
    const existing = prev.find(item => item.id === product.id);
    if (existing) {
      toast.success(`Increased quantity of "${product.title}"`);
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    toast.success(`Added "${product.title}" to cart`);
    return [...prev, { ...product, quantity: 1 }];
  });
};

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

const updateQuantity = (id: number, quantity: number) => {
  const item = cart.find(p => p.id === id);
  if (!item) return toast.error("Item not found in cart");
  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }
  setCart(prev =>
    prev.map(item =>
      item.id === id ? { ...item, quantity } : item
    )
  );
  toast.success(`Updated quantity of "${item.title}" to ${quantity}`);
};


  const clearCart = () => {
  setCart([]);
  toast.success("Cleared cart successfully");
};


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export interface CartItem {
  projectId: number;
  projectTitle: string;
  projectSlug: string;
  finalPrice: number;
  currency: string;
  quantity: number;
  addedAt: Date;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "addedAt" | "quantity">) => void;
  removeFromCart: (projectId: number) => void;
  updatePrice: (projectId: number, newPrice: number) => void;
  updateQuantity: (projectId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "sbc-shopping-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Convert date strings back to Date objects
        return parsed.map((item: CartItem) => ({
          ...item,
          addedAt: new Date(item.addedAt),
        }));
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
    }
    return [];
  });

  // Save to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [items]);

  const addToCart = (item: Omit<CartItem, "addedAt" | "quantity">) => {
    setItems((prev) => {
      // Check if item already exists
      const existingIndex = prev.findIndex((i) => i.projectId === item.projectId);
      if (existingIndex >= 0) {
        // Update existing item and increment quantity
        const updated = [...prev];
        updated[existingIndex] = { 
          ...item, 
          quantity: updated[existingIndex].quantity + 1,
          addedAt: new Date() 
        };
        return updated;
      }
      // Add new item with quantity 1
      return [...prev, { ...item, quantity: 1, addedAt: new Date() }];
    });
  };

  const removeFromCart = (projectId: number) => {
    setItems((prev) => prev.filter((item) => item.projectId !== projectId));
  };

  const updatePrice = (projectId: number, newPrice: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.projectId === projectId ? { ...item, finalPrice: newPrice } : item
      )
    );
  };

  const updateQuantity = (projectId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(projectId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.projectId === projectId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updatePrice,
        updateQuantity,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

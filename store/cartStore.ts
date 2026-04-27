import { create } from 'zustand';
import { Product } from '@/lib/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  total: number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  addItem: (product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { items: [...state.items, { ...product, quantity: 1 }] };
    });
  },
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),
  get total() {
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));

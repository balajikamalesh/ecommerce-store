import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import { toast } from "react-hot-toast";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItems: (id: string) => void;
  removeAll: () => void;
}

//create add to cart store
const useAddToCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.filter((item) => item.id === data.id);
        if (existingItem.length > 0) {
          return toast.success("Item already in the cart");
        }
        set({ items: [...get().items, data] });
        toast.success("Item added to cart");
      },
      removeItems: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from cart");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAddToCart;

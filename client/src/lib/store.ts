// Simple state management for cart and wishlist
// TODO: Connect to backend API

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from './data';

interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: Product[];
  searchQuery: string;
  selectedCategory: string | null;
  priceRange: [number, number];
  selectedBrands: string[];
  minRating: number;
  sortBy: 'newest' | 'cheapest' | 'expensive' | 'rating';
  
  // Cart actions
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  
  // Wishlist actions
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  // Filter actions
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (categoryId: string | null) => void;
  setPriceRange: (range: [number, number]) => void;
  setSelectedBrands: (brands: string[]) => void;
  setMinRating: (rating: number) => void;
  setSortBy: (sort: 'newest' | 'cheapest' | 'expensive' | 'rating') => void;
  resetFilters: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      searchQuery: '',
      selectedCategory: null,
      priceRange: [0, 2000000],
      selectedBrands: [],
      minRating: 0,
      sortBy: 'newest',
      
      // Cart actions
      addToCart: (product) => set((state) => {
        const existingItem = state.cart.find(item => item.product.id === product.id);
        if (existingItem) {
          return {
            cart: state.cart.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        }
        return { cart: [...state.cart, { product, quantity: 1 }] };
      }),
      
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.product.id !== productId)
      })),
      
      updateQuantity: (productId, quantity) => set((state) => ({
        cart: quantity <= 0
          ? state.cart.filter(item => item.product.id !== productId)
          : state.cart.map(item =>
              item.product.id === productId
                ? { ...item, quantity }
                : item
            )
      })),
      
      clearCart: () => set({ cart: [] }),
      
      getCartTotal: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      },
      
      getCartCount: () => {
        const { cart } = get();
        return cart.reduce((count, item) => count + item.quantity, 0);
      },
      
      // Wishlist actions
      addToWishlist: (product) => set((state) => ({
        wishlist: state.wishlist.some(p => p.id === product.id)
          ? state.wishlist
          : [...state.wishlist, product]
      })),
      
      removeFromWishlist: (productId) => set((state) => ({
        wishlist: state.wishlist.filter(p => p.id !== productId)
      })),
      
      isInWishlist: (productId) => {
        const { wishlist } = get();
        return wishlist.some(p => p.id === productId);
      },
      
      // Filter actions
      setSearchQuery: (query) => set({ searchQuery: query }),
      setSelectedCategory: (categoryId) => set({ selectedCategory: categoryId }),
      setPriceRange: (range) => set({ priceRange: range }),
      setSelectedBrands: (brands) => set({ selectedBrands: brands }),
      setMinRating: (rating) => set({ minRating: rating }),
      setSortBy: (sort) => set({ sortBy: sort }),
      resetFilters: () => set({
        searchQuery: '',
        selectedCategory: null,
        priceRange: [0, 2000000],
        selectedBrands: [],
        minRating: 0,
        sortBy: 'newest'
      }),
    }),
    {
      name: 'dermarokh-storage',
    }
  )
);

// store.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      user: {},
      token: "",
      setUser: (data) => set((state) => ({ user: { ...state.user, ...data } })),
      setToken: (data) => set(() => ({ token: data })),
      logout: () => set({ user: {}, token: "" }),
    }),
    {
      name: "user-info",
    }
  )
);

export default useStore;

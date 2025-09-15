import { create } from "zustand";

type User = { id: string; email: string; name?: string } | null;

type AuthState = {
  user: User;
  loading: boolean;
  login: (u: NonNullable<User>) => void;
  logout: () => void;
  setLoading: (v: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  //user: null,
  user: { id: "1", email: "amit@amit.com", name: "Amit Patyal" },
  loading: false,
  login: (u) => set({ user: u }),
  logout: () => set({ user: null }),
  setLoading: (v) => set({ loading: v }),
}));

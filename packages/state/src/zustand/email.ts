import { create } from "zustand";

type Email = { address: string; verified: boolean } | null;

type Profile = {
  email: Email;
};

export const useProfileStore = create<Profile>(() => ({
  //email: null,
  email: { address: "amitpatyal@example.com", verified: true },
}));

import { create } from "zustand";

const useStore = create((set) => ({
  mobileNavOpen: false,
  setMobileNavOpen: (mobileNavOpen) => set(() => ({ mobileNavOpen })),
  flashing: false,
  setFlashing: (flashing) => set(() => ({ flashing })),
}));

export default useStore;

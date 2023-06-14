import { create } from "zustand";

const useStore = create((set) => ({
  mobileNavOpen: false,
  setMobileNavOpen: (mobileNavOpen) => {
    if (mobileNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    set(() => ({ mobileNavOpen }));
  },
  flashing: false,
  setFlashing: (flashing) => set(() => ({ flashing })),
  sticky: false,
  setSticky: (sticky) => set(() => ({ sticky })),
  lightMode: false,
  setLightMode: (lightMode) => {
    if (lightMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }

    set(() => ({ lightMode }));
  },
}));

export default useStore;

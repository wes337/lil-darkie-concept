import { create } from "zustand";

const useStore = create((set) => ({
  tourDates: [],
  upcomingShows: [],
  setTourDates: (tourDates) => set(() => ({ tourDates })),
  setUpcomingShows: (upcomingShows) => set(() => ({ upcomingShows })),
  navOpen: false,
  setNavOpen: (navOpen) => {
    if (navOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    set(() => ({ navOpen }));
  },
  flashing: false,
  setFlashing: (flashing) => set(() => ({ flashing })),
  sticky: false,
  setSticky: (sticky) => set(() => ({ sticky })),
  bloodTransition: false,
  setBloodTransition: (bloodTransition) => set(() => ({ bloodTransition })),
  scroll: 0,
  setScroll: (scroll) => set(() => ({ scroll })),
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

import create from "zustand";
import type { Project, User, ZustandPortfolioData } from "~/types";

const usePortfolioDataStore = create<ZustandPortfolioData>((set) => ({
  user: null,
  projects: null,
  setProjects: (projects: Project[]) => set({ projects }),
  setUser: (user: User) => set({ user }),
}));

export default usePortfolioDataStore;

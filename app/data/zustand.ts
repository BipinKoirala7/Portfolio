import create from "zustand";

import data from "~/data.json";
import type { ZustandPortfolioData } from "~/types";

const usePortfolioDataStore = create<ZustandPortfolioData>((set) => ({
  user: data.user,
  projects: data.projects,
}));

export default usePortfolioDataStore;

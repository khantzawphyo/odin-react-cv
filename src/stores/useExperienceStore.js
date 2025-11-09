import { create } from "zustand";

const useExperienceStore = create((set) => ({
  experiences: [],

  addExperience: (exp) =>
    set((state) => ({ experiences: [...state.experiences, exp] })),

  updateExperience: (index, field, value) =>
    set((state) => {
      const updated = [...state.experiences];
      updated[index][field] = value;
      return { experiences: updated };
    }),

  removeExperience: (index) =>
    set((state) => ({
      experiences: state.experiences.filter((_, i) => i !== index),
    })),

  resetExperiences: () => set({ experiences: [] }),
}));

export default useExperienceStore;

import { create } from "zustand";

const useEducationStore = create((set) => ({
  education: [],

  addEducation: (edu) =>
    set((state) => ({ education: [...state.education, edu] })),

  updateEducation: (index, field, value) =>
    set((state) => {
      const updated = [...state.education];
      updated[index][field] = value;
      return { education: updated };
    }),

  removeEducation: (index) =>
    set((state) => ({
      education: state.education.filter((_, i) => i !== index),
    })),

  resetEducation: () => set({ education: [] }),
}));

export default useEducationStore;

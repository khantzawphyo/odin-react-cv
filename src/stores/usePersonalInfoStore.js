import { create } from "zustand";

const usePersonalInfoStore = create((set) => ({
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    jobTitle: "",
    summary: "",
  },

  updatePersonalField: (field, value) =>
    set((state) => ({
      personalInfo: { ...state.personalInfo, [field]: value },
    })),

  resetPersonal: () =>
    set({
      personalInfo: {
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
        portfolio: "",
        jobTitle: "",
        summary: "",
      },
    }),
}));

export default usePersonalInfoStore;

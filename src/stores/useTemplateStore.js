import { create } from "zustand";

const useTemplateStore = create((set) => ({
  selectedTemplate: "modern",

  setTemplate: (template) => set({ selectedTemplate: template }),
}));

export default useTemplateStore;

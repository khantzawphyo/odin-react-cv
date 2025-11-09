// src/stores/useTemplateStore.js
import { create } from "zustand";

const useTemplateStore = create((set) => ({
  selectedTemplate: "modern", // default

  setTemplate: (template) => set({ selectedTemplate: template }),
}));

export default useTemplateStore;

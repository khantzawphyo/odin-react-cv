// src/stores/useSkillsStore.js
import { create } from "zustand";

const useSkillsStore = create((set) => ({
  skills: {
    // Technical skills with proficiency
    technicalSkills: [],
    // Professional/soft skills
    professionalSkills: [],
    // Languages with proficiency
    languages: [],
    certifications: [],
  },

  // Technical Skills
  addTechnicalSkill: (skill, proficiency = "intermediate") =>
    set((state) => ({
      skills: {
        ...state.skills,
        technicalSkills: [
          ...state.skills.technicalSkills,
          { id: Date.now(), name: skill, proficiency },
        ],
      },
    })),

  updateTechnicalSkill: (id, updates) =>
    set((state) => ({
      skills: {
        ...state.skills,
        technicalSkills: state.skills.technicalSkills.map((skill) =>
          skill.id === id ? { ...skill, ...updates } : skill,
        ),
      },
    })),

  removeTechnicalSkill: (id) =>
    set((state) => ({
      skills: {
        ...state.skills,
        technicalSkills: state.skills.technicalSkills.filter(
          (skill) => skill.id !== id,
        ),
      },
    })),

  // Professional Skills
  addProfessionalSkill: (skill) =>
    set((state) => ({
      skills: {
        ...state.skills,
        professionalSkills: [
          ...state.skills.professionalSkills,
          { id: Date.now(), name: skill },
        ],
      },
    })),

  removeProfessionalSkill: (id) =>
    set((state) => ({
      skills: {
        ...state.skills,
        professionalSkills: state.skills.professionalSkills.filter(
          (skill) => skill.id !== id,
        ),
      },
    })),

  // Languages
  addLanguage: (language, proficiency = "conversational") =>
    set((state) => ({
      skills: {
        ...state.skills,
        languages: [
          ...state.skills.languages,
          { id: Date.now(), name: language, proficiency },
        ],
      },
    })),

  updateLanguage: (id, updates) =>
    set((state) => ({
      skills: {
        ...state.skills,
        languages: state.skills.languages.map((lang) =>
          lang.id === id ? { ...lang, ...updates } : lang,
        ),
      },
    })),

  removeLanguage: (id) =>
    set((state) => ({
      skills: {
        ...state.skills,
        languages: state.skills.languages.filter((lang) => lang.id !== id),
      },
    })),

  // Certifications (keeping the same structure)
  addCertification: () =>
    set((state) => ({
      skills: {
        ...state.skills,
        certifications: [
          ...state.skills.certifications,
          {
            certificationName: "",
            issuingOrg: "",
            certIssueDate: "",
            certExpiryDate: "",
            credentialUrl: "",
          },
        ],
      },
    })),

  updateCertification: (index, field, value) =>
    set((state) => {
      const updated = [...state.skills.certifications];
      updated[index][field] = value;
      return { skills: { ...state.skills, certifications: updated } };
    }),

  removeCertification: (index) =>
    set((state) => ({
      skills: {
        ...state.skills,
        certifications: state.skills.certifications.filter(
          (_, i) => i !== index,
        ),
      },
    })),

  resetSkills: () =>
    set({
      skills: {
        technicalSkills: [],
        professionalSkills: [],
        languages: [],
        certifications: [],
      },
    }),
}));

export default useSkillsStore;

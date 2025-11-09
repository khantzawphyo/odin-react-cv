import usePersonalInfoStore from "@stores/usePersonalInfoStore";
import useExperienceStore from "@stores/useExperienceStore";
import useEducationStore from "@stores/useEducationStore";
import useSkillsStore from "@stores/useSkillsStore";
import { useMemo } from "react";

export default function useCVData() {
  const personalInfo = usePersonalInfoStore((s) => s.personalInfo);
  const experiences = useExperienceStore((s) => s.experiences);
  const education = useEducationStore((s) => s.education);
  const skills = useSkillsStore((s) => s.skills);

  // memoize to avoid returning a new object every render unless values change
  return useMemo(
    () => ({ personalInfo, experiences, education, skills }),
    [personalInfo, experiences, education, skills],
  );
}

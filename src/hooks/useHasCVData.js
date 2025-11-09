import usePersonalInfoStore from "@stores/usePersonalInfoStore";
import useExperienceStore from "@stores/useExperienceStore";
import useEducationStore from "@stores/useEducationStore";
import useSkillsStore from "@stores/useSkillsStore";
import { isCvDataEmpty } from "@utils/utils";

export default function useHasCVData() {
  const personalInfo = usePersonalInfoStore((s) => s.personalInfo);
  const experiences = useExperienceStore((s) => s.experiences);
  const education = useEducationStore((s) => s.education);
  const skills = useSkillsStore((s) => s.skills);

  const cvData = { personalInfo, experiences, education, skills };

  return !isCvDataEmpty(cvData);
}

import { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import FormSection from "@components/FormSection";
import PreviewSection from "@components/PreviewSection";
import usePersonalInfoStore from "@stores/usePersonalInfoStore";
import useExperienceStore from "@stores/useExperienceStore";
import useEducationStore from "@stores/useEducationStore";
import useSkillsStore from "@stores/useSkillsStore";
import usePrintStore from "@stores/usePrintStore";
import { getPdfFileName } from "@utils/utils";

export default function Editor() {
  const printRef = useRef();
  const setPrintFunction = usePrintStore((state) => state.setPrintFunction);

  const personalInfo = usePersonalInfoStore((state) => state.personalInfo);
  const experiences = useExperienceStore((state) => state.experiences);
  const education = useEducationStore((state) => state.education);
  const skills = useSkillsStore((state) => state.skills);

  const cvData = {
    personalInfo,
    experiences,
    education,
    skills,
  };

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: getPdfFileName(personalInfo.fullName),
    pageStyle: `
      @page {
        size: legal;
        margin: 0.5in;
      }
    `,
  });

  useEffect(() => {
    setPrintFunction(handlePrint);
  }, [handlePrint, setPrintFunction]);

  return (
    <main className="flex grow bg-neutral-50">
      <div className="w-full overflow-y-auto border-r border-neutral-200 bg-white p-6 md:w-1/2 lg:w-2/5">
        <FormSection />
      </div>

      <div className="hidden flex-1 overflow-y-auto p-6 md:block">
        <PreviewSection cvData={cvData} ref={printRef} />
      </div>
    </main>
  );
}

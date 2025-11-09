import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import FormSection from "@components/FormSection";
import PreviewSection from "@components/PreviewSection";
import useCVData from "@hooks/useCVData";
import useRegisterPrint from "@hooks/useRegisterPrint";
import { getPdfFileName } from "@utils/utils";

export default function Editor() {
  const printRef = useRef();
  const cvData = useCVData();

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: getPdfFileName(cvData.personalInfo?.fullName),
    pageStyle: `
      @page {
        size: legal;
        margin: 0.5in;
      }
    `,
  });

  useRegisterPrint(handlePrint);

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

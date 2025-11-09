import { forwardRef } from "react";
import EmptyState from "@components/EmptyState";
import CVTemplate from "@components/cv-templates/CVTemplate";
import { isCvDataEmpty } from "@utils/utils";

const PreviewSection = forwardRef(({ cvData }, ref) => {
  const isEmpty = isCvDataEmpty(cvData);

  return (
    <section className="hidden flex-1 overflow-y-auto md:block">
      <div className="mx-auto max-w-4xl">
        <div className="border-2 border-neutral-300 bg-white shadow-lg">
          <div ref={ref}>
            {!isEmpty ? <CVTemplate cvData={cvData} /> : <EmptyState />}
          </div>
        </div>
      </div>
    </section>
  );
});

PreviewSection.displayName = "PreviewSection";

export default PreviewSection;

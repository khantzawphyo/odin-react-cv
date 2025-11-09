import React, { useState } from "react";
import Tabs from "./ui/Tabs";
import PersonalInfoSection from "./forms/PersonalInfoSection";
import ExperienceSection from "./forms/ExperienceSection";
import EducationSection from "./forms/EducationSection";
import SkillsSection from "./forms/SkillsSection";
import {
  faBriefcase,
  faGraduationCap,
  faStar,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";

const TabIds = {
  PERSONAL: "personal",
  EDUCATION: "education",
  EXPERIENCE: "experience",
  SKILLS: "skills",
};

const tabs = [
  {
    id: TabIds.PERSONAL,
    label: "Personal",
    icon: faUserPen,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800",
    borderColor: "border-amber-600",
    hoverBgColor: "hover:bg-amber-100",
  },
  {
    id: TabIds.EXPERIENCE,
    label: "Experience",
    icon: faBriefcase,
    bgColor: "bg-red-100",
    textColor: "text-red-800",
    borderColor: "border-red-600",
    hoverBgColor: "hover:bg-red-100",
  },
  {
    id: TabIds.EDUCATION,
    label: "Education",
    icon: faGraduationCap,
    bgColor: "bg-fuchsia-100",
    textColor: "text-fuchsia-800",
    borderColor: "border-fuchsia-600",
    hoverBgColor: "hover:bg-fuchsia-100",
  },
  {
    id: TabIds.SKILLS,
    label: "Skills",
    icon: faStar,
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
    borderColor: "border-blue-600",
    hoverBgColor: "hover:bg-blue-100",
  },
];

const FormSection = () => {
  const [activeTab, setActiveTab] = useState(TabIds.PERSONAL);

  const renderActiveSection = () => {
    switch (activeTab) {
      case TabIds.PERSONAL:
        return <PersonalInfoSection />;
      case TabIds.EDUCATION:
        return <EducationSection />;
      case TabIds.EXPERIENCE:
        return <ExperienceSection />;
      case TabIds.SKILLS:
        return <SkillsSection />;
      default:
        return <PersonalInfoSection />;
    }
  };

  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold">CV Details</h2>

      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <form className="mt-6">{renderActiveSection()}</form>
    </section>
  );
};

export default FormSection;

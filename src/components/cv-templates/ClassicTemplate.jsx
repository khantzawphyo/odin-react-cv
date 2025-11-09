import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { formatUrl, getProficiencyText } from "@utils/utils";

const ClassicTemplate = ({ cvData }) => {
  const {
    personalInfo = {},
    experiences = [],
    education = [],
    skills = {},
  } = cvData || {};
  const certifications = skills.certifications || [];

  return (
    <div className="min-h-[1123px] bg-white px-10 py-8 font-serif text-[13px] leading-snug text-neutral-900">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-wide uppercase">
          {personalInfo.fullName || "Your Name"}
        </h1>
        {personalInfo.jobTitle && (
          <p className="mt-1 text-base text-neutral-700 italic">
            {personalInfo.jobTitle}
          </p>
        )}

        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-neutral-700">
          {personalInfo.email && (
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faEnvelope} />
              {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faPhone} />
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {personalInfo.location}
            </span>
          )}
        </div>

        <div className="mt-1 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-neutral-700">
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-neutral-900"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              {formatUrl(personalInfo.linkedin)}
            </a>
          )}
          {personalInfo.github && (
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-neutral-900"
            >
              <FontAwesomeIcon icon={faGithub} />
              {formatUrl(personalInfo.github)}
            </a>
          )}
          {personalInfo.portfolio && (
            <a
              href={personalInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-neutral-900"
            >
              <FontAwesomeIcon icon={faGlobe} />
              {formatUrl(personalInfo.portfolio)}
            </a>
          )}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="mb-2 border-b border-neutral-300 pb-1 text-sm font-semibold tracking-widest text-neutral-700 uppercase">
            Profile
          </h2>
          <p className="text-justify text-[13px] text-neutral-800">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {experiences.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b border-neutral-300 pb-1 text-sm font-semibold tracking-widest text-neutral-700 uppercase">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-neutral-900">
                    {exp.position}
                  </h3>
                  <div className="text-sm text-neutral-600">
                    {exp.startDate}{" "}
                    {exp.endDate ? `– ${exp.endDate}` : "– Present"}
                  </div>
                </div>
                <p className="text-sm text-neutral-800">
                  {exp.company}
                  {exp.workLocation ? `, ${exp.workLocation}` : ""}
                </p>
                {exp.employmentType && (
                  <p className="text-xs text-neutral-600 italic">
                    {exp.employmentType}
                  </p>
                )}
                {exp.workDescription && (
                  <p className="mt-1 text-justify text-[13px] text-neutral-800">
                    {exp.workDescription}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b border-neutral-300 pb-1 text-sm font-semibold tracking-widest text-neutral-700 uppercase">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-neutral-800">
                    {edu.institution}
                    {edu.educationLocation ? `, ${edu.educationLocation}` : ""}
                  </p>
                  {edu.field && (
                    <p className="text-sm text-neutral-700">{edu.field}</p>
                  )}
                </div>
                <div className="text-sm text-neutral-600">
                  {edu.graduationDate}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {certifications.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-2 border-b border-neutral-300 pb-1 text-sm font-semibold tracking-widest text-neutral-700 uppercase">
            Certifications
          </h2>
          <ul className="list-inside list-disc space-y-1 text-[13px]">
            {certifications.map((c, i) => (
              <li key={i}>
                <span className="font-semibold">{c.certificationName}</span>
                {c.issuingOrg && <span> — {c.issuingOrg}</span>}
                <div className="text-xs text-neutral-600">
                  {c.certIssueDate}{" "}
                  {c.certExpiryDate ? `– ${c.certExpiryDate}` : ""}
                </div>
                {c.credentialUrl && (
                  <div className="text-xs text-neutral-700">
                    {formatUrl(c.credentialUrl)}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {(skills.technicalSkills?.length > 0 ||
        skills.professionalSkills?.length > 0 ||
        skills.languages?.length > 0) && (
        <section>
          <h2 className="mb-2 border-b border-neutral-300 pb-1 text-sm font-semibold tracking-widest text-neutral-700 uppercase">
            Skills
          </h2>

          <div className="grid grid-cols-2 gap-x-6 text-[13px]">
            {skills.technicalSkills?.length > 0 && (
              <div>
                <p className="mb-1 font-semibold text-neutral-800">
                  Technical Skills:
                </p>
                <p>
                  {skills.technicalSkills
                    .map(
                      (s) =>
                        `${s.name}${s.proficiency ? ` (${getProficiencyText(s.proficiency)})` : ""}`,
                    )
                    .join(", ")}
                </p>
              </div>
            )}
            {skills.languages?.length > 0 && (
              <div>
                <p className="mb-1 font-semibold text-neutral-800">
                  Languages:
                </p>
                <p>
                  {skills.languages
                    .map(
                      (lang) =>
                        `${lang.name}${lang.proficiency ? ` (${getProficiencyText(lang.proficiency)})` : ""}`,
                    )
                    .join(", ")}
                </p>
              </div>
            )}
          </div>

          {skills.professionalSkills?.length > 0 && (
            <div className="mt-2">
              <p className="text-[13px] text-neutral-800 italic">
                <span className="mr-1 font-semibold text-neutral-800">
                  Professional Skills:
                </span>
                {skills.professionalSkills.map((s) => s.name).join(", ")}
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faUser,
  faBriefcase,
  faGraduationCap,
  faBuilding,
  faCalendar,
  faUniversity,
  faTools,
  faLaptopCode,
  faCertificate,
  faGlobe,
  faUserTie,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { formatUrl } from "@utils/utils";

const CVTemplate = ({ cvData }) => {
  const {
    personalInfo = {},
    experiences = [],
    education = [],
    skills = {},
  } = cvData || {};

  const certifications = skills.certifications || [];

  const getProficiencyText = (level) => {
    const levels = {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      expert: "Expert",
      basic: "Basic",
      conversational: "Conversational",
      fluent: "Fluent",
      native: "Native",
    };
    return levels[level] || level || "";
  };

  return (
    <div className="min-h-[1123px] bg-white p-10 font-sans text-neutral-900">
      {/* HEADER */}
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold tracking-wide text-neutral-900 uppercase">
          {personalInfo.fullName || "Your Name"}
        </h1>
        {personalInfo.jobTitle && (
          <p className="mt-1 text-xl font-medium tracking-wide text-neutral-700 uppercase">
            {personalInfo.jobTitle}
          </p>
        )}

        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
          {personalInfo.email && (
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faEnvelope} /> {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faPhone} /> {personalInfo.phone}
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {personalInfo.location}
            </span>
          )}
        </div>

        <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} className="flex items-center gap-1">
              <FontAwesomeIcon icon={faLinkedin} />{" "}
              {formatUrl(personalInfo.linkedin)}
            </a>
          )}
          {personalInfo.github && (
            <a href={personalInfo.github} className="flex items-center gap-1">
              <FontAwesomeIcon icon={faGithub} />{" "}
              {formatUrl(personalInfo.github)}
            </a>
          )}
          {personalInfo.portfolio && (
            <a
              href={personalInfo.portfolio}
              className="flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faGlobe} />{" "}
              {formatUrl(personalInfo.portfolio)}
            </a>
          )}
        </div>
      </header>

      <div className="grid grid-cols-3 gap-10">
        {/* LEFT COLUMN */}
        <div className="col-span-2 space-y-8">
          {/* PROFESSIONAL SUMMARY */}
          {personalInfo.summary && (
            <section>
              <h2 className="mb-2 flex items-center gap-2 border-b border-neutral-200 pb-1 text-lg font-semibold text-neutral-900">
                <FontAwesomeIcon icon={faUser} /> Professional Summary
              </h2>
              <p className="text-justify text-sm text-neutral-700">
                {personalInfo.summary}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}
          {experiences.length > 0 && (
            <section>
              <h2 className="mb-4 flex items-center gap-2 border-b border-neutral-200 pb-1 text-lg font-semibold text-neutral-900">
                <FontAwesomeIcon icon={faBriefcase} /> Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-neutral-900">
                          {exp.position}
                        </h3>
                        <p className="flex items-center gap-1 text-sm text-neutral-600">
                          <FontAwesomeIcon icon={faBuilding} className="w-3" />{" "}
                          {exp.company}{" "}
                          {exp.workLocation && `• ${exp.workLocation}`}
                        </p>
                      </div>
                      <div className="text-right text-sm text-neutral-500">
                        <p className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faCalendar} className="w-3" />{" "}
                          {exp.startDate}{" "}
                          {exp.endDate ? `- ${exp.endDate}` : "- Present"}
                        </p>
                        {exp.employmentType && (
                          <p className="text-xs capitalize">
                            {exp.employmentType}
                          </p>
                        )}
                      </div>
                    </div>
                    {exp.workDescription && (
                      <p className="text-justify text-sm text-neutral-700">
                        {exp.workDescription}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION */}
          {education.length > 0 && (
            <section>
              <h2 className="mb-4 flex items-center gap-2 border-b border-neutral-200 pb-1 text-lg font-semibold text-neutral-900">
                <FontAwesomeIcon icon={faGraduationCap} /> Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-neutral-900">
                        {edu.degree}
                      </h3>
                      <p className="flex items-center gap-1 text-sm text-neutral-600">
                        <FontAwesomeIcon icon={faUniversity} className="w-3" />{" "}
                        {edu.institution}{" "}
                        {edu.educationLocation && `• ${edu.educationLocation}`}
                      </p>
                      {edu.field && (
                        <p className="text-sm text-neutral-600">{edu.field}</p>
                      )}
                    </div>
                    <div className="text-right text-sm text-neutral-500">
                      <p className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faCalendar} className="w-3" />{" "}
                        {edu.graduationDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          {/* SKILLS */}
          {(skills.technicalSkills?.length > 0 ||
            skills.professionalSkills?.length > 0 ||
            skills.languages?.length > 0) && (
            <section>
              <h2 className="mb-3 flex items-center gap-2 border-b border-neutral-200 pb-1 text-lg font-semibold text-neutral-900">
                <FontAwesomeIcon icon={faTools} /> Skills
              </h2>

              {/* TECHNICAL */}
              {skills.technicalSkills?.length > 0 && (
                <div className="mb-4">
                  <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <FontAwesomeIcon icon={faLaptopCode} /> Technical
                  </h3>
                  <div className="space-y-1 text-sm text-neutral-700">
                    {skills.technicalSkills.map((skill) => (
                      <div key={skill.id} className="flex justify-between">
                        <span>{skill.name}</span>
                        <span className="text-neutral-500 capitalize">
                          {getProficiencyText(skill.proficiency)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PROFESSIONAL */}
              {skills.professionalSkills?.length > 0 && (
                <div className="mb-4">
                  <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <FontAwesomeIcon icon={faUserTie} /> Professional
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.professionalSkills.map((skill) => (
                      <span
                        key={skill.id}
                        className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* LANGUAGES */}
              {skills.languages?.length > 0 && (
                <div>
                  <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    <FontAwesomeIcon icon={faLanguage} /> Languages
                  </h3>
                  <div className="space-y-1 text-sm text-neutral-700">
                    {skills.languages.map((lang) => (
                      <div key={lang.id} className="flex justify-between">
                        <span>{lang.name}</span>
                        <span className="text-neutral-500 capitalize">
                          {getProficiencyText(lang.proficiency)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* CERTIFICATIONS */}
          {certifications.length > 0 && (
            <section>
              <h2 className="mb-3 flex items-center gap-2 border-b border-neutral-200 pb-1 text-lg font-semibold text-neutral-900">
                <FontAwesomeIcon icon={faCertificate} /> Certifications
              </h2>
              <div className="space-y-3 text-sm text-neutral-700">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="border-b border-neutral-100 pb-2 last:border-b-0"
                  >
                    <div className="font-semibold text-neutral-900">
                      {cert.certificationName}
                    </div>
                    <div>{cert.issuingOrg}</div>
                    <div className="mt-1 flex items-center gap-1 text-xs text-neutral-500">
                      <FontAwesomeIcon icon={faCalendar} /> {cert.certIssueDate}{" "}
                      {cert.certExpiryDate && `- ${cert.certExpiryDate}`}
                    </div>
                    {cert.credentialUrl && (
                      <div className="mt-1 flex items-center gap-1 text-xs text-neutral-600">
                        <FontAwesomeIcon icon={faGlobe} />{" "}
                        {formatUrl(cert.credentialUrl)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVTemplate;

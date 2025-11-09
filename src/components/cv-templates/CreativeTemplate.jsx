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
  faCertificate,
  faGlobe,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { formatUrl, getProficiencyText } from "@utils/utils";

const CreativeTemplate = ({ cvData }) => {
  const {
    personalInfo = {},
    experiences = [],
    education = [],
    skills = {},
  } = cvData || {};
  const certifications = skills.certifications || [];

  return (
    <div className="flex min-h-[1123px] font-sans text-sm">
      {/* LEFT SIDEBAR */}
      <aside className="flex w-1/3 flex-col justify-between bg-blue-600 p-6 text-white">
        <div>
          <h1 className="text-3xl font-bold uppercase">
            {personalInfo.fullName || "Your Name"}
          </h1>
          {personalInfo.jobTitle && (
            <p className="mt-1 text-base">{personalInfo.jobTitle}</p>
          )}

          <div className="mt-4 space-y-1">
            {personalInfo.email && (
              <p className="flex items-center gap-1">
                <FontAwesomeIcon icon={faEnvelope} /> {personalInfo.email}
              </p>
            )}
            {personalInfo.phone && (
              <p className="flex items-center gap-1">
                <FontAwesomeIcon icon={faPhone} /> {personalInfo.phone}
              </p>
            )}
            {personalInfo.location && (
              <p className="flex items-center gap-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                {personalInfo.location}
              </p>
            )}
          </div>

          <div className="mt-3 space-y-1">
            {personalInfo.linkedin && (
              <p className="flex items-center gap-1">
                <FontAwesomeIcon icon={faLinkedin} />{" "}
                {formatUrl(personalInfo.linkedin)}
              </p>
            )}
            {personalInfo.github && (
              <p className="flex items-center gap-1">
                <FontAwesomeIcon icon={faGithub} />{" "}
                {formatUrl(personalInfo.github)}
              </p>
            )}
            {personalInfo.portfolio && (
              <p className="flex items-center gap-1">
                <FontAwesomeIcon icon={faGlobe} />{" "}
                {formatUrl(personalInfo.portfolio)}
              </p>
            )}
          </div>

          {/* Sidebar Skills */}
          {(skills.technicalSkills?.length > 0 ||
            skills.languages?.length > 0) && (
            <div className="mt-6">
              <h2 className="mb-1 flex items-center gap-1 border-b border-white pb-1 font-semibold">
                <FontAwesomeIcon icon={faTools} /> Skills
              </h2>

              {/* Technical */}
              {skills.technicalSkills?.length > 0 && (
                <div className="mb-2">
                  {skills.technicalSkills.map((skill) => (
                    <div key={skill.id} className="mb-1">
                      <p className="flex justify-between">
                        <span>{skill.name}</span>
                        <span className="text-xs">
                          {getProficiencyText(skill.proficiency)}
                        </span>
                      </p>
                      <div className="bg-opacity-30 h-1 w-full rounded bg-white">
                        <div
                          className="h-1 rounded bg-white"
                          style={{ width: `${skill.proficiency || 50}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Languages */}
              {skills.languages?.length > 0 && (
                <div>
                  {skills.languages.map((lang) => (
                    <div key={lang.id} className="mb-1">
                      <p className="flex justify-between">
                        <span>{lang.name}</span>
                        <span className="text-xs">
                          {getProficiencyText(lang.proficiency)}
                        </span>
                      </p>
                      <div className="bg-opacity-30 h-1 w-full rounded bg-white">
                        <div
                          className="h-1 rounded bg-white"
                          style={{ width: `${lang.proficiency || 50}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Professional Skills */}
        {skills.professionalSkills?.length > 0 && (
          <div className="mt-4">
            <h2 className="mb-1 flex items-center gap-1 border-b border-white pb-1 font-semibold">
              <FontAwesomeIcon icon={faUserTie} /> Professional
            </h2>
            <p className="flex flex-wrap gap-1">
              {skills.professionalSkills.map((s) => (
                <span
                  key={s.id}
                  className="rounded-full bg-white px-2 py-0.5 text-xs text-blue-700"
                >
                  {s.name}
                </span>
              ))}
            </p>
          </div>
        )}
      </aside>

      {/* MAIN CONTENT */}
      <main className="w-2/3 space-y-6 p-6">
        {/* Professional Summary */}
        {personalInfo.summary && (
          <section>
            <h2 className="mb-1 flex items-center gap-1 text-xl font-bold text-blue-600">
              <FontAwesomeIcon icon={faUser} /> Professional Summary
            </h2>
            <p className="text-sm text-neutral-800">{personalInfo.summary}</p>
          </section>
        )}

        {/* EXPERIENCE */}
        {experiences.length > 0 && (
          <section>
            <h2 className="mb-2 flex items-center gap-1 text-xl font-bold text-blue-600">
              <FontAwesomeIcon icon={faBriefcase} /> Experience
            </h2>
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="mb-2 border-l-4 border-blue-500 bg-blue-50 p-3 shadow-sm"
              >
                <h3 className="font-semibold text-neutral-900">
                  {exp.position}
                </h3>
                <p className="flex items-center gap-1 text-sm text-neutral-600">
                  <FontAwesomeIcon icon={faBuilding} /> {exp.company}{" "}
                  {exp.workLocation && `• ${exp.workLocation}`}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-neutral-500">
                  <FontAwesomeIcon icon={faCalendar} /> {exp.startDate}{" "}
                  {exp.endDate ? `- ${exp.endDate}` : "- Present"}
                </p>
                {exp.workDescription && (
                  <p className="mt-1 text-justify text-sm text-neutral-700">
                    {exp.workDescription}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <section>
            <h2 className="mb-2 flex items-center gap-1 text-xl font-bold text-blue-600">
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </h2>
            {education.map((edu, i) => (
              <div
                key={i}
                className="mb-2 flex justify-between border-l-4 border-blue-500 bg-blue-50 p-3 shadow-sm"
              >
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    {edu.degree}
                  </h3>
                  <p className="flex items-center gap-1 text-sm text-neutral-600">
                    <FontAwesomeIcon icon={faUniversity} /> {edu.institution}{" "}
                    {edu.educationLocation && `• ${edu.educationLocation}`}
                  </p>
                  {edu.field && (
                    <p className="text-sm text-neutral-600">{edu.field}</p>
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm text-neutral-500">
                  <FontAwesomeIcon icon={faCalendar} /> {edu.graduationDate}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* CERTIFICATIONS */}
        {certifications.length > 0 && (
          <section>
            <h2 className="mb-2 flex items-center gap-1 text-xl font-bold text-blue-600">
              <FontAwesomeIcon icon={faCertificate} /> Certifications
            </h2>
            <div className="space-y-2">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className=" border-l-4 border-blue-500 bg-blue-50 p-2 shadow-sm"
                >
                  <div className="font-semibold">{cert.certificationName}</div>
                  {cert.issuingOrg && (
                    <div className="text-sm">{cert.issuingOrg}</div>
                  )}
                  <div className="mt-0.5 flex items-center gap-1 text-xs text-neutral-600">
                    <FontAwesomeIcon icon={faCalendar} /> {cert.certIssueDate}{" "}
                    {cert.certExpiryDate && `- ${cert.certExpiryDate}`}
                  </div>
                  {cert.credentialUrl && (
                    <div className="mt-0.5 flex items-center gap-1 text-xs text-neutral-700">
                      <FontAwesomeIcon icon={faGlobe} />{" "}
                      {formatUrl(cert.credentialUrl)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default CreativeTemplate;

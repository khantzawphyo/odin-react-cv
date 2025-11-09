import usePersonalInfoStore from "@stores/usePersonalInfoStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faBriefcase,
  faFileLines,
  faLink,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Input, Textarea } from "@components/ui";

const PersonalInfoSection = () => {
  const personalInfo = usePersonalInfoStore((state) => state.personalInfo);
  const updatePersonalField = usePersonalInfoStore(
    (state) => state.updatePersonalField,
  );

  return (
    <section className="space-y-6">
      <h3 className="text-lg font-semibold text-neutral-900">
        Personal Information
      </h3>

      <div className="space-y-8">
        <div className="space-y-6">
          <h4 className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray-900 uppercase">
            <FontAwesomeIcon icon={faUser} className="text-xs text-gray-400" />
            Basic Details
          </h4>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Full Name"
              id="fullName"
              type="text"
              placeholder="John Doe"
              required
              value={personalInfo.fullName}
              onChange={(e) => updatePersonalField("fullName", e.target.value)}
              icon={faUser}
            />

            <Input
              label="Professional Title"
              id="jobTitle"
              type="text"
              placeholder="e.g., Frontend Developer"
              optional
              value={personalInfo.jobTitle}
              onChange={(e) => updatePersonalField("jobTitle", e.target.value)}
              icon={faBriefcase}
            />

            <Input
              label="Email Address"
              id="email"
              type="email"
              placeholder="john.doe@email.com"
              required
              value={personalInfo.email}
              onChange={(e) => updatePersonalField("email", e.target.value)}
              icon={faEnvelope}
            />

            <Input
              label="Phone Number"
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              required
              value={personalInfo.phone}
              onChange={(e) => updatePersonalField("phone", e.target.value)}
              icon={faPhone}
            />

            <Input
              label="Location"
              id="location"
              type="text"
              placeholder="City, Country"
              required
              value={personalInfo.location}
              onChange={(e) => updatePersonalField("location", e.target.value)}
              icon={faMapMarkerAlt}
              className="md:col-span-2"
            />
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray-900 uppercase">
            <FontAwesomeIcon
              icon={faFileLines}
              className="text-xs text-gray-400"
            />
            Professional Summary
          </h4>

          <Textarea
            label="About You"
            id="summary"
            placeholder="Briefly describe your professional background, key skills, and career objectives. This is your elevator pitch to potential employers."
            optional
            value={personalInfo.summary}
            onChange={(e) => updatePersonalField("summary", e.target.value)}
            rows={5}
          />
        </div>

        {/* Online Profiles */}
        <div className="space-y-6">
          <h4 className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray-900 uppercase">
            <FontAwesomeIcon icon={faLink} className="text-xs text-gray-400" />
            Online Profiles
          </h4>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label={
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-sm text-[#0077b5]"
                  />
                  LinkedIn
                </span>
              }
              id="linkedin"
              type="url"
              placeholder="https://linkedin.com/in/username"
              optional
              value={personalInfo.linkedin}
              onChange={(e) => updatePersonalField("linkedin", e.target.value)}
            />

            <Input
              label={
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-sm text-gray-900"
                  />
                  GitHub
                </span>
              }
              id="github"
              type="url"
              placeholder="https://github.com/username"
              optional
              value={personalInfo.github}
              onChange={(e) => updatePersonalField("github", e.target.value)}
            />

            <Input
              label={
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-sm text-gray-900"
                  />
                  Portfolio Website
                </span>
              }
              id="portfolio"
              type="url"
              placeholder="https://yourwebsite.com"
              optional
              value={personalInfo.portfolio}
              onChange={(e) => updatePersonalField("portfolio", e.target.value)}
              icon={faLink}
              className="md:col-span-2"
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-100 p-4">
        <div className="flex items-start gap-3">
          <p className="text-sm text-amber-700">
            ⚠️ <span className="font-medium">Required fields</span> will be
            displayed on your CV. Complete all sections for the best results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoSection;

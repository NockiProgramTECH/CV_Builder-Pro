import React from 'react';
import { Mail, Phone, MapPin, Globe, BookOpen, Award } from 'lucide-react';

const AcademicTemplate = ({ cvData, theme }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const cvStyle = {
    '--cv-primary': theme.primary,
    '--cv-secondary': theme.secondary,
    '--cv-accent': theme.accent,
    '--cv-background': theme.background,
    '--cv-text': theme.text,
  };

  return (
    <div className="academic-template bg-white shadow-lg font-serif" style={cvStyle}>
      <div className="p-8 space-y-6 max-w-4xl mx-auto">
        {/* Header académique */}
        <header className="text-center border-b-2 pb-6" style={{ borderColor: theme.primary }}>
          <h1 className="text-4xl font-bold mb-2" style={{ color: theme.text }}>
            {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
          </h1>
          
          {cvData.personalInfo.title && (
            <p className="text-xl text-gray-600 mb-4 italic">
              {cvData.personalInfo.title}
            </p>
          )}
          
          {/* Contact académique */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            {cvData.personalInfo.email && (
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>{cvData.personalInfo.email}</span>
              </div>
            )}
            {cvData.personalInfo.phone && (
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>{cvData.personalInfo.phone}</span>
              </div>
            )}
            {cvData.personalInfo.address && (
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{cvData.personalInfo.address}</span>
              </div>
            )}
          </div>
        </header>

        {/* Research Interests / Profil */}
        {cvData.personalInfo.summary && (
          <section>
            <h2 className="text-xl font-bold mb-3 uppercase tracking-wide" style={{ color: theme.primary }}>
              Research Interests
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {cvData.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Education - priorité en académique */}
        {cvData.education.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide flex items-center" style={{ color: theme.primary }}>
              <BookOpen className="w-5 h-5 mr-2" />
              Education
            </h2>
            <div className="space-y-4">
              {cvData.education.map((education) => (
                <div key={education.id} className="border-l-2 pl-4" style={{ borderColor: theme.primary }}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold" style={{ color: theme.text }}>
                        {education.degree}
                      </h3>
                      <p className="font-medium text-gray-800">{education.institution}</p>
                      {education.location && (
                        <p className="text-gray-600 text-sm italic">{education.location}</p>
                      )}
                      {education.description && (
                        <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                          {education.description}
                        </p>
                      )}
                    </div>
                    <div className="text-right text-sm text-gray-600 ml-4">
                      <span className="font-medium">
                        {formatDate(education.startDate)} - {formatDate(education.endDate)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Professional Experience */}
        {cvData.experiences.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4 uppercase tracking-wide flex items-center" style={{ color: theme.primary }}>
              <Award className="w-5 h-5 mr-2" />
              Professional Experience
            </h2>
            <div className="space-y-4">
              {cvData.experiences.map((experience) => (
                <div key={experience.id} className="border-l-2 pl-4" style={{ borderColor: theme.primary }}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold" style={{ color: theme.text }}>
                        {experience.position}
                      </h3>
                      <p className="font-medium text-gray-800">{experience.company}</p>
                      {experience.location && (
                        <p className="text-gray-600 text-sm italic">{experience.location}</p>
                      )}
                      {experience.description && (
                        <p className="text-gray-700 text-sm mt-2 leading-relaxed text-justify">
                          {experience.description}
                        </p>
                      )}
                    </div>
                    <div className="text-right text-sm text-gray-600 ml-4">
                      <span className="font-medium">
                        {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills & Languages en deux colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          {cvData.skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4 uppercase tracking-wide" style={{ color: theme.primary }}>
                Technical Skills
              </h2>
              <div className="space-y-2">
                {cvData.skills.map((skill) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="font-medium" style={{ color: theme.text }}>{skill.name}</span>
                    {skill.level && (
                      <span className="text-sm text-gray-600 italic">{skill.level}</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {cvData.languages.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4 uppercase tracking-wide" style={{ color: theme.primary }}>
                Languages
              </h2>
              <div className="space-y-2">
                {cvData.languages.map((language) => (
                  <div key={language.id} className="flex justify-between items-center">
                    <span className="font-medium" style={{ color: theme.text }}>{language.name}</span>
                    {language.level && (
                      <span className="text-sm text-gray-600 italic">{language.level}</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Interests */}
        {cvData.interests.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-3 uppercase tracking-wide" style={{ color: theme.primary }}>
              Research Interests & Hobbies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {cvData.interests.join(', ')}
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default AcademicTemplate;
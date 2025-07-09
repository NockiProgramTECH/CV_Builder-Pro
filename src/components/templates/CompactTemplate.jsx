import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const CompactTemplate = ({ cvData, theme }) => {
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
    <div className="compact-template bg-white shadow-lg font-sans" style={cvStyle}>
      <div className="p-6 space-y-4 max-w-4xl mx-auto">
        {/* Header compact */}
        <header className="flex items-center justify-between border-b pb-4" style={{ borderColor: theme.primary }}>
          <div className="flex items-center space-x-4">
            {cvData.personalInfo.photo && (
              <div className="w-16 h-16 rounded-full overflow-hidden border-2" style={{ borderColor: theme.primary }}>
                <img 
                  src={cvData.personalInfo.photo} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div>
              <h1 className="text-2xl font-bold" style={{ color: theme.text }}>
                {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
              </h1>
              {cvData.personalInfo.title && (
                <p className="text-lg" style={{ color: theme.primary }}>
                  {cvData.personalInfo.title}
                </p>
              )}
            </div>
          </div>
          
          {/* Contact compact */}
          <div className="text-right text-sm space-y-1">
            {cvData.personalInfo.email && (
              <div className="flex items-center justify-end space-x-1">
                <Mail className="w-3 h-3" />
                <span>{cvData.personalInfo.email}</span>
              </div>
            )}
            {cvData.personalInfo.phone && (
              <div className="flex items-center justify-end space-x-1">
                <Phone className="w-3 h-3" />
                <span>{cvData.personalInfo.phone}</span>
              </div>
            )}
            {cvData.personalInfo.address && (
              <div className="flex items-center justify-end space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{cvData.personalInfo.address}</span>
              </div>
            )}
          </div>
        </header>

        {/* Summary compact */}
        {cvData.personalInfo.summary && (
          <section>
            <p className="text-gray-700 leading-relaxed text-sm text-justify">
              {cvData.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience compact */}
        {cvData.experiences.length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-3 uppercase tracking-wide" style={{ color: theme.primary }}>
              Experience
            </h2>
            <div className="space-y-3">
              {cvData.experiences.map((experience) => (
                <div key={experience.id} className="border-l-2 pl-3" style={{ borderColor: theme.primary }}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-bold" style={{ color: theme.text }}>
                        {experience.position} • {experience.company}
                      </h3>
                      {experience.location && (
                        <p className="text-gray-600 text-xs">{experience.location}</p>
                      )}
                      {experience.description && (
                        <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                          {experience.description}
                        </p>
                      )}
                    </div>
                    <div className="text-xs text-gray-600 ml-4 flex-shrink-0">
                      {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education compact */}
        {cvData.education.length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-3 uppercase tracking-wide" style={{ color: theme.primary }}>
              Education
            </h2>
            <div className="space-y-2">
              {cvData.education.map((education) => (
                <div key={education.id} className="border-l-2 pl-3" style={{ borderColor: theme.primary }}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-bold" style={{ color: theme.text }}>
                        {education.degree} • {education.institution}
                      </h3>
                      {education.location && (
                        <p className="text-gray-600 text-xs">{education.location}</p>
                      )}
                      {education.description && (
                        <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                          {education.description}
                        </p>
                      )}
                    </div>
                    <div className="text-xs text-gray-600 ml-4 flex-shrink-0">
                      {formatDate(education.startDate)} - {formatDate(education.endDate)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills, Languages, Interests en ligne */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Skills */}
          {cvData.skills.length > 0 && (
            <section>
              <h2 className="text-lg font-bold mb-2 uppercase tracking-wide" style={{ color: theme.primary }}>
                Skills
              </h2>
              <div className="space-y-1">
                {cvData.skills.map((skill) => (
                  <div key={skill.id} className="text-sm">
                    <span className="font-medium" style={{ color: theme.text }}>{skill.name}</span>
                    {skill.level && (
                      <span className="text-gray-600 text-xs ml-2">({skill.level})</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {cvData.languages.length > 0 && (
            <section>
              <h2 className="text-lg font-bold mb-2 uppercase tracking-wide" style={{ color: theme.primary }}>
                Languages
              </h2>
              <div className="space-y-1">
                {cvData.languages.map((language) => (
                  <div key={language.id} className="text-sm">
                    <span className="font-medium" style={{ color: theme.text }}>{language.name}</span>
                    {language.level && (
                      <span className="text-gray-600 text-xs ml-2">({language.level})</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {cvData.interests.length > 0 && (
            <section>
              <h2 className="text-lg font-bold mb-2 uppercase tracking-wide" style={{ color: theme.primary }}>
                Interests
              </h2>
              <div className="text-sm text-gray-700">
                {cvData.interests.join(', ')}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompactTemplate;
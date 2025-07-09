import React from 'react';
import { Mail, Phone, MapPin, Briefcase, TrendingUp, Users } from 'lucide-react';

const ExecutiveTemplate = ({ cvData, theme }) => {
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

  const cvStyle = {
    '--cv-primary': theme.primary,
    '--cv-secondary': theme.secondary,
    '--cv-accent': theme.accent,
    '--cv-background': theme.background,
    '--cv-text': theme.text,
  };

  return (
    <div className="executive-template bg-white shadow-xl" style={cvStyle}>
      {/* Header exécutif avec bande colorée */}
      <div 
        className="h-3 w-full"
        style={{ backgroundColor: theme.primary }}
      />
      
      <div className="p-10 space-y-8">
        {/* En-tête exécutif */}
        <header className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-bold mb-3" style={{ color: theme.text }}>
              {cvData.personalInfo.firstName}
              <br />
              <span style={{ color: theme.primary }}>{cvData.personalInfo.lastName}</span>
            </h1>
            
            {cvData.personalInfo.title && (
              <p className="text-2xl text-gray-600 font-light mb-4">
                {cvData.personalInfo.title}
              </p>
            )}
            
            {cvData.personalInfo.summary && (
              <p className="text-gray-700 leading-relaxed text-lg">
                {cvData.personalInfo.summary}
              </p>
            )}
          </div>
          
          <div className="space-y-4">
            {cvData.personalInfo.photo && (
              <div className="w-40 h-40 mx-auto lg:ml-auto lg:mr-0 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={cvData.personalInfo.photo} 
                  alt="Executive Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Contact exécutif */}
            <div className="space-y-3 text-center lg:text-right">
              {cvData.personalInfo.email && (
                <div className="flex items-center justify-center lg:justify-end space-x-2">
                  <Mail className="w-4 h-4" style={{ color: theme.primary }} />
                  <span className="text-gray-700">{cvData.personalInfo.email}</span>
                </div>
              )}
              {cvData.personalInfo.phone && (
                <div className="flex items-center justify-center lg:justify-end space-x-2">
                  <Phone className="w-4 h-4" style={{ color: theme.primary }} />
                  <span className="text-gray-700">{cvData.personalInfo.phone}</span>
                </div>
              )}
              {cvData.personalInfo.address && (
                <div className="flex items-center justify-center lg:justify-end space-x-2">
                  <MapPin className="w-4 h-4" style={{ color: theme.primary }} />
                  <span className="text-gray-700">{cvData.personalInfo.address}</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Ligne de séparation */}
        <div className="h-px bg-gray-300 my-8" />

        {/* Executive Experience */}
        {cvData.experiences.length > 0 && (
          <section>
            <div className="flex items-center mb-6">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                style={{ backgroundColor: theme.primary }}
              >
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: theme.primary }}>
                EXECUTIVE EXPERIENCE
              </h2>
            </div>
            
            <div className="space-y-8">
              {cvData.experiences.map((experience, index) => (
                <div key={experience.id} className="relative">
                  {index !== cvData.experiences.length - 1 && (
                    <div 
                      className="absolute left-6 top-16 w-0.5 h-full"
                      style={{ backgroundColor: theme.primary + '30' }}
                    />
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-2"
                      style={{ backgroundColor: theme.primary }}
                    >
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1" style={{ color: theme.text }}>
                              {experience.position}
                            </h3>
                            <p className="text-xl font-semibold" style={{ color: theme.primary }}>
                              {experience.company}
                            </p>
                            {experience.location && (
                              <p className="text-gray-600">{experience.location}</p>
                            )}
                          </div>
                          <div 
                            className="px-4 py-2 rounded-lg text-white font-semibold"
                            style={{ backgroundColor: theme.primary }}
                          >
                            {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                          </div>
                        </div>
                        
                        {experience.description && (
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {experience.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education & Qualifications */}
        {cvData.education.length > 0 && (
          <section>
            <div className="flex items-center mb-6">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                style={{ backgroundColor: theme.secondary }}
              >
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: theme.secondary }}>
                EDUCATION & QUALIFICATIONS
              </h2>
            </div>
            
            <div className="grid gap-6">
              {cvData.education.map((education) => (
                <div key={education.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1" style={{ color: theme.text }}>
                        {education.degree}
                      </h3>
                      <p className="text-lg font-semibold" style={{ color: theme.secondary }}>
                        {education.institution}
                      </p>
                      {education.location && (
                        <p className="text-gray-600">{education.location}</p>
                      )}
                      {education.description && (
                        <p className="text-gray-700 mt-3 leading-relaxed">
                          {education.description}
                        </p>
                      )}
                    </div>
                    <div 
                      className="px-4 py-2 rounded-lg text-white font-semibold"
                      style={{ backgroundColor: theme.secondary }}
                    >
                      {formatDate(education.startDate)} - {formatDate(education.endDate)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Core Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          {cvData.skills.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6" style={{ color: theme.primary }}>
                CORE COMPETENCIES
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {cvData.skills.map((skill) => (
                  <div 
                    key={skill.id} 
                    className="p-4 rounded-lg border-l-4 bg-gray-50"
                    style={{ borderColor: theme.primary }}
                  >
                    <div className="font-bold text-lg" style={{ color: theme.text }}>
                      {skill.name}
                    </div>
                    {skill.level && (
                      <div className="text-gray-600 mt-1">{skill.level}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages & Interests */}
          <div className="space-y-8">
            {/* Languages */}
            {cvData.languages.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6" style={{ color: theme.secondary }}>
                  LANGUAGES
                </h2>
                <div className="space-y-3">
                  {cvData.languages.map((language) => (
                    <div 
                      key={language.id} 
                      className="p-4 rounded-lg bg-gray-50 border-l-4"
                      style={{ borderColor: theme.secondary }}
                    >
                      <div className="font-bold" style={{ color: theme.text }}>
                        {language.name}
                      </div>
                      {language.level && (
                        <div className="text-gray-600 text-sm">{language.level}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interests */}
            {cvData.interests.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6" style={{ color: theme.accent }}>
                  INTERESTS
                </h2>
                <div className="flex flex-wrap gap-3">
                  {cvData.interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full text-white font-medium"
                      style={{ backgroundColor: theme.accent }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTemplate;
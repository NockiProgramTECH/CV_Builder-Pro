import React from 'react';
import { Mail, Phone, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

const ElegantTemplate = ({ cvData, theme }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const cvStyle = {
    '--cv-primary': theme.primary,
    '--cv-secondary': theme.secondary,
    '--cv-accent': theme.accent,
    '--cv-background': theme.background,
    '--cv-text': theme.text,
  };

  return (
    <div className="elegant-template bg-white shadow-xl font-serif" style={cvStyle}>
      <div className="p-10 space-y-8 max-w-5xl mx-auto">
        {/* Header élégant */}
        <header className="text-center space-y-6">
          {cvData.personalInfo.photo && (
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: theme.primary }}>
              <img 
                src={cvData.personalInfo.photo} 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div>
            <h1 className="text-5xl font-light tracking-wider mb-3" style={{ color: theme.text }}>
              {cvData.personalInfo.firstName}
            </h1>
            <h1 className="text-5xl font-bold tracking-wider mb-4" style={{ color: theme.primary }}>
              {cvData.personalInfo.lastName}
            </h1>
            
            {cvData.personalInfo.title && (
              <div className="relative">
                <div 
                  className="h-px w-24 mx-auto mb-4"
                  style={{ backgroundColor: theme.primary }}
                />
                <p className="text-xl text-gray-600 font-light italic tracking-wide">
                  {cvData.personalInfo.title}
                </p>
                <div 
                  className="h-px w-24 mx-auto mt-4"
                  style={{ backgroundColor: theme.primary }}
                />
              </div>
            )}
          </div>
          
          {/* Contact élégant */}
          <div className="flex justify-center space-x-8 text-gray-700">
            {cvData.personalInfo.email && (
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" style={{ color: theme.primary }} />
                <span className="font-light">{cvData.personalInfo.email}</span>
              </div>
            )}
            {cvData.personalInfo.phone && (
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" style={{ color: theme.primary }} />
                <span className="font-light">{cvData.personalInfo.phone}</span>
              </div>
            )}
            {cvData.personalInfo.address && (
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" style={{ color: theme.primary }} />
                <span className="font-light">{cvData.personalInfo.address}</span>
              </div>
            )}
          </div>
        </header>

        {/* Summary élégant */}
        {cvData.personalInfo.summary && (
          <section className="text-center">
            <div 
              className="w-16 h-px mx-auto mb-6"
              style={{ backgroundColor: theme.primary }}
            />
            <p className="text-lg text-gray-700 leading-relaxed font-light max-w-4xl mx-auto italic">
              "{cvData.personalInfo.summary}"
            </p>
            <div 
              className="w-16 h-px mx-auto mt-6"
              style={{ backgroundColor: theme.primary }}
            />
          </section>
        )}

        {/* Experience élégante */}
        {cvData.experiences.length > 0 && (
          <section>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div 
                  className="h-px w-20"
                  style={{ backgroundColor: theme.primary }}
                />
                <Award className="w-6 h-6 mx-4" style={{ color: theme.primary }} />
                <div 
                  className="h-px w-20"
                  style={{ backgroundColor: theme.primary }}
                />
              </div>
              <h2 className="text-3xl font-light tracking-wider" style={{ color: theme.primary }}>
                PROFESSIONAL EXPERIENCE
              </h2>
            </div>
            
            <div className="space-y-8">
              {cvData.experiences.map((experience, index) => (
                <div key={experience.id} className="text-center">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold mb-2" style={{ color: theme.text }}>
                      {experience.position}
                    </h3>
                    <p className="text-xl font-light" style={{ color: theme.primary }}>
                      {experience.company}
                    </p>
                    <div className="flex justify-center items-center space-x-4 text-gray-600 mt-2">
                      {experience.location && <span className="font-light">{experience.location}</span>}
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-light">
                          {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {experience.description && (
                    <div className="max-w-3xl mx-auto">
                      <p className="text-gray-700 leading-relaxed font-light text-justify">
                        {experience.description}
                      </p>
                    </div>
                  )}
                  
                  {index !== cvData.experiences.length - 1 && (
                    <div 
                      className="w-12 h-px mx-auto mt-8"
                      style={{ backgroundColor: theme.primary + '50' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education élégante */}
        {cvData.education.length > 0 && (
          <section>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div 
                  className="h-px w-20"
                  style={{ backgroundColor: theme.secondary }}
                />
                <BookOpen className="w-6 h-6 mx-4" style={{ color: theme.secondary }} />
                <div 
                  className="h-px w-20"
                  style={{ backgroundColor: theme.secondary }}
                />
              </div>
              <h2 className="text-3xl font-light tracking-wider" style={{ color: theme.secondary }}>
                EDUCATION
              </h2>
            </div>
            
            <div className="space-y-6">
              {cvData.education.map((education, index) => (
                <div key={education.id} className="text-center">
                  <h3 className="text-xl font-semibold mb-1" style={{ color: theme.text }}>
                    {education.degree}
                  </h3>
                  <p className="text-lg font-light" style={{ color: theme.secondary }}>
                    {education.institution}
                  </p>
                  <div className="flex justify-center items-center space-x-4 text-gray-600 mt-2">
                    {education.location && <span className="font-light">{education.location}</span>}
                    <span>•</span>
                    <span className="font-light">
                      {formatDate(education.startDate)} - {formatDate(education.endDate)}
                    </span>
                  </div>
                  
                  {education.description && (
                    <p className="text-gray-700 leading-relaxed font-light max-w-2xl mx-auto mt-3">
                      {education.description}
                    </p>
                  )}
                  
                  {index !== cvData.education.length - 1 && (
                    <div 
                      className="w-8 h-px mx-auto mt-6"
                      style={{ backgroundColor: theme.secondary + '50' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills, Languages, Interests élégants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skills */}
          {cvData.skills.length > 0 && (
            <section className="text-center">
              <h2 className="text-2xl font-light tracking-wider mb-6" style={{ color: theme.primary }}>
                EXPERTISE
              </h2>
              <div className="space-y-3">
                {cvData.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="font-medium" style={{ color: theme.text }}>{skill.name}</div>
                    {skill.level && (
                      <div className="text-sm text-gray-600 font-light italic">{skill.level}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {cvData.languages.length > 0 && (
            <section className="text-center">
              <h2 className="text-2xl font-light tracking-wider mb-6" style={{ color: theme.secondary }}>
                LANGUAGES
              </h2>
              <div className="space-y-3">
                {cvData.languages.map((language) => (
                  <div key={language.id}>
                    <div className="font-medium" style={{ color: theme.text }}>{language.name}</div>
                    {language.level && (
                      <div className="text-sm text-gray-600 font-light italic">{language.level}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Interests */}
          {cvData.interests.length > 0 && (
            <section className="text-center">
              <h2 className="text-2xl font-light tracking-wider mb-6" style={{ color: theme.accent }}>
                INTERESTS
              </h2>
              <div className="space-y-2">
                {cvData.interests.map((interest, index) => (
                  <div key={index} className="font-light text-gray-700">
                    {interest}
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

export default ElegantTemplate;
import React from 'react';
import { Mail, Phone, MapPin, User, Briefcase, GraduationCap, Code, Globe } from 'lucide-react';

const TwoColumnTemplate = ({ cvData, theme }) => {
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
    <div className="two-column-template bg-white shadow-lg" style={cvStyle}>
      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen">
        {/* Colonne gauche - Sidebar */}
        <div 
          className="lg:col-span-2 p-8 text-white"
          style={{ backgroundColor: theme.primary }}
        >
          {/* Photo et nom */}
          <div className="text-center mb-8">
            {cvData.personalInfo.photo && (
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={cvData.personalInfo.photo} 
                  alt="Profile Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <h1 className="text-2xl font-bold mb-2">
              {cvData.personalInfo.firstName}
              <br />
              {cvData.personalInfo.lastName}
            </h1>
            
            {cvData.personalInfo.title && (
              <p className="text-lg opacity-90 font-light">
                {cvData.personalInfo.title}
              </p>
            )}
          </div>

          {/* Contact */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <User className="w-5 h-5 mr-2" />
              <h2 className="text-lg font-semibold">CONTACT</h2>
            </div>
            <div className="space-y-3 text-sm">
              {cvData.personalInfo.email && (
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="break-all">{cvData.personalInfo.email}</span>
                </div>
              )}
              {cvData.personalInfo.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{cvData.personalInfo.phone}</span>
                </div>
              )}
              {cvData.personalInfo.address && (
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{cvData.personalInfo.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {cvData.skills.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Code className="w-5 h-5 mr-2" />
                <h2 className="text-lg font-semibold">SKILLS</h2>
              </div>
              <div className="space-y-4">
                {cvData.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    {skill.level && (
                      <div className="text-xs opacity-80">{skill.level}</div>
                    )}
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div 
                        className="bg-white h-2 rounded-full"
                        style={{ width: '85%' }} // Vous pouvez ajuster selon le niveau
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {cvData.languages.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Globe className="w-5 h-5 mr-2" />
                <h2 className="text-lg font-semibold">LANGUAGES</h2>
              </div>
              <div className="space-y-3">
                {cvData.languages.map((language) => (
                  <div key={language.id}>
                    <div className="font-medium text-sm">{language.name}</div>
                    {language.level && (
                      <div className="text-xs opacity-80">{language.level}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interests */}
          {cvData.interests.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">INTERESTS</h2>
              <div className="flex flex-wrap gap-2">
                {cvData.interests.map((interest, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs bg-white/20 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Colonne droite - Contenu principal */}
        <div className="lg:col-span-3 p-8">
          {/* About */}
          {cvData.personalInfo.summary && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2" style={{ color: theme.primary, borderColor: theme.primary }}>
                ABOUT ME
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {cvData.personalInfo.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {cvData.experiences.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 mr-3" style={{ color: theme.primary }} />
                <h2 className="text-2xl font-bold" style={{ color: theme.primary }}>
                  WORK EXPERIENCE
                </h2>
              </div>
              
              <div className="space-y-6">
                {cvData.experiences.map((experience, index) => (
                  <div key={experience.id} className="relative">
                    {index !== cvData.experiences.length - 1 && (
                      <div 
                        className="absolute left-4 top-8 w-0.5 h-full bg-gray-200"
                      />
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                        style={{ backgroundColor: theme.primary }}
                      >
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-bold" style={{ color: theme.text }}>
                              {experience.position}
                            </h3>
                            <p className="font-semibold" style={{ color: theme.primary }}>
                              {experience.company}
                            </p>
                            {experience.location && (
                              <p className="text-gray-600 text-sm">{experience.location}</p>
                            )}
                          </div>
                          <div 
                            className="px-3 py-1 rounded-full text-white text-sm font-medium"
                            style={{ backgroundColor: theme.primary }}
                          >
                            {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                          </div>
                        </div>
                        
                        {experience.description && (
                          <p className="text-gray-700 leading-relaxed text-sm text-justify">
                            {experience.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {cvData.education.length > 0 && (
            <section>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 mr-3" style={{ color: theme.secondary }} />
                <h2 className="text-2xl font-bold" style={{ color: theme.secondary }}>
                  EDUCATION
                </h2>
              </div>
              
              <div className="space-y-6">
                {cvData.education.map((education, index) => (
                  <div key={education.id} className="relative">
                    {index !== cvData.education.length - 1 && (
                      <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-200" />
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                        style={{ backgroundColor: theme.secondary }}
                      >
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-bold" style={{ color: theme.text }}>
                              {education.degree}
                            </h3>
                            <p className="font-semibold" style={{ color: theme.secondary }}>
                              {education.institution}
                            </p>
                            {education.location && (
                              <p className="text-gray-600 text-sm">{education.location}</p>
                            )}
                          </div>
                          <div 
                            className="px-3 py-1 rounded-full text-white text-sm font-medium"
                            style={{ backgroundColor: theme.secondary }}
                          >
                            {formatDate(education.startDate)} - {formatDate(education.endDate)}
                          </div>
                        </div>
                        
                        {education.description && (
                          <p className="text-gray-700 leading-relaxed text-sm text-justify">
                            {education.description}
                          </p>
                        )}
                      </div>
                    </div>
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

export default TwoColumnTemplate;
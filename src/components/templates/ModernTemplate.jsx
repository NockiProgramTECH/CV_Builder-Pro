import React from 'react';
import { Mail, Phone, MapPin, Calendar, Globe } from 'lucide-react';

const ModernTemplate = ({ cvData, theme }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Présent';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  };

  const cvStyle = {
    '--cv-primary': theme.primary,
    '--cv-secondary': theme.secondary,
    '--cv-accent': theme.accent,
    '--cv-background': theme.background,
    '--cv-text': theme.text,
  };

  return (
    <div className="modern-template bg-white shadow-2xl overflow-hidden" style={cvStyle}>
      {/* Header avec photo et infos principales */}
      <div className="relative">
        <div 
          className="h-32 w-full"
          style={{ backgroundColor: theme.primary }}
        />
        <div className="absolute top-8 left-8 right-8">
          <div className="flex items-start space-x-6">
            {cvData.personalInfo.photo && (
              <div 
                className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
              >
                <img 
                  src={cvData.personalInfo.photo} 
                  alt="Photo de profil" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="text-white pt-4">
              <h1 className="text-3xl font-bold mb-1">
                {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
              </h1>
              {cvData.personalInfo.title && (
                <p className="text-xl opacity-90 font-light">
                  {cvData.personalInfo.title}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 pt-16 pb-8">
        {/* Contact Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          {cvData.personalInfo.email && (
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="text-gray-700">{cvData.personalInfo.email}</span>
            </div>
          )}
          {cvData.personalInfo.phone && (
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="text-gray-700">{cvData.personalInfo.phone}</span>
            </div>
          )}
          {cvData.personalInfo.address && (
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="text-gray-700">{cvData.personalInfo.address}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profil */}
            {cvData.personalInfo.summary && (
              <section>
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2" style={{ color: theme.primary, borderColor: theme.primary }}>
                  Profil professionnel
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {cvData.personalInfo.summary}
                </p>
              </section>
            )}

            {/* Expériences */}
            {cvData.experiences.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2" style={{ color: theme.primary, borderColor: theme.primary }}>
                  Expérience professionnelle
                </h2>
                <div className="space-y-6">
                  {cvData.experiences.map((experience) => (
                    <div key={experience.id} className="relative pl-6">
                      <div 
                        className="absolute left-0 top-2 w-3 h-3 rounded-full"
                        style={{ backgroundColor: theme.primary }}
                      />
                      <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gray-200" />
                      
                      <div className="bg-white">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{experience.position}</h3>
                            <p className="font-medium" style={{ color: theme.primary }}>{experience.company}</p>
                            {experience.location && (
                              <p className="text-gray-600 text-sm">{experience.location}</p>
                            )}
                          </div>
                          <div className="text-right text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                          </div>
                        </div>
                        {experience.description && (
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {experience.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Formation */}
            {cvData.education.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2" style={{ color: theme.primary, borderColor: theme.primary }}>
                  Formation
                </h2>
                <div className="space-y-4">
                  {cvData.education.map((education) => (
                    <div key={education.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{education.degree}</h3>
                          <p className="font-medium" style={{ color: theme.primary }}>{education.institution}</p>
                          {education.location && (
                            <p className="text-gray-600 text-sm">{education.location}</p>
                          )}
                        </div>
                        <div className="text-right text-sm text-gray-600">
                          {formatDate(education.startDate)} - {formatDate(education.endDate)}
                        </div>
                      </div>
                      {education.description && (
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {education.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Compétences */}
            {cvData.skills.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4" style={{ color: theme.primary }}>
                  Compétences
                </h2>
                <div className="space-y-3">
                  {cvData.skills.map((skill) => (
                    <div key={skill.id} className="bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">{skill.name}</div>
                      {skill.level && (
                        <div className="text-sm text-gray-600">{skill.level}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Langues */}
            {cvData.languages.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4" style={{ color: theme.primary }}>
                  Langues
                </h2>
                <div className="space-y-3">
                  {cvData.languages.map((language) => (
                    <div key={language.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-900">{language.name}</div>
                      {language.level && (
                        <div className="text-sm text-gray-600">{language.level}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Centres d'intérêt */}
            {cvData.interests.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4" style={{ color: theme.primary }}>
                  Centres d'intérêt
                </h2>
                <div className="flex flex-wrap gap-2">
                  {cvData.interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-sm rounded-full text-white"
                      style={{ backgroundColor: theme.primary }}
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

export default ModernTemplate;
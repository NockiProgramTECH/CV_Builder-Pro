import React from 'react';
import { Mail, Phone, MapPin, Star, Zap, Heart } from 'lucide-react';

const CreativeTemplate = ({ cvData, theme }) => {
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
    <div className="creative-template bg-white shadow-2xl overflow-hidden" style={cvStyle}>
      {/* Header créatif avec forme géométrique */}
      <div className="relative">
        <div 
          className="h-40 w-full relative overflow-hidden"
          style={{ 
            background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 50%, ${theme.accent} 100%)`
          }}
        >
          {/* Formes géométriques décoratives */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/30 transform rotate-45"></div>
          <div className="absolute top-8 left-1/3 w-12 h-12 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="absolute top-8 left-8 right-8">
          <div className="flex items-start space-x-6">
            {cvData.personalInfo.photo && (
              <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-xl flex-shrink-0 transform rotate-3">
                <img 
                  src={cvData.personalInfo.photo} 
                  alt="Photo de profil" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="text-white pt-4">
              <h1 className="text-4xl font-bold mb-2 tracking-wide">
                {cvData.personalInfo.firstName}
                <br />
                <span className="font-light">{cvData.personalInfo.lastName}</span>
              </h1>
              {cvData.personalInfo.title && (
                <p className="text-xl opacity-90 font-light bg-white/20 px-4 py-2 rounded-full inline-block">
                  {cvData.personalInfo.title}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 pt-20 pb-8">
        {/* Contact créatif */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {cvData.personalInfo.email && (
            <div 
              className="flex items-center space-x-3 p-4 rounded-2xl text-white transform hover:scale-105 transition-transform"
              style={{ backgroundColor: theme.primary }}
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">{cvData.personalInfo.email}</span>
            </div>
          )}
          {cvData.personalInfo.phone && (
            <div 
              className="flex items-center space-x-3 p-4 rounded-2xl text-white transform hover:scale-105 transition-transform"
              style={{ backgroundColor: theme.secondary }}
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">{cvData.personalInfo.phone}</span>
            </div>
          )}
          {cvData.personalInfo.address && (
            <div 
              className="flex items-center space-x-3 p-4 rounded-2xl text-white transform hover:scale-105 transition-transform"
              style={{ backgroundColor: theme.accent }}
            >
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">{cvData.personalInfo.address}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profil avec icône */}
            {cvData.personalInfo.summary && (
              <section>
                <div className="flex items-center mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: theme.primary }}
                  >
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold" style={{ color: theme.primary }}>
                    À propos de moi
                  </h2>
                </div>
                <div 
                  className="p-6 rounded-2xl border-l-4"
                  style={{ 
                    backgroundColor: `${theme.primary}10`,
                    borderColor: theme.primary
                  }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {cvData.personalInfo.summary}
                  </p>
                </div>
              </section>
            )}

            {/* Expériences créatives */}
            {cvData.experiences.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: theme.secondary }}
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold" style={{ color: theme.secondary }}>
                    Mon parcours
                  </h2>
                </div>
                <div className="space-y-6">
                  {cvData.experiences.map((experience, index) => (
                    <div key={experience.id} className="relative">
                      <div 
                        className="p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform"
                        style={{ 
                          backgroundColor: index % 2 === 0 ? `${theme.primary}15` : `${theme.secondary}15`,
                          borderLeft: `6px solid ${index % 2 === 0 ? theme.primary : theme.secondary}`
                        }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{experience.position}</h3>
                            <p 
                              className="text-lg font-semibold"
                              style={{ color: index % 2 === 0 ? theme.primary : theme.secondary }}
                            >
                              {experience.company}
                            </p>
                            {experience.location && (
                              <p className="text-gray-600">{experience.location}</p>
                            )}
                          </div>
                          <div 
                            className="px-4 py-2 rounded-full text-white text-sm font-medium"
                            style={{ backgroundColor: index % 2 === 0 ? theme.primary : theme.secondary }}
                          >
                            {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                          </div>
                        </div>
                        {experience.description && (
                          <p className="text-gray-700 leading-relaxed">
                            {experience.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Formation créative */}
            {cvData.education.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: theme.accent }}
                  >
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold" style={{ color: theme.accent }}>
                    Formation
                  </h2>
                </div>
                <div className="grid gap-4">
                  {cvData.education.map((education) => (
                    <div 
                      key={education.id} 
                      className="p-6 rounded-2xl shadow-lg"
                      style={{ backgroundColor: `${theme.accent}15` }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{education.degree}</h3>
                          <p className="font-semibold" style={{ color: theme.accent }}>{education.institution}</p>
                          {education.location && (
                            <p className="text-gray-600 text-sm">{education.location}</p>
                          )}
                        </div>
                        <div 
                          className="px-3 py-1 rounded-full text-white text-sm"
                          style={{ backgroundColor: theme.accent }}
                        >
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

          {/* Sidebar créative */}
          <div className="space-y-8">
            {/* Compétences créatives */}
            {cvData.skills.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.primary }}>
                  💪 Experience Professionnelle
                </h2>
                <div className="space-y-3">
                  {cvData.skills.map((skill, index) => (
                    <div 
                      key={skill.id} 
                      className="p-4 rounded-xl shadow-md transform hover:rotate-1 transition-transform"
                      style={{ 
                        backgroundColor: `${[theme.primary, theme.secondary, theme.accent][index % 3]}20`,
                        borderLeft: `4px solid ${[theme.primary, theme.secondary, theme.accent][index % 3]}`
                      }}
                    >
                      <div className="font-bold text-gray-900">{skill.name}</div>
                      {skill.level && (
                        <div className="text-sm text-gray-600 mt-1">{skill.level}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Langues créatives */}
            {cvData.languages.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: theme.secondary }}>
                  🌍 Langues parlées
                </h2>
                <div className="space-y-3">
                  {cvData.languages.map((language, index) => (
                    <div 
                      key={language.id} 
                      className="p-4 rounded-xl text-center shadow-md"
                      style={{ backgroundColor: `${theme.secondary}20` }}
                    >
                      <div className="font-bold text-gray-900">{language.name}</div>
                      {language.level && (
                        <div className="text-sm mt-1" style={{ color: theme.secondary }}>
                          {language.level}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Centres d'intérêt créatifs */}
            {cvData.interests.length > 0 && (
              <section>
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 mr-2" style={{ color: theme.accent }} />
                  <h2 className="text-2xl font-bold" style={{ color: theme.accent }}>
                    Mes passions
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cvData.interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 text-sm rounded-full text-white font-medium transform hover:scale-110 transition-transform"
                      style={{ backgroundColor: [theme.primary, theme.secondary, theme.accent][index % 3] }}
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

export default CreativeTemplate;
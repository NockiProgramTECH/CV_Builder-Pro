import React from 'react';
import { Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const ProfessionalTemplate = ({ cvData, theme }) => {
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
    <div className="professional-template bg-white shadow-lg" style={cvStyle}>
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        {/* Sidebar */}
        <div 
          className="lg:col-span-1 p-8 text-white"
          style={{ backgroundColor: theme.primary }}
        >
          {/* Photo et infos personnelles */}
          <div className="text-center mb-8">
            {cvData.personalInfo.photo && (
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={cvData.personalInfo.photo} 
                  alt="Photo de profil" 
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
            <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-white/30">
              CONTACT
            </h2>
            <div className="space-y-3">
              {cvData.personalInfo.email && (
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm break-all">{cvData.personalInfo.email}</span>
                </div>
              )}
              {cvData.personalInfo.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{cvData.personalInfo.phone}</span>
                </div>
              )}
              {cvData.personalInfo.address && (
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{cvData.personalInfo.address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Compétences */}
          {cvData.skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-white/30">
                COMPÉTENCES
              </h2>
              <div className="space-y-3">
                {cvData.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="font-medium text-sm">{skill.name}</div>
                    {skill.level && (
                      <div className="text-xs opacity-80 mt-1">{skill.level}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Langues */}
          {cvData.languages.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-white/30">
                LANGUES
              </h2>
              <div className="space-y-3">
                {cvData.languages.map((language) => (
                  <div key={language.id}>
                    <div className="font-medium text-sm">{language.name}</div>
                    {language.level && (
                      <div className="text-xs opacity-80 mt-1">{language.level}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Centres d'intérêt */}
          {cvData.interests.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4 pb-2 border-b border-white/30">
                CENTRES D'INTÉRÊT
              </h2>
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

        {/* Contenu principal */}
        <div className="lg:col-span-2 p-8">
          {/* Profil */}
          {cvData.personalInfo.summary && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center" style={{ color: theme.primary }}>
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span className="text-white text-sm font-bold">P</span>
                </div>
                PROFIL PROFESSIONNEL
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                {cvData.personalInfo.summary}
              </p>
            </section>
          )}

          {/* Expérience */}
          {cvData.experiences.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.primary }}>
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: theme.primary }}
                >
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                EXPÉRIENCE PROFESSIONNELLE
              </h2>
              <div className="space-y-6">
                {cvData.experiences.map((experience) => (
                  <div key={experience.id} className="relative pl-6">
                    <div 
                      className="absolute left-0 top-2 w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.primary }}
                    />
                    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gray-200" />
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{experience.position}</h3>
                          <p className="font-medium" style={{ color: theme.primary }}>{experience.company}</p>
                          {experience.location && (
                            <p className="text-gray-600 text-sm">{experience.location}</p>
                          )}
                        </div>
                        <div 
                          className="text-white text-xs px-3 py-1 rounded-full font-medium"
                          style={{ backgroundColor: theme.primary }}
                        >
                          {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                        </div>
                      </div>
                      {experience.description && (
                        <p className="text-gray-700 text-sm leading-relaxed text-justify">
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
              <h2 className="text-2xl font-bold mb-6 flex items-center" style={{ color: theme.primary }}>
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                  style={{ backgroundColor: theme.primary }}
                >
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                FORMATION
              </h2>
              <div className="space-y-6">
                {cvData.education.map((education) => (
                  <div key={education.id} className="relative pl-6">
                    <div 
                      className="absolute left-0 top-2 w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme.primary }}
                    />
                    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gray-200" />
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{education.degree}</h3>
                          <p className="font-medium" style={{ color: theme.primary }}>{education.institution}</p>
                          {education.location && (
                            <p className="text-gray-600 text-sm">{education.location}</p>
                          )}
                        </div>
                        <div 
                          className="text-white text-xs px-3 py-1 rounded-full font-medium"
                          style={{ backgroundColor: theme.primary }}
                        >
                          {formatDate(education.startDate)} - {formatDate(education.endDate)}
                        </div>
                      </div>
                      {education.description && (
                        <p className="text-gray-700 text-sm leading-relaxed text-justify">
                          {education.description}
                        </p>
                      )}
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

export default ProfessionalTemplate;
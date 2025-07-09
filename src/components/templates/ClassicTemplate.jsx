import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const ClassicTemplate = ({ cvData, theme }) => {
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
    <div className="classic-template bg-white shadow-lg" style={cvStyle}>
      <div className="p-8 space-y-6">
        {/* Header classique */}
        <div className="text-center border-b-2 pb-6" style={{ borderColor: theme.primary }}>
          {cvData.personalInfo.photo && (
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4" style={{ borderColor: theme.primary }}>
              <img 
                src={cvData.personalInfo.photo} 
                alt="Photo de profil" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <h1 className="text-4xl font-serif font-bold mb-2" style={{ color: theme.primary }}>
            {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
          </h1>
          
          {cvData.personalInfo.title && (
            <p className="text-xl text-gray-600 font-light italic mb-4">
              {cvData.personalInfo.title}
            </p>
          )}
          
          {/* Contact classique */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            {cvData.personalInfo.email && (
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{cvData.personalInfo.email}</span>
              </div>
            )}
            {cvData.personalInfo.phone && (
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{cvData.personalInfo.phone}</span>
              </div>
            )}
            {cvData.personalInfo.address && (
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{cvData.personalInfo.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* Profil */}
        {cvData.personalInfo.summary && (
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-center" style={{ color: theme.primary }}>
              PROFIL PROFESSIONNEL
            </h2>
            <div className="text-center">
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {cvData.personalInfo.summary}
              </p>
            </div>
          </section>
        )}

        {/* Expérience */}
        {cvData.experiences.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif font-bold mb-6 text-center" style={{ color: theme.primary }}>
              EXPÉRIENCE PROFESSIONNELLE
            </h2>
            <div className="space-y-6">
              {cvData.experiences.map((experience) => (
                <div key={experience.id} className="border-l-4 pl-6" style={{ borderColor: theme.primary }}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: theme.text }}>
                        {experience.position}
                      </h3>
                      <p className="text-lg font-medium" style={{ color: theme.primary }}>
                        {experience.company}
                      </p>
                      {experience.location && (
                        <p className="text-gray-600 italic">{experience.location}</p>
                      )}
                    </div>
                    <div className="text-right text-gray-600 font-medium">
                      {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                    </div>
                  </div>
                  {experience.description && (
                    <p className="text-gray-700 leading-relaxed">
                      {experience.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Formation */}
        {cvData.education.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif font-bold mb-6 text-center" style={{ color: theme.primary }}>
              FORMATION
            </h2>
            <div className="space-y-6">
              {cvData.education.map((education) => (
                <div key={education.id} className="border-l-4 pl-6" style={{ borderColor: theme.primary }}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: theme.text }}>
                        {education.degree}
                      </h3>
                      <p className="text-lg font-medium" style={{ color: theme.primary }}>
                        {education.institution}
                      </p>
                      {education.location && (
                        <p className="text-gray-600 italic">{education.location}</p>
                      )}
                    </div>
                    <div className="text-right text-gray-600 font-medium">
                      {formatDate(education.startDate)} - {formatDate(education.endDate)}
                    </div>
                  </div>
                  {education.description && (
                    <p className="text-gray-700 leading-relaxed">
                      {education.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Compétences et Langues en deux colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Compétences */}
          {cvData.skills.length > 0 && (
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4 text-center" style={{ color: theme.primary }}>
                COMPÉTENCES
              </h2>
              <div className="space-y-2">
                {cvData.skills.map((skill) => (
                  <div key={skill.id} className="text-center p-2 border rounded" style={{ borderColor: theme.primary }}>
                    <div className="font-medium" style={{ color: theme.text }}>{skill.name}</div>
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
              <h2 className="text-2xl font-serif font-bold mb-4 text-center" style={{ color: theme.primary }}>
                LANGUES
              </h2>
              <div className="space-y-2">
                {cvData.languages.map((language) => (
                  <div key={language.id} className="text-center p-2 border rounded" style={{ borderColor: theme.primary }}>
                    <div className="font-medium" style={{ color: theme.text }}>{language.name}</div>
                    {language.level && (
                      <div className="text-sm text-gray-600">{language.level}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Centres d'intérêt */}
        {cvData.interests.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4 text-center" style={{ color: theme.primary }}>
              CENTRES D'INTÉRÊT
            </h2>
            <div className="text-center">
              <div className="inline-flex flex-wrap gap-3 justify-center">
                {cvData.interests.map((interest, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 border-2 rounded-full font-medium"
                    style={{ 
                      borderColor: theme.primary,
                      color: theme.primary
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ClassicTemplate;
import React from 'react';

const MinimalistTemplate = ({ cvData, theme }) => {
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
    <div className="minimalist-template bg-white shadow-sm" style={cvStyle}>
      <div className="p-12 space-y-12 max-w-4xl mx-auto">
        {/* Header minimaliste */}
        <header className="text-center space-y-6">
          {cvData.personalInfo.photo && (
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden grayscale">
              <img 
                src={cvData.personalInfo.photo} 
                alt="Photo de profil" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div>
            <h1 className="text-5xl font-light tracking-wide mb-2" style={{ color: theme.text }}>
              {cvData.personalInfo.firstName}
            </h1>
            <h1 className="text-5xl font-bold tracking-wide mb-4" style={{ color: theme.primary }}>
              {cvData.personalInfo.lastName}
            </h1>
            
            {cvData.personalInfo.title && (
              <p className="text-xl text-gray-500 font-light tracking-wider uppercase">
                {cvData.personalInfo.title}
              </p>
            )}
          </div>
          
          {/* Contact minimaliste */}
          <div className="flex justify-center space-x-8 text-sm text-gray-600 font-light">
            {cvData.personalInfo.email && <span>{cvData.personalInfo.email}</span>}
            {cvData.personalInfo.phone && <span>{cvData.personalInfo.phone}</span>}
            {cvData.personalInfo.address && <span>{cvData.personalInfo.address}</span>}
          </div>
        </header>

        {/* Profil minimaliste */}
        {cvData.personalInfo.summary && (
          <section>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                {cvData.personalInfo.summary}
              </p>
            </div>
          </section>
        )}

        {/* Expérience minimaliste */}
        {cvData.experiences.length > 0 && (
          <section>
            <h2 className="text-2xl font-light tracking-wider uppercase text-center mb-8 pb-2 border-b" style={{ color: theme.primary, borderColor: theme.primary }}>
              Expérience
            </h2>
            <div className="space-y-8">
              {cvData.experiences.map((experience) => (
                <div key={experience.id} className="text-center">
                  <div className="mb-4">
                    <h3 className="text-xl font-medium mb-1" style={{ color: theme.text }}>
                      {experience.position}
                    </h3>
                    <p className="text-lg font-light" style={{ color: theme.primary }}>
                      {experience.company}
                    </p>
                    <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 mt-2">
                      {experience.location && <span>{experience.location}</span>}
                      <span>•</span>
                      <span>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
                    </div>
                  </div>
                  {experience.description && (
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
                      {experience.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Formation minimaliste */}
        {cvData.education.length > 0 && (
          <section>
            <h2 className="text-2xl font-light tracking-wider uppercase text-center mb-8 pb-2 border-b" style={{ color: theme.primary, borderColor: theme.primary }}>
              Formation
            </h2>
            <div className="space-y-6">
              {cvData.education.map((education) => (
                <div key={education.id} className="text-center">
                  <h3 className="text-xl font-medium mb-1" style={{ color: theme.text }}>
                    {education.degree}
                  </h3>
                  <p className="text-lg font-light" style={{ color: theme.primary }}>
                    {education.institution}
                  </p>
                  <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 mt-2">
                    {education.location && <span>{education.location}</span>}
                    <span>•</span>
                    <span>{formatDate(education.startDate)} - {formatDate(education.endDate)}</span>
                  </div>
                  {education.description && (
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto font-light mt-3">
                      {education.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Compétences et Langues en grille minimaliste */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Compétences */}
          {cvData.skills.length > 0 && (
            <section>
              <h2 className="text-2xl font-light tracking-wider uppercase text-center mb-6 pb-2 border-b" style={{ color: theme.primary, borderColor: theme.primary }}>
                Compétences
              </h2>
              <div className="space-y-3">
                {cvData.skills.map((skill) => (
                  <div key={skill.id} className="text-center">
                    <div className="font-medium" style={{ color: theme.text }}>{skill.name}</div>
                    {skill.level && (
                      <div className="text-sm text-gray-500 font-light">{skill.level}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Langues */}
          {cvData.languages.length > 0 && (
            <section>
              <h2 className="text-2xl font-light tracking-wider uppercase text-center mb-6 pb-2 border-b" style={{ color: theme.primary, borderColor: theme.primary }}>
                Langues
              </h2>
              <div className="space-y-3">
                {cvData.languages.map((language) => (
                  <div key={language.id} className="text-center">
                    <div className="font-medium" style={{ color: theme.text }}>{language.name}</div>
                    {language.level && (
                      <div className="text-sm text-gray-500 font-light">{language.level}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Centres d'intérêt minimalistes */}
        {cvData.interests.length > 0 && (
          <section>
            <h2 className="text-2xl font-light tracking-wider uppercase text-center mb-6 pb-2 border-b" style={{ color: theme.primary, borderColor: theme.primary }}>
              Centres d'intérêt
            </h2>
            <div className="text-center">
              <p className="text-gray-600 font-light text-lg">
                {cvData.interests.join(' • ')}
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MinimalistTemplate;
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const CVPreview = ({ cvData, theme }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Présent';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' });
  };
  
  const cvStyle = {
    '--cv-primary': theme.primary,
    '--cv-background': theme.background,
    '--cv-text': theme.text,
    '--cv-skill-bg': theme.skillBackground,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="cv-preview shadow-2xl border-0 overflow-hidden" style={cvStyle}>
        <div className="p-8 space-y-6">
          <div className="flex items-start space-x-6 pb-6 border-b-2 border-gray-200">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">
                {cvData.personalInfo.firstName} {cvData.personalInfo.lastName}
              </h1>
              {cvData.personalInfo.title && (
                <p className="text-xl font-medium mb-4" style={{ color: theme.primary }}>
                  {cvData.personalInfo.title}
                </p>
              )}
              
              <div className="contact-info space-y-2">
                {cvData.personalInfo.email && (
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span>{cvData.personalInfo.email}</span>
                  </div>
                )}
                {cvData.personalInfo.phone && (
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span>{cvData.personalInfo.phone}</span>
                  </div>
                )}
                {cvData.personalInfo.address && (
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{cvData.personalInfo.address}</span>
                  </div>
                )}
              </div>
            </div>
            
            {cvData.personalInfo.photo && (
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: theme.primary }}>
                <img 
                  src={cvData.personalInfo.photo} 
                  alt="Photo de profil" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {cvData.personalInfo.summary && (
            <div className="section">
              <h2>Profil professionnel</h2>
              <p className="leading-relaxed" style={{ color: theme.text }}>
                {cvData.personalInfo.summary}
              </p>
            </div>
          )}

          {cvData.experiences.length > 0 && (
            <div className="section">
              <h2>Expérience professionnelle</h2>
              {cvData.experiences.map((experience) => (
                <div key={experience.id} className="experience-item">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3>{experience.position}</h3>
                      <p className="font-medium" style={{ color: theme.primary }}>{experience.company}</p>
                      {experience.location && (
                        <p className="text-gray-600 text-sm">{experience.location}</p>
                      )}
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                  {experience.description && (
                    <p className="text-sm leading-relaxed" style={{ color: theme.text }}>
                      {experience.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {cvData.education.length > 0 && (
            <div className="section">
              <h2>Formation</h2>
              {cvData.education.map((education) => (
                <div key={education.id} className="education-item">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3>{education.degree}</h3>
                      <p className="font-medium" style={{ color: theme.primary }}>{education.institution}</p>
                      {education.location && (
                        <p className="text-gray-600 text-sm">{education.location}</p>
                      )}
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {formatDate(education.startDate)} - {formatDate(education.endDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                  {education.description && (
                    <p className="text-sm leading-relaxed" style={{ color: theme.text }}>
                      {education.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {cvData.skills.length > 0 && (
            <div className="section">
              <h2>Compétences</h2>
              <div className="skills-grid">
                {cvData.skills.map((skill) => (
                  <div key={skill.id} className="skill-item">
                    <div className="font-medium" style={{ color: theme.text }}>{skill.name}</div>
                    {skill.level && (
                      <div className="text-sm text-gray-600">{skill.level}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {cvData.languages.length > 0 && (
            <div className="section">
              <h2>Langues</h2>
              <div className="languages-grid">
                {cvData.languages.map((language) => (
                  <div key={language.id} className="language-item">
                    <div className="font-medium" style={{ color: theme.text }}>{language.name}</div>
                    {language.level && (
                      <div className="text-sm text-gray-600">{language.level}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {cvData.interests.length > 0 && (
            <div className="section">
              <h2>Centres d'intérêt</h2>
              <div className="interests-list">
                {cvData.interests.map((interest, index) => (
                  <span key={index} className="interest-tag" style={{ backgroundColor: theme.primary + '20', color: theme.primary }}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default CVPreview;
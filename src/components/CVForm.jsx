import React from 'react';
import PersonalInfoForm from './form/PersonalInfoForm';
import ExperienceForm from './form/ExperienceForm';
import EducationForm from './form/EducationForm';
import SkillsForm from './form/SkillsForm';
import LanguagesForm from './form/LanguagesForm';
import InterestsForm from './form/InterestsForm';
import ThemeCustomizer from './form/ThemeCustomizer';

const CVForm = ({ cvData, setCvData, suggestions, theme, setTheme }) => {
  return (
    <div className="space-y-6">
      <ThemeCustomizer theme={theme} setTheme={setTheme} />
      <PersonalInfoForm cvData={cvData} setCvData={setCvData} />
      <ExperienceForm cvData={cvData} setCvData={setCvData} />
      <EducationForm cvData={cvData} setCvData={setCvData} suggestions={suggestions} />
      <SkillsForm cvData={cvData} setCvData={setCvData} suggestions={suggestions} />
      <LanguagesForm cvData={cvData} setCvData={setCvData} suggestions={suggestions} />
      <InterestsForm cvData={cvData} setCvData={setCvData} />
    </div>
  );
};

export default CVForm;
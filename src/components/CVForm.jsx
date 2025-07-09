import React from 'react';
import PersonalInfoForm from './form/PersonalInfoForm';
import ExperienceForm from './form/ExperienceForm';
import EducationForm from './form/EducationForm';
import SkillsForm from './form/SkillsForm';
import LanguagesForm from './form/LanguagesForm';
import InterestsForm from './form/InterestsForm';
import TemplateSelector from './TemplateSelector';
import TemplateThemeCustomizer from './form/TemplateThemeCustomizer';

const CVForm = ({ cvData, setCvData, suggestions, theme, setTheme, selectedTemplate, setSelectedTemplate }) => {
  return (
    <div className="space-y-6">
      <TemplateSelector 
        selectedTemplate={selectedTemplate}
        onTemplateChange={setSelectedTemplate}
        cvData={cvData}
        theme={theme}
      />
      <TemplateThemeCustomizer 
        selectedTemplate={selectedTemplate}
        theme={theme} 
        setTheme={setTheme} 
      />
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
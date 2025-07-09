import React from 'react';
import { motion } from 'framer-motion';

// Import des templates
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import MinimalistTemplate from './templates/MinimalistTemplate';
import ProfessionalTemplate from './templates/ProfessionalTemplate';

const templateComponents = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  creative: CreativeTemplate,
  minimalist: MinimalistTemplate,
  professional: ProfessionalTemplate,
};

const CVPreview = ({ cvData, theme, selectedTemplate = 'modern' }) => {
  const TemplateComponent = templateComponents[selectedTemplate] || ModernTemplate;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TemplateComponent cvData={cvData} theme={theme} />
    </motion.div>
  );
};

export default CVPreview;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Palette, Check } from 'lucide-react';

// Import des templates
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import MinimalistTemplate from './templates/MinimalistTemplate';
import ProfessionalTemplate from './templates/ProfessionalTemplate';

const templates = [
  {
    id: 'modern',
    name: 'Moderne',
    description: 'Design contemporain avec timeline et couleurs vives',
    component: ModernTemplate,
    preview: '/api/placeholder/300/400',
    category: 'Moderne',
    features: ['Timeline interactive', 'Design coloré', 'Mise en page dynamique']
  },
  {
    id: 'classic',
    name: 'Classique',
    description: 'Style traditionnel et élégant pour tous secteurs',
    component: ClassicTemplate,
    preview: '/api/placeholder/300/400',
    category: 'Traditionnel',
    features: ['Design intemporel', 'Mise en page centrée', 'Typographie serif']
  },
  {
    id: 'creative',
    name: 'Créatif',
    description: 'Template artistique avec formes géométriques',
    component: CreativeTemplate,
    preview: '/api/placeholder/300/400',
    category: 'Artistique',
    features: ['Formes géométriques', 'Couleurs vives', 'Design innovant']
  },
  {
    id: 'minimalist',
    name: 'Minimaliste',
    description: 'Design épuré et professionnel',
    component: MinimalistTemplate,
    preview: '/api/placeholder/300/400',
    category: 'Épuré',
    features: ['Design épuré', 'Typographie claire', 'Espaces aérés']
  },
  {
    id: 'professional',
    name: 'Professionnel',
    description: 'Template corporate avec sidebar colorée',
    component: ProfessionalTemplate,
    preview: '/api/placeholder/300/400',
    category: 'Corporate',
    features: ['Sidebar colorée', 'Layout structuré', 'Style corporate']
  }
];

const TemplateSelector = ({ selectedTemplate, onTemplateChange, cvData, theme }) => {
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = (template) => {
    setPreviewTemplate(template);
    setShowPreview(true);
  };

  const handleSelect = (templateId) => {
    onTemplateChange(templateId);
    setShowPreview(false);
  };

  const PreviewComponent = previewTemplate?.component;

  return (
    <div className="space-y-6">
      {/* Sélecteur de templates */}
      <Card className="glass-effect border-white/20">
        <CardHeader>
          <CardTitle className="gradient-text flex items-center">
            <Palette className="w-6 h-6 mr-2" />
            Choisir un template
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
                  selectedTemplate === template.id
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-white/20 bg-white/5 hover:border-white/40'
                }`}
                onClick={() => handleSelect(template.id)}
              >
                {selectedTemplate === template.id && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{template.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {template.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-white/70">{template.description}</p>
                  
                  <div className="space-y-2">
                    <div className="text-xs text-white/60">Caractéristiques :</div>
                    <div className="flex flex-wrap gap-1">
                      {template.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/80"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePreview(template);
                      }}
                      className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Aperçu
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Modal de prévisualisation */}
      {showPreview && PreviewComponent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowPreview(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg shadow-2xl max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Aperçu : {previewTemplate.name}
                </h3>
                <p className="text-sm text-gray-600">{previewTemplate.description}</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={() => handleSelect(previewTemplate.id)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Choisir ce template
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowPreview(false)}
                >
                  Fermer
                </Button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="transform scale-75 origin-top">
                <PreviewComponent cvData={cvData} theme={theme} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default TemplateSelector;
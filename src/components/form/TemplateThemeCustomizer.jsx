import React from 'react';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Palette, Paintbrush } from 'lucide-react';
import templateThemes from '@/data/templateThemes.json';

const ColorPicker = ({ label, value, onChange }) => (
  <div className="flex items-center justify-between">
    <Label className="text-sm">{label}</Label>
    <div className="relative">
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-8 h-8 p-0 border-none cursor-pointer appearance-none"
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          right: 0,
          opacity: 0,
        }}
      />
      <div
        className="w-8 h-8 rounded-md border border-white/20 cursor-pointer"
        style={{ backgroundColor: value }}
      ></div>
    </div>
  </div>
);

const TemplateThemeCustomizer = ({ selectedTemplate, theme, setTheme }) => {
  const availableThemes = templateThemes[selectedTemplate] || templateThemes.modern;
  
  const handleThemeChange = (themeName) => {
    setTheme(availableThemes[themeName]);
  };
  
  const handleColorChange = (colorName, value) => {
    setTheme(prev => ({...prev, [colorName]: value}));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-effect border-white/20">
        <CardHeader>
          <CardTitle className="gradient-text flex items-center">
            <Paintbrush className="w-6 h-6 mr-2" />
            Personnalisation du thème
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Thèmes prédéfinis pour ce template</Label>
            <Select onValueChange={handleThemeChange} defaultValue="Standard">
              <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Choisir un thème" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(availableThemes).map(themeName => (
                  <SelectItem key={themeName} value={themeName}>
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: availableThemes[themeName].primary }}
                      />
                      <span>{themeName}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="w-4 h-4 text-blue-400" />
              <p className="font-medium text-white/80">Couleurs personnalisées</p>
            </div>
            <ColorPicker 
              label="Couleur principale" 
              value={theme.primary} 
              onChange={(val) => handleColorChange('primary', val)} 
            />
            <ColorPicker 
              label="Couleur secondaire" 
              value={theme.secondary} 
              onChange={(val) => handleColorChange('secondary', val)} 
            />
            <ColorPicker 
              label="Couleur d'accent" 
              value={theme.accent} 
              onChange={(val) => handleColorChange('accent', val)} 
            />
            <ColorPicker 
              label="Couleur de fond" 
              value={theme.background} 
              onChange={(val) => handleColorChange('background', val)} 
            />
            <ColorPicker 
              label="Couleur du texte" 
              value={theme.text} 
              onChange={(val) => handleColorChange('text', val)} 
            />
          </div>
          
          {/* Aperçu des couleurs */}
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <p className="text-sm text-white/70 mb-3">Aperçu de la palette :</p>
            <div className="flex space-x-2">
              <div 
                className="w-8 h-8 rounded-md border border-white/20"
                style={{ backgroundColor: theme.primary }}
                title="Couleur principale"
              />
              <div 
                className="w-8 h-8 rounded-md border border-white/20"
                style={{ backgroundColor: theme.secondary }}
                title="Couleur secondaire"
              />
              <div 
                className="w-8 h-8 rounded-md border border-white/20"
                style={{ backgroundColor: theme.accent }}
                title="Couleur d'accent"
              />
              <div 
                className="w-8 h-8 rounded-md border border-white/20"
                style={{ backgroundColor: theme.background }}
                title="Couleur de fond"
              />
              <div 
                className="w-8 h-8 rounded-md border border-white/20"
                style={{ backgroundColor: theme.text }}
                title="Couleur du texte"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TemplateThemeCustomizer;
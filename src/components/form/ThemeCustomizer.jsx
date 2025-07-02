import React from 'react';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Palette } from 'lucide-react';
import themes from '@/data/themes.json';

const ColorPicker = ({ label, value, onChange }) => (
  <div className="flex items-center justify-between">
    <Label>{label}</Label>
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
        className="w-8 h-8 rounded-md border border-white/20"
        style={{ backgroundColor: value }}
      ></div>
    </div>
  </div>
);

const ThemeCustomizer = ({ theme, setTheme }) => {
  
  const handleThemeChange = (themeName) => {
    setTheme(themes[themeName]);
  };
  
  const handleColorChange = (colorName, value) => {
    setTheme(prev => ({...prev, [colorName]: value}));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card className="glass-effect border-white/20">
        <CardHeader>
          <CardTitle className="gradient-text flex items-center">
            <Palette className="w-6 h-6 mr-2" />
            Personnalisation du thème
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Thèmes prédéfinis (par entreprise)</Label>
            <Select onValueChange={handleThemeChange} defaultValue="Standard">
              <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Choisir un thème" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(themes).map(themeName => (
                  <SelectItem key={themeName} value={themeName}>{themeName}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            <p className="font-medium text-white/80">Couleurs manuelles</p>
            <ColorPicker label="Couleur principale" value={theme.primary} onChange={(val) => handleColorChange('primary', val)} />
            <ColorPicker label="Couleur de fond" value={theme.background} onChange={(val) => handleColorChange('background', val)} />
            <ColorPicker label="Couleur du texte" value={theme.text} onChange={(val) => handleColorChange('text', val)} />
            <ColorPicker label="Fond des compétences" value={theme.skillBackground} onChange={(val) => handleColorChange('skillBackground', val)} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ThemeCustomizer;
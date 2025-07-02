import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import AutoCompleteInput from './AutoCompleteInput';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LanguagesForm = ({ cvData, setCvData, suggestions }) => {
  const addLanguage = () => {
    setCvData(prev => ({
      ...prev,
      languages: [
        ...prev.languages,
        {
          id: Date.now(),
          name: '',
          level: ''
        }
      ]
    }));
  };

  const updateLanguage = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      languages: prev.languages.map(lang =>
        lang.id === id ? { ...lang, [field]: value } : lang
      )
    }));
  };

  const removeLanguage = (id) => {
    setCvData(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang.id !== id)
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="glass-effect border-white/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="gradient-text">Langues</CardTitle>
            <Button onClick={addLanguage} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {cvData.languages.map((language, index) => (
            <motion.div
              key={language.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-end space-x-4 p-3 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex-1">
                <Label>Langue</Label>
                <AutoCompleteInput
                  value={language.name}
                  onChange={(value) => updateLanguage(language.id, 'name', value)}
                  suggestions={suggestions.languages}
                  placeholder="Ex: Anglais"
                />
              </div>
              <div className="w-48">
                <Label>Niveau</Label>
                <Select
                  value={language.level}
                  onValueChange={(value) => updateLanguage(language.id, 'level', value)}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Choisir un niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    {suggestions.languageLevels.map(level => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeLanguage(language.id)}
                className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LanguagesForm;
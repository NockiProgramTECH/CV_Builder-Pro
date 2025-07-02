import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import AutoCompleteInput from './AutoCompleteInput';

const SkillsForm = ({ cvData, setCvData, suggestions }) => {
  const addSkill = () => {
    setCvData(prev => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          id: Date.now(),
          name: '',
          level: ''
        }
      ]
    }));
  };

  const updateSkill = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.map(skill =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const removeSkill = (id) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="glass-effect border-white/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="gradient-text">Compétences</CardTitle>
            <Button onClick={addSkill} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {cvData.skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-end space-x-4 p-3 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex-1">
                <Label>Nom de la compétence</Label>
                <AutoCompleteInput
                  value={skill.name}
                  onChange={(value) => updateSkill(skill.id, 'name', value)}
                  suggestions={suggestions.skills}
                  placeholder="Ex: Gestion de projet"
                />
              </div>
              <div className="w-40">
                <Label>Niveau (facultatif)</Label>
                <Input
                  value={skill.level}
                  onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                  placeholder="Ex: Avancé"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeSkill(skill.id)}
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

export default SkillsForm;
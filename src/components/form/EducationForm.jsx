import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import AutoCompleteInput from './AutoCompleteInput';

const EducationForm = ({ cvData, setCvData, suggestions }) => {
  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          degree: '',
          institution: '',
          location: '',
          startDate: '',
          endDate: '',
          description: ''
        }
      ]
    }));
  };

  const updateEducation = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="glass-effect border-white/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="gradient-text">Formation</CardTitle>
            <Button onClick={addEducation} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {cvData.education.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-4 bg-white/5 rounded-lg border border-white/10 space-y-4"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-semibold text-blue-300">Formation {index + 1}</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeEducation(education.id)}
                  className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Diplôme</Label>
                  <AutoCompleteInput
                    value={education.degree}
                    onChange={(value) => updateEducation(education.id, 'degree', value)}
                    suggestions={suggestions.education}
                    placeholder="Ex: Licence en Informatique"
                  />
                </div>
                <div>
                  <Label>Établissement</Label>
                  <Input
                    value={education.institution}
                    onChange={(e) => updateEducation(education.id, 'institution', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Lieu</Label>
                  <Input
                    value={education.location}
                    onChange={(e) => updateEducation(education.id, 'location', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Label>Date de début</Label>
                  <Input
                    type="month"
                    value={education.startDate}
                    onChange={(e) => updateEducation(education.id, 'startDate', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <Label>Date de fin</Label>
                  <Input
                    type="month"
                    value={education.endDate}
                    onChange={(e) => updateEducation(education.id, 'endDate', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  value={education.description}
                  onChange={(e) => updateEducation(education.id, 'description', e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  placeholder="Spécialisation, mention, projets..."
                  rows={2}
                />
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EducationForm;
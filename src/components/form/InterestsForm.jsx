import React from 'react';
import { motion } from 'framer-motion';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InterestsForm = ({ cvData, setCvData }) => {
  const handleInterestsChange = (value) => {
    const interests = value.split(',').map(interest => interest.trim()).filter(Boolean);
    setCvData(prev => ({
      ...prev,
      interests
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card className="glass-effect border-white/20">
        <CardHeader>
          <CardTitle className="gradient-text">Centres d'intérêt</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="interests">Centres d'intérêt (séparés par des virgules)</Label>
            <Textarea
              id="interests"
              value={cvData.interests.join(', ')}
              onChange={(e) => handleInterestsChange(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              placeholder="Ex: Photographie, Voyage, Sport, Lecture..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InterestsForm;
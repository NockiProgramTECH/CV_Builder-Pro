import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload } from 'lucide-react';

const PersonalInfoForm = ({ cvData, setCvData }) => {
  const [photoPreview, setPhotoPreview] = useState(cvData.personalInfo.photo);

  const handlePersonalInfoChange = (field, value) => {
    setCvData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const photoUrl = e.target.result;
        setPhotoPreview(photoUrl);
        handlePersonalInfoChange('photo', photoUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-effect border-white/20">
        <CardHeader>
          <CardTitle className="gradient-text">Informations personnelles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Prénom</Label>
              <Input
                id="firstName"
                value={cvData.personalInfo.firstName}
                onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Nom</Label>
              <Input
                id="lastName"
                value={cvData.personalInfo.lastName}
                onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="title">Titre professionnel</Label>
            <Input
              id="title"
              value={cvData.personalInfo.title}
              onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              placeholder="Ex: Développeur Full Stack"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={cvData.personalInfo.email}
                onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <div>
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                value={cvData.personalInfo.phone}
                onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">Adresse</Label>
            <Input
              id="address"
              value={cvData.personalInfo.address}
              onChange={(e) => handlePersonalInfoChange('address', e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>

          <div>
            <Label htmlFor="summary">Résumé professionnel</Label>
            <Textarea
              id="summary"
              value={cvData.personalInfo.summary}
              onChange={(e) => handlePersonalInfoChange('summary', e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              placeholder="Décrivez brièvement votre profil professionnel..."
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="photo">Photo de profil</Label>
            <div className="flex items-center space-x-4">
              <input
                id="photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('photo').click()}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Upload className="w-4 h-4 mr-2" />
                Choisir une photo
              </Button>
              {photoPreview && (
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                  <img src={photoPreview} alt="Aperçu" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PersonalInfoForm;
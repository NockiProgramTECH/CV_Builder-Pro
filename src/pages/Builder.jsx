import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import CVForm from '@/components/CVForm';
import CVPreview from '@/components/CVPreview';
import { useCVData } from '@/hooks/useCVData';
import { generatePDF } from '@/utils/pdfGenerator';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { Download, FileText, Trash2, Eye, EyeOff, Languages, LogOut } from 'lucide-react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import suggestions from '@/data/suggestions.json';
import themes from '@/data/themes.json';
import ThemeCustomizer from '@/components/form/ThemeCustomizer';

function Builder() {
  const { cvData, setCvData, resetCVData } = useCVData();
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [language, setLanguage] = useState('fr');
  const [theme, setTheme] = useState(themes['Standard']);

  const handleGeneratePDF = async () => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour télécharger votre CV.",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsGeneratingPDF(true);
      if (!cvData.personalInfo.firstName || !cvData.personalInfo.lastName) {
        toast({
          title: "Informations manquantes",
          description: "Veuillez remplir au moins votre nom et prénom.",
          variant: "destructive"
        });
        return;
      }
      const filename = `CV_${cvData.personalInfo.firstName}_${cvData.personalInfo.lastName}.pdf`;
      await generatePDF('cv-preview-container', filename);
      toast({
        title: "PDF généré avec succès !",
        description: "Votre CV a été téléchargé.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la génération du PDF.",
        variant: "destructive"
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleReset = () => {
    resetCVData();
    toast({
      title: "CV réinitialisé",
      description: "Toutes les données ont été effacées.",
    });
  };

  const togglePreview = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };

  return (
    <>
      <Helmet>
        <title>Créateur de CV Professionnel - Générateur de CV en ligne</title>
        <meta name="description" content="Créez votre CV professionnel en ligne avec notre générateur moderne. Interface intuitive, aperçu en temps réel et export PDF gratuit." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold gradient-text">CV Builder Pro</h1>
                  <p className="text-sm text-white/70">Connecté en tant que {user?.user_metadata?.full_name || user?.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button onClick={signOut} variant="outline" className="bg-red-500/20 border-red-500/50 text-white hover:bg-red-500/40">
                  <LogOut className="w-4 h-4 mr-2" /> Déconnexion
                </Button>
              </div>
            </div>
          </div>
        </motion.header>

        <main className="container mx-auto px-4 py-8">
          <div className={`grid gap-8 ${isPreviewVisible ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Créez votre CV professionnel
                </h2>
                <p className="text-white/80 text-lg">
                  Remplissez les informations ci-dessous et visualisez votre CV en temps réel.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  onClick={togglePreview}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex-1"
                >
                  {isPreviewVisible ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                  {isPreviewVisible ? 'Masquer aperçu' : 'Afficher aperçu'}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex-1"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Réinitialiser
                </Button>
                
                <Button
                  onClick={handleGeneratePDF}
                  disabled={isGeneratingPDF}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium flex-1"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {isGeneratingPDF ? 'Génération...' : 'Télécharger PDF'}
                </Button>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-effect border-white/20 p-6 rounded-lg"
              >
                <Label htmlFor="cv-language" className="text-lg font-semibold gradient-text flex items-center">
                  <Languages className="w-5 h-5 mr-2" />
                  Langue du CV
                </Label>
                <p className="text-white/70 text-sm mb-4">Choisissez la langue pour obtenir des suggestions adaptées.</p>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="cv-language" className="w-full bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Choisir la langue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              
              <CVForm cvData={cvData} setCvData={setCvData} suggestions={suggestions[language]} theme={theme} setTheme={setTheme} />
            </motion.div>

            {isPreviewVisible && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6 sticky top-24 h-fit"
              >
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold gradient-text mb-2">
                    Aperçu de votre CV
                  </h2>
                  <p className="text-white/80">
                    Voici comment votre CV apparaîtra.
                  </p>
                </div>
                
                <div id="cv-preview-container">
                  <CVPreview cvData={cvData} theme={theme} />
                </div>
              </motion.div>
            )}
          </div>
        </main>

        <footer className="bg-white/5 backdrop-blur-lg border-t border-white/10 mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <p className="text-white/60">
                © 2025 CV Builder Pro. Créez votre CV professionnel en quelques minutes.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Builder;
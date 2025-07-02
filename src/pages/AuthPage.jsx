import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from '@/components/auth/LoginForm';
import SignUpForm from '@/components/auth/SignUpForm';
import { FileText } from 'lucide-react';

const AuthPage = () => {
  return (
    <>
      <Helmet>
        <title>Accès | Créateur de CV Professionnel</title>
        <meta name="description" content="Connectez-vous ou créez un compte pour accéder au créateur de CV." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold gradient-text">CV Builder Pro</h1>
            <p className="text-white/70 mt-2">Votre passeport pour une carrière réussie.</p>
          </div>

          <Card className="glass-effect p-2 rounded-xl">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/10 border-white/20">
                <TabsTrigger value="login">Se connecter</TabsTrigger>
                <TabsTrigger value="signup">S'inscrire</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              <TabsContent value="signup">
                <SignUpForm />
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

// Dummy Card component to make it work without circular dependencies
const Card = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default AuthPage;
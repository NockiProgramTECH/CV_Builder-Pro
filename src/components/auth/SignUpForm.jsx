import React, { useState } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GoogleSignInButton from './GoogleSignInButton';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone: phone,
        },
      },
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "L'inscription a échoué",
        description: error.message || "Une erreur est survenue",
      });
    } else {
      toast({
        title: "Inscription réussie !",
        description: "Veuillez vérifier votre e-mail pour confirmer votre compte.",
      });
      navigate('/');
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-white">Créez votre compte</CardTitle>
        <CardDescription className="text-white/60">Rejoignez-nous et créez le CV parfait.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-fullname">Nom complet</Label>
            <Input id="signup-fullname" placeholder="John Doe" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input id="signup-email" type="email" placeholder="votre.email@exemple.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-phone">Numéro de téléphone</Label>
            <Input id="signup-phone" type="tel" placeholder="0612345678" value={phone} onChange={(e) => setPhone(e.target.value)} required className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Mot de passe</Label>
            <Input id="signup-password" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
            {loading ? 'Création...' : 'Créer un compte'}
          </Button>
        </form>
         <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/20" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-white/60">Ou continuer avec</span>
          </div>
        </div>
        <GoogleSignInButton />
      </CardContent>
    </div>
  );
};

export default SignUpForm;
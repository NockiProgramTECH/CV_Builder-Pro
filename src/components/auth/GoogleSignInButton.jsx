import React from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Chrome } from 'lucide-react';

const GoogleSignInButton = () => {
  const { toast } = useToast();
  
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
       options: {
        redirectTo: window.location.origin
      }
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "La connexion avec Google a échoué",
        description: error.message || "Une erreur est survenue",
      });
    }
  };
  
  return (
    <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20" onClick={handleGoogleSignIn}>
      <Chrome className="mr-2 h-4 w-4" />
      Continuer avec Google
    </Button>
  );
};

export default GoogleSignInButton;
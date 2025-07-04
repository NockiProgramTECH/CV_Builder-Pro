import { supabase } from '@/lib/customSupabaseClient';

export const saveCVToDatabase = async (cvData) => {
  try {
    const cvRecord = {
      creator_name: `${cvData.personalInfo.firstName} ${cvData.personalInfo.lastName}`.trim(),
      cv_data: cvData,
      created_at: new Date().toISOString()
    };

    const { data, error } = await supabase
      .from('cvs')
      .insert([cvRecord])
      .select();

    if (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du CV:', error);
    throw error;
  }
};

export const getCVsFromDatabase = async () => {
  try {
    const { data, error } = await supabase
      .from('cvs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erreur lors de la récupération:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Erreur lors de la récupération des CVs:', error);
    throw error;
  }
};
import { useState, useEffect } from 'react';

const initialCVData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    photo: null
  },
  experiences: [],
  education: [],
  skills: [],
  languages: [],
  interests: [],
  cvLanguage: 'fr'
};

export const useCVData = () => {
  const [cvData, setCvData] = useState(() => {
    try {
      const savedData = localStorage.getItem('cvData');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        return { ...initialCVData, ...parsedData };
      }
    } catch (error) {
      console.error("Could not parse cvData from localStorage", error);
    }
    return initialCVData;
  });

  useEffect(() => {
    localStorage.setItem('cvData', JSON.stringify(cvData));
  }, [cvData]);

  const resetCVData = () => {
    const lang = cvData.cvLanguage;
    setCvData({...initialCVData, cvLanguage: lang});
    localStorage.setItem('cvData', JSON.stringify({...initialCVData, cvLanguage: lang}));
  };

  return { cvData, setCvData, resetCVData };
};
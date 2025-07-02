
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementId, filename = 'cv.pdf') => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Élément non trouvé');
    }

    // Configuration pour une meilleure qualité
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight
    });

    const imgData = canvas.toDataURL('image/png');
    
    // Format A4 en mm
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Calculer les dimensions pour s'adapter à la page
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;
    
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    
    // Si le contenu dépasse une page, ajouter des pages supplémentaires
    if (imgHeight * ratio > pdfHeight) {
      let heightLeft = imgHeight * ratio;
      let position = 0;
      
      while (heightLeft >= pdfHeight) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', imgX, -position, imgWidth * ratio, imgHeight * ratio);
        heightLeft -= pdfHeight;
      }
    }
    
    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error);
    throw error;
  }
};

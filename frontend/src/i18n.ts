import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Dashboard': 'Dashboard',
      'Crop Management': 'Crop Management',
      'Field Management': 'Field Management',
      'Oops! This field seems to be empty': 'Oops! This field seems to be empty',
      "The page you're looking for might have been harvested, moved to a different field, or doesn't exist.": "The page you're looking for might have been harvested, moved to a different field, or doesn't exist.",
      'Go Back': 'Go Back',
      'Back to Dashboard': 'Back to Dashboard',
      'Or visit these popular sections': 'Or visit these popular sections',
      'Vilaipayir Farm Management System': 'Vilaipayir Farm Management System',
      'Welcome to': 'Welcome to',
      'Farm Management System': 'Farm Management System',
      'Preparing your dashboard...': 'Preparing your dashboard...',
      'Livestock Management': 'Livestock Management',
      'Inventory Management': 'Inventory Management',
      'Schedule': 'Schedule',
      'Weather': 'Weather',
      'Finances': 'Finances',
      'Reports': 'Reports',
      'Settings': 'Settings',
      'This section is under development.': 'This section is under development.',
      'Fields Overview': 'Fields Overview',
      'Good': 'Good',
      'View Field Reports': 'View Field Reports',
      'View Expense Reports': 'View Expense Reports',
      'Overview': 'Overview',
      'Analytics': 'Analytics',
      'Farm Management': 'Farm Management',
      'Livestock': 'Livestock',
      'Inventory': 'Inventory',
      'Operations': 'Operations',
      'Help & Support': 'Help & Support'
    }
  },
  ta: {
    translation: {
      'Dashboard': 'டாஷ்போர்டு',
      'Crop Management': 'விவசாய முகாமை',
      'Field Management': 'வயல் முகாமை',
      'Oops! This field seems to be empty': 'அய்யோ! இந்த பக்கம் காலியாக உள்ளது',
      "The page you're looking for might have been harvested, moved to a different field, or doesn't exist.": "நீங்கள் தேடும் பக்கம் அறுவடை செய்யப்பட்டது, வேறு இடத்திற்கு மாற்றப்பட்டது, அல்லது இல்லை.",
      'Go Back': 'மீண்டும் செல்லவும்',
      'Back to Dashboard': 'டாஷ்போர்டுக்கு திரும்பவும்',
      'Or visit these popular sections': 'அல்லது இந்த பிரபலமான பகுதிகளை பார்வையிடவும்',
      'Vilaipayir Farm Management System': 'விலையிப்பயிர் விவசாய முகாமை அமைப்பு',
      'Welcome to': 'வரவேற்கின்றோம்',
      'Farm Management System': 'விவசாய முகாமை அமைப்பு',
      'Preparing your dashboard...': 'உங்கள் டாஷ்போர்டு தயாராகிறது...',
      'Livestock Management': 'மிருகப் பராமரிப்பு',
      'Inventory Management': 'சரக்கு முகாமை',
      'Schedule': 'அட்டவணை',
      'Weather': 'வானிலை',
      'Finances': 'நிதிகள்',
      'Reports': 'அறிக்கைகள்',
      'Settings': 'அமைப்புகள்',
      'This section is under development.': 'இந்த பகுதி உருவாக்கத்தில் உள்ளது.',
      'Fields Overview': 'வயல் மேலோட்டம்',
      'Good': 'நன்று',
      'View Field Reports': 'வயல் அறிக்கைகளை பார்க்கவும்',
      'View Expense Reports': 'செலவு அறிக்கைகளை பார்க்கவும்',
      'Overview': 'மேலோட்டம்',
      'Analytics': 'பகுப்பாய்வு',
      'Farm Management': 'விவசாய முகாமை',
      'Livestock': 'மிருகங்கள்',
      'Inventory': 'சரக்கு',
      'Operations': 'செயல்பாடுகள்',
      'Help & Support': 'உதவி மற்றும் ஆதரவு'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 
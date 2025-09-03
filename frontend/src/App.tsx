import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import WelcomeScreen from './pages/WelcomeAnimation';
import { useState } from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const  App:React.FC=() =>{
  const [showWelcome, setShowWelcome] = useState(true);
  const { t } = useTranslation();

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  if (showWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          <Route path="/crops" element={
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('Crop Management')}</h2>
                <p className="text-gray-600">{t('This section is under development.')}</p>
              </div>
            </Layout>
          } />
          <Route path="/fields" element={
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('Field Management')}</h2>
                <p className="text-gray-600">{t('This section is under development.')}</p>
              </div>
            </Layout>
          } />
          <Route path="/livestock" element={
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('Livestock Management')}</h2>
                <p className="text-gray-600">{t('This section is under development.')}</p>
              </div>
            </Layout>
          } />
          <Route path="/inventory" element={
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('Inventory Management')}</h2>
                <p className="text-gray-600">{t('This section is under development.')}</p>
              </div>
            </Layout>
          } />
          <Route path="/schedule" element={
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('Schedule')}</h2>
                <p className="text-gray-600">{t('This section is under development.')}</p>
              </div>
            </Layout>
          } />
          <Route path="/weather" element={
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('Weather')}</h2>
                <p className="text-gray-600">{t('This section is under development.')}</p>
              </div>
            </Layout>
          } />
          <Route path="/finances" element={
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('Finances')}</h2>
                <p className="text-gray-600">{t('This section is under development.')}</p>
              </div>
            </Layout>
          } />
          <Route path="/reports" element={
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('Reports')}</h2>
                <p className="text-gray-600">{t('This section is under development.')}</p>
              </div>
            </Layout>
          } />
          <Route path="/settings" element={
            <Layout>
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('Settings')}</h2>
                <p className="text-gray-600">{t('This section is under development.')}</p>
              </div>
            </Layout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
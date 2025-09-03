import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

function App() {
  return (
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Crop Management</h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </Layout>
        } />
        <Route path="/fields" element={
          <Layout>
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Field Management</h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </Layout>
        } />
        <Route path="/livestock" element={
          <Layout>
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Livestock Management</h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </Layout>
        } />
        <Route path="/inventory" element={
          <Layout>
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Inventory Management</h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </Layout>
        } />
        <Route path="/schedule" element={
          <Layout>
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule</h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </Layout>
        } />
        <Route path="/weather" element={
          <Layout>
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Weather</h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </Layout>
        } />
        <Route path="/finances" element={
          <Layout>
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Finances</h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </Layout>
        } />
        <Route path="/reports" element={
          <Layout>
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reports</h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </Layout>
        } />
        <Route path="/settings" element={
          <Layout>
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
              <p className="text-gray-600">This section is under development.</p>
            </div>
          </Layout>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
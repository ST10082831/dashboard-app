import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import AppBarComponent from './AppBar';
import Sidebar from './Sidebar.js';
import Home from './Home.js';
import Transactions from './Transactions.js';
import Payments from './Payments.js';
import LocalPaymentForm from './LocalPaymentForm.js';
import InternationalPaymentForm from './InternationalPaymentForm.js';

const Dashboard = () => {
    return (
      <Box sx={{ display: 'flex' }}>
        <AppBarComponent />
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/payments/local" element={<LocalPaymentForm />} />
            <Route path="/payments/international" element={<InternationalPaymentForm />} />
          </Routes>
        </Box>
      </Box>
    );
  };
  
  export default Dashboard;

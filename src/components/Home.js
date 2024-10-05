import React from 'react';
import { Grid } from '@mui/material';
import Greeting from './Greeting.js';
import PaymentsMenu from './PaymentsMenu.js';
import BankingDetails from './BankingDetails.js';
import PaymentReceipts from './PaymentReceipts.js';

const Home = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Greeting />
      </Grid>
      <Grid item xs={12} md={6}>
        <PaymentsMenu />
      </Grid>
      <Grid item xs={12} md={6}>
        <BankingDetails />
      </Grid>
      <Grid item xs={12}>
        <PaymentReceipts />
      </Grid>
    </Grid>
  );
};

export default Home;

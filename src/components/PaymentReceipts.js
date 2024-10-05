import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const TransactionCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
}));

const PaymentReceipts = () => {
  const transactions = [
    { date: '2023-10-05', reference: 'REF001', amount: '$500.00' },
    { date: '2023-10-04', reference: 'REF002', amount: '$750.00' },
  
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Payment Receipts
      </Typography>
      {transactions.map((tx, index) => (
        <TransactionCard key={index} elevation={3}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" color="textSecondary">
                  Date
                </Typography>
                <Typography variant="body1">{tx.date}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" color="textSecondary">
                  Reference
                </Typography>
                <Typography variant="body1">{tx.reference}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" color="textSecondary">
                  Amount
                </Typography>
                <Typography variant="body1">{tx.amount}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </TransactionCard>
      ))}
    </Box>
  );
};

export default PaymentReceipts;

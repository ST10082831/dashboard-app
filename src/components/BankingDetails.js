import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
  overflow: 'hidden',
}));

const BalanceTypography = styled(Typography)(({ theme, balance }) => ({
  color: balance >= 0 ? theme.palette.success.main : theme.palette.error.main,
}));

const BankingDetails = () => {
  const accountNumber = '1234567890';
  const availableBalance = 10000;

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Banking Details
      </Typography>
      <Card elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" color="textSecondary">
              Account Number
            </Typography>
            <Typography variant="h6">{accountNumber}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" color="textSecondary">
              Available Balance
            </Typography>
            <BalanceTypography variant="h6" balance={availableBalance}>
              ${availableBalance.toFixed(2)}
            </BalanceTypography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default BankingDetails;
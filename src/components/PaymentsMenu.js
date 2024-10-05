import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { LocalAtm, Public } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const PaymentsMenu = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Make a Payment
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LocalAtm />}
            onClick={() => navigate('/payments/local')}
          >
            Make Local Payment
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Public />}
            onClick={() => navigate('/payments/international')}
          >
            Make International Payment
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentsMenu;
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 4,
        py: 2,
        textAlign: 'center',
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Typography variant="body2">© 2023 BankApp. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;

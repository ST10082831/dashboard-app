import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));

const Image = styled('img')({
  width: '100%',
  maxWidth: '400px',
  marginBottom: '20px',
});

const LocalPaymentForm = () => {
  const [formData, setFormData] = useState({
    recipientAccount: '',
    amount: '',
    reference: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Local payment submitted!');
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto' }}>
      <FormContainer elevation={3}>
        <Typography variant="h5" gutterBottom>
          Local Payment
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Recipient Account"
            name="recipientAccount"
            value={formData.recipientAccount}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Reference"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit Payment
          </Button>
        </form>
      </FormContainer>
    </Box>
  );
};

export default LocalPaymentForm;

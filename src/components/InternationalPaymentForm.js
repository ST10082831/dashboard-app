import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const InternationalPaymentForm = () => {
  const [formData, setFormData] = useState({
    recipientAccount: '',
    recipientBank: '',
    swiftCode: '',
    amount: '',
    reference: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('International payment submitted!');
  };

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom>
        International Payment
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
          label="Recipient Bank"
          name="recipientBank"
          value={formData.recipientBank}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="SWIFT Code"
          name="swiftCode"
          value={formData.swiftCode}
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
    </Box>
  );
};

export default InternationalPaymentForm;

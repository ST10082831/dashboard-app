import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const GreetingBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundImage: 'url(/images/greeting-bg.jpg)', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'center',
}));

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(98, 0, 238, 0.7)',
});

const GreetingContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

const Greeting = () => {
  const userName = 'John Doe'; 

  return (
    <GreetingBox>
      <Overlay />
      <GreetingContent>
        <Typography variant="h4">Welcome back, {userName}!</Typography>
        <Typography variant="subtitle1">
          Here's a summary of your account.
        </Typography>
      </GreetingContent>
    </GreetingBox>
  );
};

export default Greeting;
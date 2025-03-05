import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import BgVideo from '../../assets/HeroSection/HeroBg.mp4';

export const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: '700px',
        overflow: 'hidden',
      }}
    >

      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={BgVideo} type="video/mp4" />
      </video>

      
      <Box
        sx={{
          width: { xs: '80%', md: '50%' },
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            my: 2,
            fontSize: { xs: '2rem', sm: '2rem', md: '3rem' },
          }}
        >
          TASTE THE FUSION OF FLAVORS AT TANGY TWISTER
        </Typography>
        <Typography sx={{ my: 2, fontWeight: 'bold' }}>
          Discover an exciting blend of international cuisines at Tangy Twisters.
        </Typography>
        <Button
          sx={{
            my: 2,
            p: 2,
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            backgroundColor: '#BE2A2E',
            borderRadius: '15px',
          }}
        >
          Explore Our Menu
        </Button>
      </Box>
    </Box>
  );
};

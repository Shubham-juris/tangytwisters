import { Box, Typography,Button } from '@mui/material'
import React from 'react'
import HeroImg from '../../assets/HeroSection/HeroImage.jpg'
import { Padding } from '@mui/icons-material'
export const Hero = () => {
  return (
   <Box sx={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundImage:`url(${HeroImg})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
   }}>
        <Box sx={{
            height:'700px',
           width:{xs:'80%',md:'50%'},
            flexDirection:'column',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Typography sx={{
                my:2,
                textAlign:'center',
                color:'#fff',
                fontSize:{xs:'2rem', sm:'2rem', md:'3rem'}
                
            }}>TASTE THE FUSION OF FLAVORS AT TANGY TWISTER</Typography>
            <Typography sx={{
                 my:2,
                color:'#fff',
                fontWeight:'bold',
            }}> Discover an exciting blend of international cuisines at Tangy Twisters. </Typography>
            <Button sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                 my:2,
                p:2,
                color:'#fff',
                fontSize:'1.1rem',
                fontWeight:'bold',
                backgroundColor:'#BE2A2E',
                borderRadius:'15px'
            }}>Explore Our Menu</Button>
        </Box>
   </Box>
  )
}

import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/Navbar/logo.png'
const Navbar = () => {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'space-around',
        alignContent:'center',
        backgroundColor:'#161616',
        padding:'16px',
    }}>
        <Box sx={{
            display:{xs:'none',sm:'flex'},
            justifyContent:'center',
            alignContent:'center',
        }}>
            <Button sx={{
            color:'#fff'
        }}>Home</Button>
            <Button sx={{
            color:'#fff'
        }}>About Us</Button>
            <Button sx={{
            color:'#fff'
        }}> Menu</Button>
        </Box>
        <img src={logo}></img>
        <Box sx={{
              display:{xs:'none',sm:'flex'},
            justifyContent:'center',
            alignContent:'center',
        }}>
            <Button sx={{
            color:'#fff'
        }}>Reservation</Button>
            <Button sx={{
            color:'#fff'
        }}>Gallery</Button>
            <Button sx={{
            color:'#fff'
        }}> Contact Us</Button>
        </Box>
    </Box>
  )
}

export default Navbar
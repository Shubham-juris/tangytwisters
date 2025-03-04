import { Box,Typography } from '@mui/material'
import React from 'react'
import About1 from '../../assets/About/About1.png'
import About2 from '../../assets/About/About2.png'
import About3 from '../../assets/About/About3.png'
export const About = () => {
  return (
    <Box sx={{
        // width:"80%",
    }}>
        <Typography sx={{
            textAlign:'center',
            py:{xs:4, sm:6},
            fontSize:{xs:'1.5rem',sm:'2rem', md:'3rem'},
            fontWeight:'bold',
        }}>ABOUT TANGY TWISTERS</Typography>
        <Box sx={{
        display:'flex',
        justifyContent:'center',
        
        alignItems:'center',
        flexDirection:{xs:'column', md:'row'},
        gap:2,
    }}>
            <Box sx={{
               width:{xs:'80%', md:'30%'},
               display:'flex',
                justifyContent:'center',
                flexDirection:'column',
            }}>
                <img src={About1} style={{
                    borderRadius:'50%'
                }}></img>
                <Typography sx={{
                    my:2,
                    textAlign:'center',
                }}>Our Food</Typography>
                <Typography sx={{
                    my:2,
                    textAlign:'center',
                    color:'#9D816D'
                }}>At Tangy Twisters, we are passionate about creating delicious and high-quality meals using fresh ingredients sourced from local farmers. Our chefs have years of experience and are dedicated to providing an exceptional dining experience.</Typography>
            </Box>
            <Box sx={{
                 width:{xs:'80%', md:'30%'},
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
            }}>
                <img src={About2} style={{
                    borderRadius:'50%'
                }}></img>
                <Typography sx={{
                     my:2,
                    textAlign:'center',
                }}>Our Menu</Typography>
                <Typography sx={{
                     my:2,
                    textAlign:'center',
                    color:'#9D816D'
                }}>At Tangy Twisters, We offer a wide variety and high quality of dishes to suit all tastes, including, Pizza, Indian cuisine,  vegetarian and vegan options. Our menu changes seasonally to ensure we are always using the freshest ingredients available.</Typography>
            </Box>
            <Box sx={{
                 width:{xs:'80%', md:'30%'},
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
            }}>
                <img src={About3} style={{
                    borderRadius:'50%'
                }}></img>
                <Typography sx={{
                     my:2,
                    textAlign:'center',
                }}>Our Team</Typography>
                <Typography sx={{
                     my:2,
                    textAlign:'center',
                    color:'#9D816D'
                }}>At Tangy Twisters, Our team is made up of experienced professionals who are passionate about food and hospitality. From our chefs to our servers, everyone at Tangy Twisters is dedicated to providing the best possible dining experience to our guests.</Typography>
            </Box>
        </Box>
    </Box>
  )
}

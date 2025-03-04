import { Box, Typography } from '@mui/material'
import React from 'react'
import ExperienceImg from '../../assets/Experience/ExperienceImg.png'
export const Experience = () => {
  return (
    <Box className="maincontainer" sx={{
        overflow:"hidden",
        display:'flex',
        flexDirection:{xs:'column-reverse', md:'row'}
    }}>
        <Box className="textcontainer" sx={{
            overflow:"hidden",
            p:2,   
            width:{xs:'100%',md:'50%'},
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:"center",
            backgroundColor:'#BE2A2E'
        }}>
            <Box sx={{
                width:{xs:"80%",sm:'70%',md:'60%'},
               
            }}>
            <Typography sx={{
                color:"#fff",
                fontSize:'1.5rem',
                my:2,
            }}>The Tangy Twisters Experience</Typography>
            <Typography sx={{
                color:"#fff",
                my:2,
            }}>Our Concept</Typography>
            <Typography sx={{
                color:"#fff",
                my:2,
            }}>At Tangy Twisters, we believe that dining out should be an experience that engages all of your senses. That's why we create dishes that not only taste amazing but also look and smell incredible. We believe that every meal should be a celebration and strive to make every visit to our restaurant a memorable one.</Typography>
            <Typography sx={{
                color:"#fff",
                my:2,
            }}>Our Atmosphere</Typography>
            <Typography sx={{
                color:"#fff",
                my:2,
            }}>Our restaurant is designed to provide a comfortable and inviting atmosphere for all of our guests. Whether you're looking for a romantic night out or a fun evening with friends, our restaurant is the perfect place to relax and unwind. From the warm lighting to the cozy seating, every detail has been carefully curated to create an unforgettable dining experience.</Typography>
            <Typography sx={{
                color:"#fff",
                my:2,
            }}>Tradition</Typography>
            <Typography sx={{
                color:"#fff",
                my:2,
            }}>At Tangy Twisters, we believe that a great meal is not complete without a great drink. That's why we have an extensive drink list featuring wines from around the world. Our sommelier is always available to help you choose the perfect pizza and drink to pair with your meal.</Typography>
            </Box>
        </Box>
        <Box className="Imagecontainer" sx={{

            width:{xs:'100%',md:'50%'},
            height: {xs:'400px', sm:'600px',md:'auto'},
            // height:{xs:'50%', sm:'auto'},
            backgroundImage:`url(${ExperienceImg})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat'
        }}>
            {/* <img src={ExperienceImg}></img> */}
        </Box>

    </Box>
  )
}

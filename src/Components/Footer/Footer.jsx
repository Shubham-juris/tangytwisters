import React from "react";
import { Box, Typography, Link, IconButton, Container, TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111",
        color: "white",
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box mb={4}>
          <Typography variant="h6" color="inherit" gutterBottom>
            Visit Us
          </Typography>
          <Typography variant="body1" color="inherit" gutterBottom>
            <strong>Special Requests?</strong>
          </Typography>
          <Typography variant="body2" color="inherit" gutterBottom>
            Do you have dietary concerns? Questions about an upcoming event? Drop us a line, and we'll get back to you soon.
          </Typography>
          <Typography variant="body1" color="inherit" gutterBottom>
            <strong>Tangy Twisters</strong>
          </Typography>
          <Typography variant="body2" color="inherit">
            21 Beju Industrial Drive, Unit 4, Sylvan Lake, AB T4S 2J7
          </Typography>
          <Typography variant="body2" color="inherit">
            <Link href="mailto:tangytwisters.resto@gmail.com" color="inherit">tangytwisters.resto@gmail.com</Link>
          </Typography>
          <Typography variant="body2" color="inherit">
            Phone: +1-587-839-7135
          </Typography>
          <Typography variant="body1" color="inherit" mt={2}>
            <strong>Hours</strong>
          </Typography>
          <Typography variant="body2" color="inherit">
            Open today: 09:00 a.m. – 05:00 p.m.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h6" color="inherit" gutterBottom>
            Contact Us
          </Typography>
          <TextField fullWidth label="Name" variant="filled" sx={{ backgroundColor: "white", mb: 2 }} />
          <TextField fullWidth label="Email*" variant="filled" sx={{ backgroundColor: "white", mb: 2 }} />
          <TextField fullWidth label="How can we serve you?" multiline rows={4} variant="filled" sx={{ backgroundColor: "white", mb: 2 }} />
          <Button variant="contained" sx={{ mr: 2, backgroundColor: "#D32F2F", color: "white" }}>Send</Button>
          <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>Cancel</Button>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Tangy Twisters - All Rights Reserved.
          </Typography>
          <Box>
            <IconButton color="inherit" component={Link} href="#">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" component={Link} href="#">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
        <Box mt={2} display="flex" justifyContent="center" gap={2} flexWrap="wrap">
          <Link href="#" color="inherit" underline="none">
            Home
          </Link>
          <Link href="#" color="inherit" underline="none">
            About Us
          </Link>
          <Link href="#" color="inherit" underline="none">
            Menu
          </Link>
          <Link href="#" color="inherit" underline="none">
            Reservations
          </Link>
          <Link href="#" color="inherit" underline="none">
            Gallery
          </Link>
          <Link href="#" color="inherit" underline="none">
            Contact Us
          </Link>
        </Box>
        <Typography variant="body2" color="gray" textAlign="center" mt={2}>
          Powered by KTL Software Inc.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

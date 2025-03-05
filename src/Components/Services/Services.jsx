import React from "react";
import { Card, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import AppetizersImg from "../../assets/Services/appetizers.jpg";
import PizzaImg from "../../assets/Services/pizza.jpg";
import DrinkImg from "../../assets/Services/drink.jpg"; 

const ServiceCard = styled(Card)({
  textAlign: "center",
  padding: "30px",
  borderRadius: "15px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  minHeight: "320px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px", 
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#ffe6e6",
  },
});

const services = [
  {
    id: "appetizers",
    title: "APPETIZERS",
    image: AppetizersImg, 
    description:
      "Enhance your meal with our irresistible appetizers that perfectly complement our pizzas.",
  },
  {
    id: "pizza",
    title: "PIZZA",
    image: PizzaImg,  
    description:
      "Indulge in our handcrafted pizzas, made with the finest ingredients.",
  },
  {
    id: "drink",
    title: "DRINK",
    image: DrinkImg,
    description:
      "Satisfy your thirst with our selection of refreshing drinks.",
  },
];

const Services = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Delicious Cuisine at Tangy Twisters
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <ServiceCard>
              <Typography variant="h5" color="error"> 
                {service.title}
              </Typography>
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  maxWidth: "300px", 
                  height: "auto",
                  borderRadius: "50%",
                }}
              />
              <Typography variant="body1">
                {service.description}
              </Typography>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;

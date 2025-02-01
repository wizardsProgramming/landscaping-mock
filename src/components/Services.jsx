import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';



function Services() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" gutterBottom align="center">
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {/* Lawn Care */}
        <Grid item xs={12} sm={4}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="200"
              image="/images/lawnCutting.jpg" // Replace with actual image URL
              alt="Lawn Care"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Lawn Care
              </Typography>
              <Typography>
                Professional lawn maintenance for a healthy green lawn.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Garden Design */}
        <Grid item xs={12} sm={4}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="200"
              image="/images/gardenDesign.jpg" // Replace with actual image URL
              alt="Garden Design"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Garden Design
              </Typography>
              <Typography>
                Creative garden designs to enhance your outdoor space.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Hardscaping */}
        <Grid item xs={12} sm={4}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="200"
              image="/images/patioFence.jpg" // Replace with actual image URL
              alt="Hardscaping"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Hardscaping
              </Typography>
              <Typography>
                Installation of patios, walkways, and retaining walls.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services;

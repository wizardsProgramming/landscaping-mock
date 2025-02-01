import React from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';  // <-- Added Typography

function Contact() {
  return (
    <Box sx={{ backgroundColor: '#1976d2', color: 'white', py: 10 }}>
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Contact Us
        </Typography>
        <form>
          <TextField label="Your Name" fullWidth variant="outlined" sx={{ mb: 3 }} />
          <TextField label="Your Email" fullWidth variant="outlined" sx={{ mb: 3 }} />
          <TextField label="Message" fullWidth multiline rows={4} variant="outlined" sx={{ mb: 3 }} />
          <Button variant="contained" color="secondary" fullWidth>Send Message</Button>
        </form>
      </Container>
    </Box>
  );
}

export default Contact;


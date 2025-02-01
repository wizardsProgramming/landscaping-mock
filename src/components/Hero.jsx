import React, { useState } from 'react';
import { 
  Container, Typography, Button, Box, Modal, Backdrop, Fade, 
  TextField, MenuItem, List, ListItem, ListItemText 
} from '@mui/material';

function Hero() {
  const [openQuote, setOpenQuote] = useState(false);
  const [openServiceModal, setOpenServiceModal] = useState(false);
  const [service, setService] = useState('');
  const [subService, setSubService] = useState('');
  const [size, setSize] = useState('');
  const [estimate, setEstimate] = useState(null);
  const [serviceList, setServiceList] = useState([]);

  // Pricing for each sub-service
  const serviceOptions = {
    Lawncare: { "Mowing": 1.5, "Edging": 1.8, "Weed Control": 2.2, "Fertilization": 2.5, "Aeration": 2.7 },
    "Garden Design": { "Plant Selection": 3.0, "Mulching": 2.8, "Landscape Planning": 4.2, "Garden Bed Installation": 3.5 },
    Hardscaping: { "Patios": 5.0, "Walkways": 4.5, "Retaining Walls": 6.2, "Stonework": 5.8, "Outdoor Fireplaces": 7.0 }
  };

  // Open the main quote modal
  const handleOpenQuote = () => setOpenQuote(true);
  const handleCloseQuote = () => {
    setOpenQuote(false);
    setEstimate(null);
    setService('');
    setSubService('');
    setSize('');
  };

  // Open the service modal when a service is selected
  const handleServiceSelect = (selectedService) => {
    setService(selectedService);
    setServiceList(Object.keys(serviceOptions[selectedService])); // Extract sub-services
    setSubService('');
    setOpenServiceModal(true);
  };

  // Close the service modal
  const handleCloseServiceModal = () => setOpenServiceModal(false);

  // Handle sub-service selection
  const handleSubServiceSelect = (selectedSubService) => {
    setSubService(selectedSubService);
    setOpenServiceModal(false);
  };

  // Calculate the estimate based on selected sub-service and size
  const handleCalculate = () => {
    if (!service || !subService || !size) {
      alert("Please select a service, a sub-service, and enter a valid size.");
      return;
    }

    let pricePerSqFt = serviceOptions[service][subService] || 0;
    let price = size * pricePerSqFt;

    setEstimate(`Estimated cost for ${subService}: $${price.toFixed(2)}`);
  };

  return (
    <Box sx={{ backgroundColor: '#1976d2', color: 'white', textAlign: 'center', py: 10 }}>
      <Container>
        <Typography variant="h3" gutterBottom>
          Transform Your Outdoors
        </Typography>
        <Typography variant="h5" paragraph>
          Premium landscaping services to make your garden beautiful
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleOpenQuote}>
          Get a Quote
        </Button>
      </Container>

      {/* Quote Modal */}
      <Modal
        open={openQuote}
        onClose={handleCloseQuote}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={openQuote}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2
          }}>
            <Typography variant="h5" gutterBottom>Get an Estimate</Typography>

            {/* Service Selection */}
            <TextField
              select fullWidth label="Select Service" value={service}
              onChange={(e) => handleServiceSelect(e.target.value)}
              sx={{ mb: 2 }}
            >
              <MenuItem value="Lawncare">Lawncare</MenuItem>
              <MenuItem value="Garden Design">Garden Design</MenuItem>
              <MenuItem value="Hardscaping">Hardscaping</MenuItem>
            </TextField>

            {/* Selected Sub-Service Display */}
            {subService && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                Selected Sub-Service: <strong>{subService}</strong>
              </Typography>
            )}

            {/* Size Input */}
            <TextField
              type="number" fullWidth label="Enter Yard Size (sq ft)"
              value={size} onChange={(e) => setSize(e.target.value)} sx={{ mb: 2 }}
            />

            <Button variant="contained" color="primary" fullWidth onClick={handleCalculate}>
              Calculate Estimate
            </Button>

            {/* Show Estimate */}
            {estimate && <Typography variant="h6" sx={{ mt: 2 }}>{estimate}</Typography>}
          </Box>
        </Fade>
      </Modal>

      {/* Service Details Modal */}
      <Modal
        open={openServiceModal}
        onClose={handleCloseServiceModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={openServiceModal}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2
          }}>
            <Typography variant="h5" gutterBottom>Select a {service} Service</Typography>
            <List>
              {serviceList.map((item, index) => (
                <ListItem button key={index} onClick={() => handleSubServiceSelect(item)}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>

            <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }} onClick={handleCloseServiceModal}>
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default Hero;

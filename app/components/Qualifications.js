import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import Education from './Education';
import Certifications from './Certifications';
import Skills from './Skills';

const Qualifications = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #ffffff, #b3d9ff)', // Gradient from white to blue for the whole background
        padding: '4rem 0', // Add padding around the section
      }}
    >
      <Container sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Grid
          container
          spacing={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Education />
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Certifications />
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Skills />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Qualifications;

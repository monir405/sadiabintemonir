import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    date: 'February 8, 2026',
  },
  {
    title: 'Data Analysis With Python by freeCodeCamp',
    date: 'January 20, 2024',
  },
  {
    title: 'Responsive Web Design by freeCodeCamp',
    date: 'October 28, 2023',
  },
  {
    title: 'Scientific Computing With Python by freeCodeCamp',
    date: 'October 12, 2023',
  },
];

const Certifications = () => {
  return (
    <Card
      sx={{
        background: 'linear-gradient(to bottom, #d0e6ff, #ffffff)',
        borderRadius: '8px',
        padding: '1rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%',
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Certifications
        </Typography>

        {certifications.map((certification) => (
          <Box
            key={certification.title}
            sx={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '1rem' }}
          >
            <VerifiedIcon sx={{ marginTop: '0.15rem' }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {certification.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                {certification.date}
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default Certifications;

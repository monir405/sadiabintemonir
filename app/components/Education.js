import React from 'react';
import { Typography, Card, CardContent, Box, List, ListItem, ListItemIcon } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const coursework = [
  'Database Management Systems',
  'Operating Systems (Linux)',
  'Advanced Java, Python',
  'Web App Development',
  'JavaScript, HTML5/CSS',
  'Programming For Mobile Devices with React Native',
];

const Education = () => {
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
          Education
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <SchoolIcon sx={{ marginTop: '0.2rem' }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Software Development Co-op
            </Typography>
            <Typography variant="body1">College Of North Atlantic</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <EventAvailableIcon />
          <Box>
            <Typography variant="body1" sx={{ color: '#555' }}>
              09/2023 - 04/2026
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '1.75rem', marginBottom: '0.5rem' }}>
          Relevant Coursework:
        </Typography>

        <List sx={{ paddingLeft: '0.5rem', marginTop: 0 }}>
          {coursework.map((item) => (
            <ListItem key={item} disableGutters sx={{ alignItems: 'flex-start', marginBottom: '0.35rem' }}>
              <ListItemIcon sx={{ minWidth: 'auto', marginRight: '0.65rem', marginTop: '0.45rem' }}>
                <FiberManualRecordIcon sx={{ fontSize: '0.55rem' }} />
              </ListItemIcon>
              <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Education;
